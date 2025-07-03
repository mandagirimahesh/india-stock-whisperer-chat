import axios from 'axios';
import Sentiment from 'sentiment';
import natural from 'natural';
import { CONFIG } from './config.js';
import { Logger } from './utils/logger.js';

export class ContentProcessor {
  constructor() {
    this.sentiment = new Sentiment();
    this.logger = new Logger('ContentProcessor');
    this.processedContent = new Map();
  }

  async processArticle(article) {
    try {
      const processed = {
        ...article,
        id: this.generateId(article.url),
        processedAt: new Date().toISOString()
      };

      // Generate summary
      processed.summary = await this.generateSummary(article);
      
      // Analyze sentiment
      processed.sentiment = this.analyzeSentiment(article);
      
      // Generate hashtags
      processed.hashtags = this.generateHashtags(article);
      
      // Check for duplicates
      processed.duplicateScore = this.checkDuplicates(article);
      
      // Classify content
      processed.classification = await this.classifyContent(article);
      
      // Extract key information
      processed.keyInfo = this.extractKeyInformation(article);

      return processed;
    } catch (error) {
      this.logger.error(`Error processing article: ${error.message}`);
      return null;
    }
  }

  async generateSummary(article) {
    try {
      // Try Hugging Face API first (free tier)
      if (CONFIG.ai.huggingFace.apiKey) {
        return await this.generateSummaryHuggingFace(article);
      }
      
      // Fallback to local summarization
      return this.generateSummaryLocal(article);
    } catch (error) {
      this.logger.error(`Summary generation failed: ${error.message}`);
      return this.generateSummaryLocal(article);
    }
  }

  async generateSummaryHuggingFace(article) {
    const text = `${article.title}. ${article.description || ''}`;
    
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${CONFIG.ai.huggingFace.models.summarization}`,
      {
        inputs: text,
        parameters: {
          max_length: 100,
          min_length: 30,
          do_sample: false
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${CONFIG.ai.huggingFace.apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const summary = response.data[0]?.summary_text || '';
    return this.truncateToLimit(summary, CONFIG.content.summaryMaxLength);
  }

  generateSummaryLocal(article) {
    // Simple extractive summarization
    const text = `${article.title}. ${article.description || ''}`;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10);
    
    if (sentences.length <= 2) {
      return this.truncateToLimit(text, CONFIG.content.summaryMaxLength);
    }

    // Take first two sentences or until character limit
    let summary = '';
    for (const sentence of sentences.slice(0, 2)) {
      if (summary.length + sentence.length > CONFIG.content.summaryMaxLength - 10) {
        break;
      }
      summary += sentence.trim() + '. ';
    }

    return this.truncateToLimit(summary.trim(), CONFIG.content.summaryMaxLength);
  }

  analyzeSentiment(article) {
    const text = `${article.title} ${article.description || ''}`;
    const result = this.sentiment.analyze(text);
    
    return {
      score: result.score,
      comparative: result.comparative,
      positive: result.positive,
      negative: result.negative,
      label: result.score > 0 ? 'positive' : result.score < 0 ? 'negative' : 'neutral'
    };
  }

  generateHashtags(article) {
    const text = `${article.title} ${article.description || ''}`.toLowerCase();
    const words = natural.WordTokenizer().tokenize(text);
    
    // Remove stop words
    const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should']);
    const filteredWords = words.filter(word => 
      word.length > 3 && 
      !stopWords.has(word) && 
      /^[a-zA-Z]+$/.test(word)
    );

    // Get word frequency
    const wordFreq = {};
    filteredWords.forEach(word => {
      wordFreq[word] = (wordFreq[word] || 0) + 1;
    });

    // Sort by frequency and take top words
    const topWords = Object.entries(wordFreq)
      .sort(([,a], [,b]) => b - a)
      .slice(0, CONFIG.content.hashtagLimit)
      .map(([word]) => `#${word.charAt(0).toUpperCase() + word.slice(1)}`);

    // Add category-specific hashtags
    const categoryHashtags = {
      politics: ['#Politics', '#Government', '#Policy'],
      business: ['#Business', '#Economy', '#Finance'],
      technology: ['#Technology', '#Tech', '#Innovation'],
      sports: ['#Sports', '#Athletics', '#Competition'],
      entertainment: ['#Entertainment', '#Celebrity', '#Movies'],
      health: ['#Health', '#Medical', '#Wellness']
    };

    if (article.category && categoryHashtags[article.category]) {
      topWords.unshift(categoryHashtags[article.category][0]);
    }

    // Add general news hashtags
    topWords.push('#News', '#Breaking');

    return topWords.slice(0, CONFIG.content.hashtagLimit);
  }

