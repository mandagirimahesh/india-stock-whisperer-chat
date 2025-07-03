# Automated News Aggregation and Publishing System

## Overview
This system automatically fetches, processes, and publishes news content to social media platforms using free AI tools and APIs.

## Features
- **News Aggregation**: Fetches from NewsAPI, Google News RSS, and other sources
- **AI Processing**: Uses Hugging Face (free tier) for summarization and sentiment analysis
- **Content Filtering**: Removes duplicates, inappropriate content, and low-quality articles
- **Social Publishing**: Automatically posts to Twitter, Facebook, and LinkedIn
- **Rate Limiting**: Respects API limits and posting frequency guidelines
- **Engagement Tracking**: Monitors post performance and metrics

## Setup Instructions

### 1. Environment Configuration
Copy `.env.example` to `.env` and fill in your API keys:

```bash
cp .env.example .env
```

### 2. Required API Keys (Free Tier)

#### NewsAPI (Free: 1000 requests/day)
1. Visit https://newsapi.org/register
2. Get your free API key
3. Add to `.env`: `NEWS_API_KEY=your_key_here`

#### Hugging Face (Free: 30,000 characters/month)
1. Visit https://huggingface.co/join
2. Go to Settings > Access Tokens
3. Create a new token
4. Add to `.env`: `HUGGING_FACE_API_KEY=your_key_here`

#### Social Media APIs

**Twitter API v2 (Free: 1500 tweets/month)**
1. Apply at https://developer.twitter.com/
2. Create a new app
3. Get API keys and tokens
4. Add to `.env`

**Facebook Graph API (Free with limits)**
1. Visit https://developers.facebook.com/
2. Create an app
3. Get Page Access Token
4. Add to `.env`

**LinkedIn API (Free with limits)**
1. Visit https://www.linkedin.com/developers/
2. Create an app
3. Get access token
4. Add to `.env`

### 3. Installation
```bash
npm install
```

### 4. Configuration
Edit `src/automation/config.js` to customize:
- News categories to monitor
- Posting frequency
- Content filtering rules
- Social media settings

### 5. Running the System

#### Manual Run
```bash
# Test news aggregation
npm run news-aggregator

# Test content processing
npm run content-processor

# Test social publishing
npm run social-publisher
```

#### Automated Scheduling
```bash
node src/automation/scheduler.js
```

## Content Processing Pipeline

### 1. News Aggregation
- Fetches from multiple sources every 30 minutes
- Supports NewsAPI, Google News RSS
- Filters by category, age, and quality

### 2. AI Processing
- **Summarization**: Creates 280-character summaries using BART model
- **Sentiment Analysis**: Analyzes article sentiment
- **Hashtag Generation**: Extracts relevant hashtags
- **Duplicate Detection**: Prevents posting similar content
- **Content Classification**: Identifies breaking news, trending topics

### 3. Content Filtering
- Removes inappropriate content
- Checks for duplicates
- Validates article quality
- Ensures compliance with platform guidelines

### 4. Social Publishing
- Formats content for each platform
- Respects rate limits
- Includes relevant hashtags
- Tracks publishing success

## Rate Limiting & Compliance

### API Limits (Free Tier)
- **NewsAPI**: 1,000 requests/day
- **Hugging Face**: 30,000 characters/month
- **Twitter**: 1,500 tweets/month
- **Facebook**: Platform-specific limits
- **LinkedIn**: 100 posts/day

### Posting Frequency
- Default: Every 30 minutes
- Maximum: 4 posts per hour
- Configurable in `.env`

### Content Guidelines
- No duplicate content within 24 hours
- Minimum sentiment threshold
- Source attribution required
- Appropriate hashtag usage

## Monitoring & Analytics

### Logging
- All activities logged with timestamps
- Error tracking and reporting
- Performance metrics

### Engagement Tracking
- Post performance metrics
- Platform-specific analytics
- Trend analysis

## Customization Options

### Content Categories
Edit `CONTENT_CATEGORIES` in `.env`:
```
CONTENT_CATEGORIES=politics,business,technology,sports,entertainment,health
```

### Posting Schedule
Modify `POSTING_INTERVAL_MINUTES` in `.env`:
```
POSTING_INTERVAL_MINUTES=30
MAX_POSTS_PER_HOUR=4
```

### Content Filtering
Adjust filtering rules in `.env`:
```
BLOCKED_KEYWORDS=violence,explicit,inappropriate
REQUIRED_KEYWORDS=breaking,news,update,report
SENTIMENT_THRESHOLD=0.1
DUPLICATE_THRESHOLD=0.8
```

## Troubleshooting

### Common Issues
1. **API Rate Limits**: Increase posting intervals
2. **Content Quality**: Adjust filtering thresholds
3. **Duplicate Content**: Lower duplicate threshold
4. **Social Media Errors**: Check API credentials

### Debug Mode
Set `NODE_ENV=development` for detailed logging.

## Legal Compliance
- Respects robots.txt and API terms of service
- Provides source attribution
- Implements content filtering
- Follows social media platform guidelines

## Scaling Options
- Add more news sources
- Implement database storage
- Add more AI processing features
- Expand to additional social platforms
- Implement advanced analytics

## Support
For issues and questions, check the logs in the console output and verify your API credentials are correctly configured.