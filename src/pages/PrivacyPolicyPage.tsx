import React from 'react';
import { Shield, Eye, Cookie, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy - NewsHubPro"
        description="Read NewsHubPro's comprehensive privacy policy covering data collection, usage practices, cookies, third-party advertising, and user rights."
        keywords="privacy policy, data protection, cookies, GDPR, CCPA, user privacy, data collection"
        url="https://newshubpro.org/privacy"
        canonicalUrl="https://newshubpro.org/privacy"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-primary-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Last updated: January 20, 2024
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              This Privacy Policy describes how NewsHubPro collects, uses, and protects your personal information when you visit our website.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Name and email address when you subscribe to our newsletter</li>
                <li>Contact information when you reach out to us through our contact form</li>
                <li>Comments and feedback you provide on our articles</li>
                <li>Account information if you create a user account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website and search terms used</li>
                <li>Geographic location (general area, not precise location)</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>To provide and improve our news services</li>
                <li>To send newsletters and updates (with your consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
                <li>To display relevant advertisements through Google AdSense</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <div className="flex items-center mb-4">
                <Cookie className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What Are Cookies</h3>
              <p className="text-gray-700 mb-4">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and analyze website performance.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                  <p className="text-gray-700">Required for basic website functionality and cannot be disabled.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                  <p className="text-gray-700">Help us understand how visitors interact with our website through Google Analytics.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Advertising Cookies</h4>
                  <p className="text-gray-700">Used by Google AdSense to display relevant advertisements based on your interests.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Preference Cookies</h4>
                  <p className="text-gray-700">Remember your settings and preferences for a personalized experience.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Managing Cookies</h3>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>View and delete cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block third-party cookies</li>
                <li>Clear all cookies when you close your browser</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Third-Party Services and Advertising</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Google AdSense</h3>
              <p className="text-gray-700 mb-4">
                We use Google AdSense to display advertisements on our website. Google may use cookies and other tracking technologies to serve ads based on your interests and previous visits to our site and other websites.
              </p>
              <p className="text-gray-700 mb-6">
                You can opt out of personalized advertising by visiting Google's Ads Settings or by visiting the Network Advertising Initiative opt-out page.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Analytics</h3>
              <p className="text-gray-700 mb-4">
                We use Google Analytics to analyze website traffic and user behavior. This service may collect information such as your IP address, browser type, and pages visited.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media Integration</h3>
              <p className="text-gray-700 mb-6">
                Our website may include social media sharing buttons. These services may collect information about your visit to our site when you use these features.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>With service providers who help us operate our website (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Access: Request a copy of the personal information we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Portability: Request transfer of your data to another service</li>
                <li>Objection: Object to processing of your personal information</li>
                <li>Restriction: Request restriction of processing</li>
              </ul>
              <p className="text-gray-700 mb-6">
                To exercise these rights, please contact us at defa47373@gmail.com. We will respond to your request within 30 days.
              </p>
            </section>

            {/* GDPR and CCPA Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">GDPR and CCPA Compliance</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR (General Data Protection Regulation)</h3>
              <p className="text-gray-700 mb-4">
                If you are located in the European Union, you have additional rights under GDPR, including the right to lodge a complaint with a supervisory authority.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">CCPA (California Consumer Privacy Act)</h3>
              <p className="text-gray-700 mb-6">
                If you are a California resident, you have the right to know what personal information we collect, use, and share, and the right to delete your personal information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> defa47373@gmail.com<br />
                  <strong>Website:</strong> https://newshubpro.org<br />
                  <strong>Response Time:</strong> We aim to respond within 48 hours
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;