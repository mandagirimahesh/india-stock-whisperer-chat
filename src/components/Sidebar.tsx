import React, { useState } from 'react';
import { TrendingUp, Clock, Tag } from 'lucide-react';
import { articles, trendingTopics } from '../data/mockData';
import ArticleCard from './ArticleCard';
import AdBanner from './AdBanner';
import { trackNewsletterSignup } from '../utils/analytics';

const Sidebar: React.FC = () => {
  const [email, setEmail] = useState('');
  const trendingArticles = articles.filter(article => article.isTrending).slice(0, 4);
  const recentArticles = articles.slice(0, 5);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      trackNewsletterSignup('sidebar');
      // Handle newsletter signup
      console.log('Newsletter signup:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-6 text-white">
        <h3 className="font-bold text-xl mb-3">Stay Informed</h3>
        <p className="text-primary-100 mb-4">
          Get the latest news delivered directly to your inbox every morning.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
          />
          <button 
            type="submit"
            className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Sidebar Ad */}
      <AdBanner placement="sidebar" />

      {/* Trending Topics */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center mb-4">
          <TrendingUp className="w-5 h-5 text-primary-600 mr-2" />
          <h3 className="font-bold text-lg text-gray-900">Trending Topics</h3>
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className="flex items-center w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <Tag className="w-4 h-4 text-gray-400 mr-3 group-hover:text-primary-600" />
              <span className="text-gray-700 group-hover:text-primary-600 font-medium">
                {topic}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Articles */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center mb-4">
          <Clock className="w-5 h-5 text-primary-600 mr-2" />
          <h3 className="font-bold text-lg text-gray-900">Trending Now</h3>
        </div>
        <div className="space-y-4">
          {trendingArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Recent Articles</h3>
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>

      {/* Second Sidebar Ad */}
      <AdBanner placement="sidebar" className="mt-6" />
    </div>
  );
};

export default Sidebar;