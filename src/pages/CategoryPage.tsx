import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TrendingUp, Clock, Users, Globe, ArrowRight } from 'lucide-react';
import { categories, articles } from '../data/mockData';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import SEOHead from '../components/SEOHead';
import AdBanner from '../components/AdBanner';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(cat => cat.slug === slug);
  const categoryArticles = articles.filter(article => article.category.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const categoryUrl = `https://newshubpro.org/category/${category.slug}`;
  const categoryKeywords = `${category.name.toLowerCase()}, ${category.name.toLowerCase()} news, latest ${category.name.toLowerCase()}, breaking ${category.name.toLowerCase()}, ${category.name.toLowerCase()} updates, ${category.name.toLowerCase()} stories, ${category.name.toLowerCase()} analysis, ${category.name.toLowerCase()} coverage`;

  // Category-specific content
  const getCategoryDescription = (categoryName: string) => {
    const descriptions = {
      'politics': {
        overview: 'Stay informed with comprehensive political news coverage from NewsHubPro. Our politics section delivers breaking news, in-depth analysis, and expert commentary on government affairs, elections, policy developments, and political movements worldwide.',
        scope: 'Our political coverage spans federal, state, and local government news, including legislative updates, executive decisions, judicial rulings, and electoral processes. We provide balanced reporting on political parties, candidates, and policy debates that shape our democracy.',
        trends: 'Current political trends include ongoing debates over healthcare reform, climate change legislation, economic policy, and international relations. We track emerging political movements, voter sentiment, and the evolving landscape of modern governance.',
        value: 'NewsHubPro\'s political reporting helps citizens make informed decisions by providing context, fact-checking claims, and explaining complex policy issues in accessible language.'
      },
      'business': {
        overview: 'Navigate the complex world of business and finance with NewsHubPro\'s comprehensive business news coverage. From market analysis to corporate developments, we deliver the insights you need to stay ahead in today\'s dynamic economic landscape.',
        scope: 'Our business coverage includes stock market updates, corporate earnings, mergers and acquisitions, startup news, economic indicators, and industry trends across technology, healthcare, energy, and financial services sectors.',
        trends: 'Key business trends include digital transformation, sustainable investing, remote work evolution, supply chain innovations, and the impact of artificial intelligence on various industries. We track market volatility, inflation concerns, and global economic shifts.',
        value: 'Whether you\'re an investor, entrepreneur, or business professional, our expert analysis helps you understand market movements, identify opportunities, and make strategic decisions based on reliable financial reporting.'
      },
      'entertainment': {
        overview: 'Discover the latest in entertainment news with NewsHubPro\'s comprehensive coverage of movies, television, music, celebrity news, and pop culture. Stay updated on Hollywood developments, streaming trends, and entertainment industry insights.',
        scope: 'Our entertainment section covers film releases, TV show premieres, music industry news, celebrity interviews, award shows, and cultural phenomena. We report on both mainstream and independent entertainment across various platforms and genres.',
        trends: 'Current entertainment trends include the streaming wars, diversity in Hollywood, international content popularity, virtual events, and the impact of social media on celebrity culture. We track box office performance, streaming viewership, and cultural movements.',
        value: 'NewsHubPro provides entertainment enthusiasts with insider perspectives, exclusive interviews, and thoughtful analysis of how entertainment shapes and reflects our society and culture.'
      },
      'sports': {
        overview: 'Get comprehensive sports news coverage from NewsHubPro, featuring breaking news, game analysis, player updates, and in-depth reporting across professional and amateur sports leagues worldwide.',
        scope: 'Our sports coverage spans major leagues including NFL, NBA, MLB, NHL, soccer, tennis, golf, and Olympic sports. We provide game recaps, player statistics, trade news, injury reports, and championship coverage.',
        trends: 'Current sports trends include athlete activism, sports betting legalization, technology in athletics, player safety protocols, and the evolution of women\'s sports. We cover emerging sports, esports growth, and changing fan engagement patterns.',
        value: 'Sports fans rely on NewsHubPro for accurate scores, expert analysis, and behind-the-scenes stories that bring depth to their favorite teams and athletes.'
      },
      'technology': {
        overview: 'Stay at the forefront of technological innovation with NewsHubPro\'s technology news coverage. From artificial intelligence breakthroughs to cybersecurity developments, we decode complex tech trends for everyday understanding.',
        scope: 'Our technology section covers software developments, hardware innovations, startup funding, tech company news, cybersecurity threats, and emerging technologies like AI, blockchain, and quantum computing.',
        trends: 'Key technology trends include artificial intelligence integration, privacy regulations, remote work technologies, sustainable tech solutions, and the metaverse development. We track big tech company strategies and startup innovations.',
        value: 'NewsHubPro helps readers understand how technology impacts their daily lives, career prospects, and future opportunities through clear explanations and expert insights.'
      },
      'health': {
        overview: 'Access reliable health news and medical breakthroughs with NewsHubPro\'s comprehensive health coverage. We provide evidence-based reporting on medical research, public health policies, and wellness trends.',
        scope: 'Our health section includes medical research findings, pharmaceutical developments, public health initiatives, mental health awareness, fitness trends, and healthcare policy changes affecting patients and providers.',
        trends: 'Current health trends include telemedicine adoption, mental health awareness, personalized medicine, vaccine developments, and preventive care emphasis. We cover aging population challenges and healthcare accessibility issues.',
        value: 'NewsHubPro empowers readers to make informed health decisions by providing accurate medical information, expert opinions, and practical wellness advice from trusted healthcare professionals.'
      },
      'world-news': {
        overview: 'Stay connected to global events with NewsHubPro\'s world news coverage. We provide comprehensive international reporting on political developments, conflicts, economic changes, and cultural movements worldwide.',
        scope: 'Our world news section covers international politics, global conflicts, economic developments, climate change impacts, cultural exchanges, and diplomatic relations between nations across all continents.',
        trends: 'Major global trends include climate change responses, international trade relationships, migration patterns, technological cooperation, and evolving geopolitical alliances. We track humanitarian crises and peacekeeping efforts.',
        value: 'NewsHubPro helps readers understand how global events affect local communities and provides context for international developments that shape our interconnected world.'
      },
      'science': {
        overview: 'Explore the latest scientific discoveries and research breakthroughs with NewsHubPro\'s science news coverage. From space exploration to medical research, we make complex scientific concepts accessible to all readers.',
        scope: 'Our science section covers space exploration, environmental research, medical breakthroughs, physics discoveries, biology studies, chemistry innovations, and technological applications of scientific research.',
        trends: 'Current science trends include climate research, space commercialization, gene therapy advances, renewable energy innovations, and artificial intelligence applications in research. We cover both theoretical discoveries and practical applications.',
        value: 'NewsHubPro bridges the gap between scientific research and public understanding, helping readers appreciate how scientific advances impact technology, medicine, and daily life.'
      }
    };

    return descriptions[categoryName.toLowerCase()] || {
      overview: `Comprehensive ${categoryName.toLowerCase()} news coverage and analysis.`,
      scope: `Latest ${categoryName.toLowerCase()} developments and updates.`,
      trends: `Current trends and developments in ${categoryName.toLowerCase()}.`,
      value: `Expert insights and analysis in ${categoryName.toLowerCase()}.`
    };
  };

  const categoryContent = getCategoryDescription(category.name);

  return (
    <>
      <SEOHead
        title={`${category.name} News - Latest ${category.name} Updates & Breaking News`}
        description={`Stay informed with the latest ${category.name.toLowerCase()} news and updates. Comprehensive coverage of ${category.name.toLowerCase()} stories, breaking news, and in-depth analysis from around the world.`}
        keywords={categoryKeywords}
        url={categoryUrl}
        canonicalUrl={categoryUrl}
        type="website"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-primary-600">Home</Link>
              <span>/</span>
              <span className="text-gray-900">{category.name}</span>
            </div>
          </nav>

          {/* Category Header */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className={`w-4 h-12 ${category.color} rounded-full mr-4`}></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{category.name} News</h1>
            </div>
            
            {/* Enhanced Category Description */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.name} Coverage Overview
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {categoryContent.overview}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {categoryContent.scope}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Current Trends & Developments
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {categoryContent.trends}
                  </p>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-900 mb-2">Why Choose NewsHubPro?</h4>
                    <p className="text-sm text-primary-800">
                      {categoryContent.value}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Category Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-gray-900">Real-time</span>
                  </div>
                  <p className="text-sm text-gray-600">Breaking news updates</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-gray-900">Expert</span>
                  </div>
                  <p className="text-sm text-gray-600">Analysis & commentary</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Globe className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-gray-900">Global</span>
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive coverage</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-primary-600 mr-2" />
                    <span className="font-semibold text-gray-900">Trending</span>
                  </div>
                  <p className="text-sm text-gray-600">Latest developments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Header Ad */}
          <div className="mb-8">
            <AdBanner placement="header" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {categoryArticles.length > 0 ? (
                <>
                  {/* Featured Article for Category */}
                  {categoryArticles[0] && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured {category.name} Story</h2>
                      <ArticleCard article={categoryArticles[0]} variant="featured" />
                    </div>
                  )}

                  {/* In-Content Ad */}
                  <div className="my-8">
                    <AdBanner placement="in-content" />
                  </div>

                  {/* Other Articles */}
                  {categoryArticles.length > 1 && (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Latest {category.name} News</h2>
                        <span className="text-sm text-gray-500">
                          {categoryArticles.length - 1} more articles
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categoryArticles.slice(1).map((article) => (
                          <ArticleCard key={article.id} article={article} />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Load More Button */}
                  {categoryArticles.length > 6 && (
                    <div className="text-center mt-8">
                      <button className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center mx-auto">
                        Load More {category.name} Articles
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  )}

                  {/* Related Categories */}
                  <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Explore Related Categories</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {categories.filter(cat => cat.id !== category.id).slice(0, 4).map((relatedCategory) => (
                        <Link
                          key={relatedCategory.id}
                          to={`/category/${relatedCategory.slug}`}
                          className="text-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className={`w-8 h-8 ${relatedCategory.color} rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                            <span className="text-white font-bold text-sm flex items-center justify-center h-full">
                              {relatedCategory.name.charAt(0)}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">
                            {relatedCategory.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-2xl">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    More {category.name} News Coming Soon
                  </h2>
                  <p className="text-gray-500 text-lg mb-6">
                    We're working on bringing you the latest {category.name.toLowerCase()} coverage.
                  </p>
                  <Link 
                    to="/" 
                    className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    Browse All Articles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              )}
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

export default CategoryPage;