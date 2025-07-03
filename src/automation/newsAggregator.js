import axios from 'axios';
import { CONFIG } from './config.js';
import { ContentProcessor } from './contentProcessor.js';
import { Logger } from './utils/logger.js';

export class NewsAggregator {
  constructor() {
    this.processor = new ContentProcessor();
    this.logger = new Logger('NewsAggregator');
    this.fetchedArticles = new Set();
  }

  async fetchFromNewsAPI(category = 'general') {
    try {
      const response = await axios.get(`${CONFIG.newsApi.baseUrl}/top-headlines`, {
        params: {
          apiKey: CONFIG.newsApi.key,
          category: category,
          language: 'en',
          pageSize: 20,
          sources: CONFIG.newsApi.sources.join(',')
        }
      });

      return response.data.articles || [];
    } catch (error) {
      this.logger.error(`Failed to fetch from NewsAPI: ${error.message}`);
      return [];
    }
  }

  async fetchFromGoogleNews(query = 'latest news') {
    try {
      // Using Google News RSS feed (free)
      const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en&gl=US&ceid=US:en`;
      const response = await axios.get(rssUrl);
      
      // Parse RSS feed (simplified - you might want to use a proper RSS parser)
      const articles = this.parseRSSFeed(response.data);
      return articles;
    } catch (error) {
      this.logger.error(`Failed to fetch from Google News: ${error.message}`);
      return [];
    }
  }

  parseRSSFeed(rssData) {
    // Simplified RSS parsing - in production, use a proper RSS parser
    const articles = [];
    const itemRegex = /<item>(.*?)<\/item>/gs;
    const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
    const linkRegex = /<link>(.*?)<\/link>/;
    const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;
    const descriptionRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/;

    let match;
    while ((match = itemRegex.exec(rssData)) !== null) {
      const item = match[1];
      const title = titleRegex.exec(item)?.[1];
      const link = linkRegex.exec(item)?.[1];
      const pubDate = pubDateRegex.exec(item)?.[1];
      const description = descriptionRegex.exec(item)?.[1];

      if (title && link) {
        articles.push({
          title,
          url: link,
          publishedAt: pubDate,
          description: description || '',
          source: { name: 'Google News' }
        });
      }
    }

    return articles;
  }

  async fetchFromMultipleSources() {
    const allArticles = [];

    // Fetch from NewsAPI for each category
    for (const category of CONFIG.content.categories) {
      const articles = await this.fetchFromNewsAPI(category);
      allArticles.push(...articles.map(article => ({ ...article, category })));
      
      // Rate limiting
      await this.delay(1000);
    }

    // Fetch from Google News
    const googleArticles = await this.fetchFromGoogleNews('breaking news');
    allArticles.push(...googleArticles);

    return allArticles;
  }

  async filterAndProcessArticles(articles) {
    const processedArticles = [];

    for (const article of articles) {
      try {
        // Skip if already processed
        if (this.fetchedArticles.has(article.url)) {
          continue;
        }

        // Basic filtering
        if (!this.passesBasicFilter(article)) {
          continue;
        }

        // Process with AI
        const processedArticle = await this.processor.processArticle(article);
        
        if (processedArticle && this.passesQualityFilter(processedArticle)) {
          processedArticles.push(processedArticle);
          this.fetchedArticles.add(article.url);
        }

      } catch (error) {
        this.logger.error(`Error processing article: ${error.message}`);
      }
    }

    return processedArticles;
  }

  passesBasicFilter(article) {
    // Check age
    const articleDate = new Date(article.publishedAt);
    const maxAge = CONFIG.filtering.maxAge * 60 * 60 * 1000; // Convert to milliseconds
    if (Date.now() - articleDate.getTime() > maxAge) {
      return false;
    }

    // Check blocked keywords
    const content = `${article.title} ${article.description}`.toLowerCase();
    for (const keyword of CONFIG.filtering.blockedKeywords) {
      if (content.includes(keyword.toLowerCase())) {
        return false;
      }
    }

    // Check minimum content
    if (!article.title || article.title.length < 10) {
      return false;
    }

    return true;
  }

  passesQualityFilter(article) {
    // Check sentiment
    if (article.sentiment && article.sentiment.score < CONFIG.content.sentimentThreshold) {
      return false;
    }

    // Check for duplicates
    if (article.duplicateScore > CONFIG.content.duplicateThreshold) {
      return false;
    }

    return true;
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async run() {
    try {
      this.logger.info('Starting news aggregation...');
      
      const articles = await this.fetchFromMultipleSources();
      this.logger.info(`Fetched ${articles.length} articles`);

      const processedArticles = await this.filterAndProcessArticles(articles);
      this.logger.info(`Processed ${processedArticles.length} articles`);

      return processedArticles;
    } catch (error) {
      this.logger.error(`News aggregation failed: ${error.message}`);
      return [];
    }
  }
}