import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import SEOHead from '../components/SEOHead';
import AdBanner from '../components/AdBanner';
import { articles } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredArticles = articles.filter((article) => 'isFeatured' in article && article.isFeatured);
  const breakingArticles = articles.filter((article) => 'isBreaking' in article && article.isBreaking);
  const trendingArticles = articles.filter((article) => 'isTrending' in article && article.isTrending);
  const regularArticles = articles.filter(
    (article) => !('isFeatured' in article && article.isFeatured) && !('isBreaking' in article && article.isBreaking)
  );

  return (
    <>
      <SEOHead
        title="NewsHubPro - Breaking News, Politics, Business, Entertainment & Sports Coverage"
        description="Stay informed with NewsHubPro's comprehensive coverage of breaking news, politics, business, entertainment, sports, technology, and health. Get the latest updates from trusted sources worldwide with in-depth analysis and expert commentary."
        keywords="breaking news, politics news, business news, entertainment news, sports news, technology news, health news, world news, latest news, current events, news updates, global news, local news, news analysis, expert commentary"
        url="https://newshubpro.org/"
        canonicalUrl="https://newshubpro.org/"
        type="website"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Breaking News Section */}
            {breakingArticles.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3 animate-pulse">
                    BREAKING
                  </span>
                  Breaking News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {breakingArticles.slice(0, 4).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            )}

            {/* Featured Article */}
            {featuredArticles.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Featured Story
                </h2>
                <ArticleCard article={featuredArticles[0]} variant="featured" />
              </section>
            )}

            {/* In-Content Ad */}
            <div className="my-8">
              <AdBanner placement="in-content" />
            </div>

            {/* Trending News Section */}
            {trendingArticles.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                    TRENDING
                  </span>
                  Trending Now
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trendingArticles.slice(0, 4).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            )}

            {/* Latest News Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Latest News
                </h2>
                <Link
                  to="/category/politics"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors flex items-center"
                >
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularArticles.slice(0, 8).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* Category Highlights */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Editor's Picks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {regularArticles.slice(8, 11).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* Load More Button */}
            {/* <div className="text-center mt-8">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                Load More Articles
              </button>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>

    </>
  );
};

export default HomePage;
