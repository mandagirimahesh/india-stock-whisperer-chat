import React from 'react';
import { FileText, AlertTriangle, Scale, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - NewsHubPro"
        description="Read NewsHubPro's terms of service covering website usage rules, user responsibilities, content ownership, and service policies."
        keywords="terms of service, terms of use, website rules, user agreement, legal terms"
        url="https://newshubpro.org/terms"
        canonicalUrl="https://newshubpro.org/terms"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-primary-600 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Last updated: January 20, 2024
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              These Terms of Service govern your use of the NewsHubPro website and services.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the NewsHubPro website (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 mb-6">
                These Terms of Service apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                NewsHubPro is a digital news platform that provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Breaking news and current events coverage</li>
                <li>In-depth analysis and commentary</li>
                <li>Articles across various categories including politics, business, entertainment, sports, technology, and health</li>
                <li>Newsletter subscriptions and notifications</li>
                <li>User interaction features such as comments and sharing</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities and Conduct</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use</h3>
              <p className="text-gray-700 mb-4">
                You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material, including "junk mail," "chain letters," "spam," or any other similar solicitation</li>
                <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Activities</h3>
              <p className="text-gray-700 mb-4">
                You may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Use the Service for any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>Harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>Submit false or misleading information</li>
                <li>Upload viruses or any other type of malicious code</li>
                <li>Spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>Use the Service for any obscene or immoral purpose</li>
              </ul>
            </section>

            {/* Content Ownership and Copyright */}
            <section>
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">4. Content Ownership and Intellectual Property</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Content</h3>
              <p className="text-gray-700 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of NewsHubPro and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Generated Content</h3>
              <p className="text-gray-700 mb-4">
                Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="text-gray-700 mb-4">
                By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Copyright Policy</h3>
              <p className="text-gray-700 mb-6">
                We respect the intellectual property rights of others. If you believe that any material available on or through the Service infringes upon any copyright you own or control, please immediately notify us using the contact information provided below.
              </p>
            </section>

            {/* Privacy and Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
              </p>
              <p className="text-gray-700 mb-6">
                By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            {/* Disclaimers and Limitations */}
            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">6. Disclaimers and Limitations of Liability</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Availability</h3>
              <p className="text-gray-700 mb-4">
                We strive to provide continuous access to our Service, but we do not guarantee that the Service will be available at all times. The Service may be temporarily unavailable due to maintenance, updates, or technical issues.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Content Accuracy</h3>
              <p className="text-gray-700 mb-4">
                While we strive for accuracy in our news reporting, we make no warranties or representations about the accuracy, reliability, completeness, or timeliness of any content on the Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 mb-6">
                In no event shall NewsHubPro, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services and Links</h2>
              <p className="text-gray-700 mb-4">
                Our Service may contain links to third-party websites or services that are not owned or controlled by NewsHubPro. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              <p className="text-gray-700 mb-6">
                We use Google AdSense to display advertisements. These ads are served by Google and may be based on your interests and browsing history. We are not responsible for the content of these advertisements.
              </p>
            </section>

            {/* Account Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Account Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
              </p>
              <p className="text-gray-700 mb-6">
                If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to defend, indemnify, and hold harmless NewsHubPro and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 mb-6">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> defa47373@gmail.com<br />
                  <strong>Website:</strong> https://newshubpro.org<br />
                  <strong>Response Time:</strong> We aim to respond within 48 hours
                </p>
              </div>
            </section>

            {/* Effective Date */}
            <section className="border-t pt-6">
              <p className="text-sm text-gray-500 text-center">
                These Terms of Service are effective as of January 20, 2024, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;