  checkDuplicates(article) {
    const currentText = `${article.title} ${article.description || ''}`.toLowerCase();
    let maxSimilarity = 0;

    for (const [, processedText] of this.processedContent) {
      const similarity = this.calculateSimilarity(currentText, processedText);
      maxSimilarity = Math.max(maxSimilarity, similarity);
    }

    // Store current article for future comparisons
    this.processedContent.set(article.url, currentText);

    // Clean old entries (keep last 100)
    if (this.processedContent.size > 100) {
      const entries = Array.from(this.processedContent.entries());
      this.processedContent.clear();
      entries.slice(-50).forEach(([key, value]) => {
        this.processedContent.set(key, value);
      });
    }

    return maxSimilarity;
  }

  calculateSimilarity(text1, text2) {
    const words1 = new Set(natural.WordTokenizer().tokenize(text1.toLowerCase()));
    const words2 = new Set(natural.WordTokenizer().tokenize(text2.toLowerCase()));
    
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size;
  }

  async classifyContent(article) {
    // Simple keyword-based classification
    const text = `${article.title} ${article.description || ''}`.toLowerCase();
    
    const categories = {
      breaking: ['breaking', 'urgent', 'alert', 'emergency', 'crisis'],
      trending: ['viral', 'trending', 'popular', 'buzz', 'sensation'],
      analysis: ['analysis', 'opinion', 'perspective', 'insight', 'commentary'],
      update: ['update', 'latest', 'new', 'recent', 'current']
    };

    const classification = {
      type: 'general',
      confidence: 0.5,
      tags: []
    };

    for (const [category, keywords] of Object.entries(categories)) {
      const matches = keywords.filter(keyword => text.includes(keyword));
      if (matches.length > 0) {
        classification.tags.push(category);
        if (matches.length > classification.confidence * keywords.length) {
          classification.type = category;
          classification.confidence = matches.length / keywords.length;
        }
      }
    }

    return classification;
  }

  extractKeyInformation(article) {
    const text = `${article.title} ${article.description || ''}`;
    
    // Extract numbers, dates, and named entities (simplified)
    const numbers = text.match(/\d+(?:,\d{3})*(?:\.\d+)?/g) || [];
    const dates = text.match(/\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\w+\s+\d{1,2},?\s+\d{4}\b/g) || [];
    const currencies = text.match(/\$\d+(?:,\d{3})*(?:\.\d+)?[BMK]?/g) || [];
    
    return {
      numbers: numbers.slice(0, 3),
      dates: dates.slice(0, 2),
      currencies: currencies.slice(0, 3),
      wordCount: text.split(/\s+/).length,
      readingTime: Math.ceil(text.split(/\s+/).length / 200) // Assuming 200 WPM
    };
  }

  truncateToLimit(text, limit) {
    if (text.length <= limit) return text;
    
    const truncated = text.substring(0, limit - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    
    return lastSpace > limit * 0.8 ? 
      truncated.substring(0, lastSpace) + '...' : 
      truncated + '...';
  }

  generateId(url) {
    return Buffer.from(url).toString('base64').substring(0, 16);
  }
}