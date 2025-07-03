import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  // News Sources
  newsApi: {
    key: process.env.NEWS_API_KEY,
    baseUrl: 'https://newsapi.org/v2',
    sources: [
      'bbc-news', 'reuters', 'associated-press', 'cnn', 
      'the-guardian-uk', 'the-new-york-times', 'bloomberg',
      'techcrunch', 'espn', 'entertainment-weekly'
    ],
    categories: ['politics', 'business', 'entertainment', 'sports', 'technology', 'health']
  },

  // AI Processing
  ai: {
    huggingFace: {
      apiKey: process.env.HUGGING_FACE_API_KEY,
      models: {
        sentiment: 'cardiffnlp/twitter-roberta-base-sentiment-latest',
        summarization: 'facebook/bart-large-cnn',
        classification: 'microsoft/DialoGPT-medium'
      }
    },
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
      model: 'gpt-3.5-turbo'
    }
  },

  // Social Media
  social: {
    twitter: {
      apiKey: process.env.TWITTER_API_KEY,
      apiSecret: process.env.TWITTER_API_SECRET,
      accessToken: process.env.TWITTER_ACCESS_TOKEN,
      accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    },
    facebook: {
      pageAccessToken: process.env.FACEBOOK_PAGE_ACCESS_TOKEN,
      pageId: process.env.FACEBOOK_PAGE_ID
    },
    linkedin: {
      accessToken: process.env.LINKEDIN_ACCESS_TOKEN
    }
  },

  // Content Settings
  content: {
    categories: process.env.CONTENT_CATEGORIES?.split(',') || ['politics', 'business', 'technology'],
    postingInterval: parseInt(process.env.POSTING_INTERVAL_MINUTES) || 30,
    maxPostsPerHour: parseInt(process.env.MAX_POSTS_PER_HOUR) || 4,
    sentimentThreshold: parseFloat(process.env.SENTIMENT_THRESHOLD) || 0.1,
    duplicateThreshold: parseFloat(process.env.DUPLICATE_THRESHOLD) || 0.8,
    summaryMaxLength: 280,
    hashtagLimit: 5
  },

  // Content Filtering
  filtering: {
    blockedKeywords: process.env.BLOCKED_KEYWORDS?.split(',') || ['violence', 'explicit'],
    requiredKeywords: process.env.REQUIRED_KEYWORDS?.split(',') || ['news', 'breaking'],
    minWordCount: 100,
    maxAge: 24 // hours
  }
};