import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us - NewsHubPro"
        description="Learn about NewsHubPro's mission to deliver accurate, timely, and comprehensive news coverage. Discover our values, team, and commitment to quality journalism."
        keywords="about newshubpro, news organization, journalism, mission, values, team"
        url="https://newshubpro.org/about"
        canonicalUrl="https://newshubpro.org/about"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About NewsHubPro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of global events.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At NewsHubPro, we are committed to delivering accurate, timely, and unbiased news coverage that empowers our readers to make informed decisions. We believe that access to reliable information is fundamental to a healthy democracy and an informed society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to bridge the gap between complex global events and everyday understanding, providing context and analysis that helps our audience navigate an increasingly complex world.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Accuracy</h3>
                  <p className="text-gray-700">
                    We verify facts through multiple sources and maintain the highest standards of journalistic integrity.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                  <p className="text-gray-700">
                    We clearly identify our sources and maintain transparency in our reporting process and editorial decisions.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Impartiality</h3>
                  <p className="text-gray-700">
                    We present multiple perspectives and avoid bias, allowing readers to form their own informed opinions.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We embrace new technologies and storytelling methods to enhance the news experience for our readers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* History Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded in 2024, NewsHubPro emerged from a vision to create a digital news platform that combines traditional journalistic excellence with modern technology. Our founders recognized the need for a news source that could deliver comprehensive coverage while maintaining the speed and accessibility that today's readers demand.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Since our launch, we have grown to become a trusted source for millions of readers worldwide, covering everything from breaking news and politics to business, entertainment, sports, technology, and health. Our commitment to quality journalism has earned us recognition from industry peers and, more importantly, the trust of our readers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, NewsHubPro continues to evolve, incorporating reader feedback and technological advances to provide the most comprehensive and accessible news experience possible.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                NewsHubPro is powered by a diverse team of experienced journalists, editors, and technology professionals who share a passion for quality news coverage. Our editorial team brings decades of combined experience from leading news organizations around the world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Editorial Team</h3>
                  <p className="text-gray-600">
                    Experienced journalists and editors ensuring accuracy and quality in every story.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Correspondents</h3>
                  <p className="text-gray-600">
                    International reporters providing on-the-ground coverage from around the world.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Team</h3>
                  <p className="text-gray-600">
                    Innovative developers creating the best possible user experience for our readers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What Makes Us Unique */}
          <section>
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">What Makes Us Unique</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Real-Time Coverage</h3>
                  <p className="text-primary-100">
                    Our advanced technology platform enables us to deliver breaking news as it happens, with real-time updates and comprehensive analysis.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                  <p className="text-primary-100">
                    We provide international coverage with local insight, helping readers understand how global events impact their daily lives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Multi-Platform Experience</h3>
                  <p className="text-primary-100">
                    Our content is optimized for all devices and platforms, ensuring you can stay informed wherever you are.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                  <p className="text-primary-100">
                    We believe in fostering informed discussions and building a community of engaged, well-informed readers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutPage;