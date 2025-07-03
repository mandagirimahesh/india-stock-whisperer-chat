import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, Share2, Facebook, Twitter, Bookmark, Home, ChevronRight } from 'lucide-react';
import { articles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import SEOHead from '../components/SEOHead';
import AdBanner from '../components/AdBanner';
import { useAnalytics } from '../hooks/useAnalytics';
import { trackSocialShare, trackExternalLink } from '../utils/analytics';

const ArticlePage: React.FC = () => {
  const { id, categorySlug, articleSlug } = useParams<{ 
    id?: string; 
    categorySlug?: string; 
    articleSlug?: string; 
  }>();
  const navigate = useNavigate();
  
  // Find article by new URL structure first, then fall back to legacy ID
  let article = null;
  
  if (categorySlug && articleSlug) {
    // New SEO-friendly URL structure
    article = articles.find(a => 
      a.category.slug === categorySlug && 
      (a.slug === articleSlug || a.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === articleSlug)
    );
  } else if (id) {
    // Legacy URL structure - find by ID and redirect to new URL
    article = articles.find(a => a.id === id);
    if (article) {
      const newSlug = article.slug || article.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      navigate(`/category/${article.category.slug}/${newSlug}`, { replace: true });
      return null;
    }
  }

  const relatedArticles = articles
    .filter(a => a.id !== article?.id && a.category.id === article?.category.id)
    .slice(0, 3);

  // Track analytics for this page
  useAnalytics(article?.title || 'Article Not Found');

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const articleSlugGenerated = article.slug || article.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  const articleUrl = article.canonicalUrl || `https://newshubpro.org/category/${article.category.slug}/${articleSlugGenerated}`;

  const handleSocialShare = (platform: string, url: string) => {
    trackSocialShare(platform, url, article.title);
    window.open(url, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          url: articleUrl
        });
        trackSocialShare('native_share', articleUrl, article.title);
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(articleUrl);
        trackSocialShare('clipboard', articleUrl, article.title);
      }
    } else {
      navigator.clipboard.writeText(articleUrl);
      trackSocialShare('clipboard', articleUrl, article.title);
    }
  };

  // Enhanced breadcrumb data for schema
  const breadcrumbItems = [
    { name: 'Home', url: 'https://newshubpro.org/' },
    { name: article.category.name, url: `https://newshubpro.org/category/${article.category.slug}` },
    { name: article.title, url: articleUrl }
  ];

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.metaDescription || article.summary}
        keywords={article.keywords || article.tags.join(', ')}
        image={article.imageUrl}
        url={articleUrl}
        canonicalUrl={articleUrl}
        type="article"
        publishedTime={article.publishedAt}
        modifiedTime={article.publishedAt}
        author={article.author}
        section={article.category.name}
        tags={article.tags}
      />
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        })}
      </script>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Enhanced Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link to="/" className="hover:text-primary-600 flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li>
                <Link 
                  to={`/category/${article.category.slug}`} 
                  className="hover:text-primary-600"
                >
                  {article.category.name}
                </Link>
              </li>
              <ChevronRight className="w-4 h-4" />
              <li className="text-gray-900 truncate max-w-xs" title={article.title}>
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className={`${article.category.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {article.category.name}
              </span>
              {article.isBreaking && (
                <span className="ml-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  BREAKING NEWS
                </span>
              )}
              {article.isTrending && (
                <span className="ml-2 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  TRENDING
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {article.summary}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.readTime} min read</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-gray-600 font-medium">Share:</span>
              <button 
                onClick={() => handleSocialShare('facebook', `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialShare('twitter', `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}`)}
                className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Share article"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-yellow-600 transition-colors" aria-label="Bookmark article">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
              loading="eager"
            />
          </div>

          {/* Header Ad */}
          <div className="mb-8">
            <AdBanner placement="header" />
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              {article.content.split('\n\n').map((paragraph, index) => {
                // Add in-content ad after 3rd paragraph
                if (index === 2) {
                  return (
                    <React.Fragment key={index}>
                      <p className="text-lg leading-relaxed">{paragraph}</p>
                      <div className="my-8">
                        <AdBanner placement="in-content" />
                      </div>
                    </React.Fragment>
                  );
                }
                return (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Article Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 font-medium">Tags:</span>
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                More {article.category.name} News
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  to={`/category/${article.category.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  View All {article.category.name} Articles
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </section>
          )}

          {/* Newsletter CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with NewsHubPro</h3>
            <p className="text-primary-100 mb-6">
              Get the latest news and insights delivered to your inbox daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
                aria-label="Email address for newsletter"
              />
              <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;