import axios from 'axios';
import { CONFIG } from './config.js';
import { Logger } from './utils/logger.js';

export class SocialPublisher {
  constructor() {
    this.logger = new Logger('SocialPublisher');
    this.postingQueue = [];
    this.lastPostTimes = new Map();
  }

  async publishToAllPlatforms(article) {
    const results = [];

    try {
      // Prepare content for each platform
      const content = this.prepareContent(article);

      // Publish to Twitter
      if (CONFIG.social.twitter.apiKey) {
        const twitterResult = await this.publishToTwitter(content.twitter, article);
        results.push({ platform: 'twitter', success: twitterResult.success, data: twitterResult });
      }

      // Publish to Facebook
      if (CONFIG.social.facebook.pageAccessToken) {
        const facebookResult = await this.publishToFacebook(content.facebook, article);
        results.push({ platform: 'facebook', success: facebookResult.success, data: facebookResult });
      }

      // Publish to LinkedIn
      if (CONFIG.social.linkedin.accessToken) {
        const linkedinResult = await this.publishToLinkedIn(content.linkedin, article);
        results.push({ platform: 'linkedin', success: linkedinResult.success, data: linkedinResult });
      }

      return results;
    } catch (error) {
      this.logger.error(`Publishing failed: ${error.message}`);
      return [{ platform: 'all', success: false, error: error.message }];
    }
  }

  prepareContent(article) {
    const baseContent = {
      title: article.title,
      summary: article.summary,
      url: article.url,
      hashtags: article.hashtags || [],
      imageUrl: article.urlToImage
    };

    return {
      twitter: this.prepareTwitterContent(baseContent),
      facebook: this.prepareFacebookContent(baseContent),
      linkedin: this.prepareLinkedInContent(baseContent)
    };
  }

  prepareTwitterContent(content) {
    const maxLength = 280;
    const urlLength = 23; // Twitter's URL shortening length
    const hashtagsText = content.hashtags.slice(0, 3).join(' ');
    
    const availableLength = maxLength - urlLength - hashtagsText.length - 3; // 3 for spaces
    
    let text = content.summary;
    if (text.length > availableLength) {
      text = text.substring(0, availableLength - 3) + '...';
    }

    return {
      text: `${text} ${content.url} ${hashtagsText}`.trim(),
      media: content.imageUrl ? [content.imageUrl] : []
    };
  }

  prepareFacebookContent(content) {
    return {
      message: `${content.title}\n\n${content.summary}\n\nRead more: ${content.url}\n\n${content.hashtags.join(' ')}`,
      link: content.url,
      picture: content.imageUrl
    };
  }

  prepareLinkedInContent(content) {
    return {
      text: `${content.title}\n\n${content.summary}\n\nRead the full article: ${content.url}\n\n${content.hashtags.join(' ')}`,
      url: content.url,
      media: content.imageUrl
    };
  }

  async publishToTwitter(content, article) {
    try {
      // Check rate limiting
      if (!this.canPost('twitter')) {
        return { success: false, error: 'Rate limit exceeded' };
      }

      // Using Twitter API v2 (you'll need to implement OAuth 1.0a)
      const response = await axios.post(
        'https://api.twitter.com/2/tweets',
        {
          text: content.text
        },
        {
          headers: {
            'Authorization': `Bearer ${CONFIG.social.twitter.accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      this.updateLastPostTime('twitter');
      this.logger.info(`Published to Twitter: ${article.title}`);
      
      return { 
        success: true, 
        id: response.data.data.id,
        url: `https://twitter.com/user/status/${response.data.data.id}`
      };
    } catch (error) {
      this.logger.error(`Twitter publishing failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async publishToFacebook(content, article) {
    try {
      if (!this.canPost('facebook')) {
        return { success: false, error: 'Rate limit exceeded' };
      }

      const response = await axios.post(
        `https://graph.facebook.com/v18.0/${CONFIG.social.facebook.pageId}/feed`,
        {
          message: content.message,
          link: content.link,
          access_token: CONFIG.social.facebook.pageAccessToken
        }
      );

      this.updateLastPostTime('facebook');
      this.logger.info(`Published to Facebook: ${article.title}`);
      
      return { 
        success: true, 
        id: response.data.id,
        url: `https://facebook.com/${response.data.id}`
      };
    } catch (error) {
      this.logger.error(`Facebook publishing failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async publishToLinkedIn(content, article) {
    try {
      if (!this.canPost('linkedin')) {
        return { success: false, error: 'Rate limit exceeded' };
      }

      const response = await axios.post(
        'https://api.linkedin.com/v2/ugcPosts',
        {
          author: `urn:li:person:${CONFIG.social.linkedin.personId}`,
          lifecycleState: 'PUBLISHED',
          specificContent: {
            'com.linkedin.ugc.ShareContent': {
              shareCommentary: {
                text: content.text
              },
              shareMediaCategory: 'ARTICLE',
              media: content.url ? [{
                status: 'READY',
                originalUrl: content.url
              }] : []
            }
          },
          visibility: {
            'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${CONFIG.social.linkedin.accessToken}`,
            'Content-Type': 'application/json',
            'X-Restli-Protocol-Version': '2.0.0'
          }
        }
      );

      this.updateLastPostTime('linkedin');
      this.logger.info(`Published to LinkedIn: ${article.title}`);
      
      return { 
        success: true, 
        id: response.data.id
      };
    } catch (error) {
      this.logger.error(`LinkedIn publishing failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  canPost(platform) {
    const lastPostTime = this.lastPostTimes.get(platform) || 0;
    const minInterval = CONFIG.content.postingInterval * 60 * 1000; // Convert to milliseconds
    
    return Date.now() - lastPostTime >= minInterval;
  }

  updateLastPostTime(platform) {
    this.lastPostTimes.set(platform, Date.now());
  }

  async schedulePost(article, delay = 0) {
    setTimeout(async () => {
      await this.publishToAllPlatforms(article);
    }, delay);
  }

  getEngagementMetrics(platform, postId) {
    // Placeholder for engagement tracking
    // You would implement actual API calls to get metrics
    return {
      platform,
      postId,
      likes: 0,
      shares: 0,
      comments: 0,
      views: 0,
      timestamp: new Date().toISOString()
    };
  }
}