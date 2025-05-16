
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                Last updated: {currentDate}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose">
              <h2>Introduction</h2>
              <p>
                SnapSchedule ("we", "our", or "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <h3>Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, email address, telephone number, and business information that you voluntarily give to us when you register or when you choose to participate in various activities related to our service.
              </p>
              <h3>Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access our platform, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our site.
              </p>
              
              <h2>Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Process transactions and send you related information.</li>
                <li>Send you technical notices, updates, security alerts, and support messages.</li>
                <li>Respond to your comments or inquiries.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Request feedback and contact you about your use of our services.</li>
                <li>Improve our website and service offerings.</li>
              </ul>
              
              <h2>Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>
              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>
              
              <h2>Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at support@snapschedule.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
