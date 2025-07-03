import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Users, Award, Clock, ArrowRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import SEOHead from '../components/SEOHead';
import AdBanner from '../components/AdBanner';
import { articles, categories } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredArticles = articles.filter(article => article.isFeatured);
  const breakingArticles = articles.filter(article => article.isBreaking);
  const trendingArticles = articles.filter(article => article.isTrending);
  const regularArticles = articles.filter(article => !article.isFeatured && !article.isBreaking);

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
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Enhanced Content */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Trusted Source for <span className="text-accent-400">Breaking News</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
                NewsHubPro delivers comprehensive coverage of global events with unbiased reporting, 
                in-depth analysis, and expert commentary across politics, business, entertainment, 
                sports, technology, and health.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                <p className="text-primary-200">
                  Get breaking news as it happens with our 24/7 monitoring and instant reporting system.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                <p className="text-primary-200">
                  Comprehensive international news coverage with local insights and expert analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Journalism</h3>
                <p className="text-primary-200">
                  Verified facts, multiple sources, and unbiased reporting you can trust for informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About NewsHubPro Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose NewsHubPro for Your Daily News?
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  In today's fast-paced world, staying informed is crucial. NewsHubPro stands out as your 
                  premier destination for reliable news coverage, offering comprehensive reporting across 
                  all major categories including politics, business, entertainment, sports, technology, 
                  and health news.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our experienced team of journalists and editors work around the clock to bring you 
                  accurate, timely, and unbiased news coverage. We verify every story through multiple 
                  sources and provide the context you need to understand complex global events.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Breaking News Alerts</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Expert Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Global Perspective</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">Verified Sources</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="NewsHubPro newsroom with journalists working on breaking news coverage"
                  className="rounded-xl shadow-lg w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Areas Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive News Coverage Across All Major Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                From breaking political developments to the latest in technology and entertainment, 
                NewsHubPro covers the stories that matter most to you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {categories.slice(0, 8).map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-lg">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Latest {category.name.toLowerCase()} news and updates
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Header Ad Banner */}
        <div className="bg-gray-100 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <AdBanner placement="header" />
          </div>
        </div>

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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Story</h2>
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
                  <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Editor's Picks</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {regularArticles.slice(8, 11).map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>

              {/* Load More Button */}
              <div className="text-center mt-8">
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;