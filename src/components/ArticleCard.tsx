import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Article } from '../types';
import { trackArticleView, trackBreakingNewsClick, trackTrendingClick } from '../utils/analytics';

interface ArticleCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'standard' }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleArticleClick = () => {
    // Track article view
    trackArticleView(article.id, article.title, article.category.name);
    
    // Track special article types
    if (article.isBreaking) {
      trackBreakingNewsClick(article.title);
    }
    if (article.isTrending) {
      trackTrendingClick(article.title);
    }
  };

  // Generate SEO-friendly URL
  const articleSlug = article.slug || article.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  const articleUrl = `/category/${article.category.slug}/${articleSlug}`;

  if (variant === 'featured') {
    return (
      <Link to={articleUrl} className="group" onClick={handleArticleClick}>
        <article className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {article.isBreaking && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  BREAKING
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span className={`${article.category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {article.category.name}
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-3 leading-tight group-hover:text-accent-300 transition-colors">
              {article.title}
            </h2>
            <p className="text-gray-200 mb-4 line-clamp-2">{article.summary}</p>
            <div className="flex items-center text-sm text-gray-300">
              <User className="w-4 h-4 mr-2" />
              <span className="mr-4">{article.author}</span>
              <Clock className="w-4 h-4 mr-2" />
              <span className="mr-4">{formatDate(article.publishedAt)}</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={articleUrl} className="group" onClick={handleArticleClick}>
        <article className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
              {article.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-3">{formatDate(article.publishedAt)}</span>
              <span>{article.readTime} min</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={articleUrl} className="group" onClick={handleArticleClick}>
      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
        <div className="relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-3 right-3">
            <span className={`${article.category.color} text-white px-2 py-1 rounded-full text-xs font-medium`}>
              {article.category.name}
            </span>
          </div>
          {article.isTrending && (
            <div className="absolute top-3 left-3">
              <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                TRENDING
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{article.summary}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-500">
            {formatDate(article.publishedAt)}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;