import cron from 'node-cron';
import { NewsAggregator } from './newsAggregator.js';
import { SocialPublisher } from './socialPublisher.js';
import { CONFIG } from './config.js';
import { Logger } from './utils/logger.js';

export class NewsScheduler {
  constructor() {
    this.aggregator = new NewsAggregator();
    this.publisher = new SocialPublisher();
    this.logger = new Logger('NewsScheduler');
    this.isRunning = false;
  }

  start() {
    this.logger.info('Starting news automation scheduler...');

    // Run every 30 minutes (configurable)
    const cronPattern = `*/${CONFIG.content.postingInterval} * * * *`;
    
    cron.schedule(cronPattern, async () => {
      if (this.isRunning) {
        this.logger.warn('Previous job still running, skipping...');
        return;
      }

      await this.runNewsAutomation();
    });

    // Run engagement metrics collection every hour
    cron.schedule('0 * * * *', async () => {
      await this.collectEngagementMetrics();
    });

    // Cleanup old data every day at midnight
    cron.schedule('0 0 * * *', async () => {
      await this.cleanupOldData();
    });

    this.logger.info(`Scheduler started with ${CONFIG.content.postingInterval} minute intervals`);
  }

  async runNewsAutomation() {
    this.isRunning = true;
    
    try {
      this.logger.info('Running news automation cycle...');

      // Step 1: Aggregate news
      const articles = await this.aggregator.run();
      
      if (articles.length === 0) {
        this.logger.warn('No articles to process');
        return;
      }

      // Step 2: Filter and prioritize articles
      const prioritizedArticles = this.prioritizeArticles(articles);
      
      // Step 3: Publish articles with rate limiting
      const maxPosts = Math.min(
        prioritizedArticles.length, 
        CONFIG.content.maxPostsPerHour
      );

      for (let i = 0; i < maxPosts; i++) {
        const article = prioritizedArticles[i];
        
        // Add delay between posts to avoid rate limiting
        if (i > 0) {
          await this.delay(60000); // 1 minute delay between posts
        }

        const results = await this.publisher.publishToAllPlatforms(article);
        this.logPublishingResults(article, results);
      }

      this.logger.info(`Automation cycle completed. Processed ${maxPosts} articles.`);
      
    } catch (error) {
      this.logger.error(`Automation cycle failed: ${error.message}`);
    } finally {
      this.isRunning = false;
    }
  }

  prioritizeArticles(articles) {
    return articles.sort((a, b) => {
      // Priority scoring
      let scoreA = 0;
      let scoreB = 0;

      // Breaking news gets highest priority
      if (a.classification?.tags?.includes('breaking')) scoreA += 100;
      if (b.classification?.tags?.includes('breaking')) scoreB += 100;

      // Trending content gets high priority
      if (a.classification?.tags?.includes('trending')) scoreA += 50;
      if (b.classification?.tags?.includes('trending')) scoreB += 50;

      // Positive sentiment gets bonus
      if (a.sentiment?.label === 'positive') scoreA += 20;
      if (b.sentiment?.label === 'positive') scoreB += 20;

      // Recent articles get priority
      const ageA = Date.now() - new Date(a.publishedAt).getTime();
      const ageB = Date.now() - new Date(b.publishedAt).getTime();
      scoreA += Math.max(0, 10 - (ageA / (60 * 60 * 1000))); // Bonus for articles less than 10 hours old
      scoreB += Math.max(0, 10 - (ageB / (60 * 60 * 1000)));

      return scoreB - scoreA;
    });
  }

  logPublishingResults(article, results) {
    const successCount = results.filter(r => r.success).length;
    const totalCount = results.length;
    
    this.logger.info(`Published "${article.title}" to ${successCount}/${totalCount} platforms`);
    
    results.forEach(result => {
      if (result.success) {
        this.logger.info(`✓ ${result.platform}: ${result.data.url || result.data.id}`);
      } else {
        this.logger.error(`✗ ${result.platform}: ${result.data.error}`);
      }
    });
  }

  async collectEngagementMetrics() {
    this.logger.info('Collecting engagement metrics...');
    // Implementation for collecting metrics from social platforms
    // This would involve calling APIs to get post performance data
  }

  async cleanupOldData() {
    this.logger.info('Cleaning up old data...');
    // Implementation for cleaning up old processed articles, logs, etc.
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    this.logger.info('Stopping news automation scheduler...');
    // Cleanup and stop all cron jobs
  }
}

// Start the scheduler if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const scheduler = new NewsScheduler();
  scheduler.start();
}