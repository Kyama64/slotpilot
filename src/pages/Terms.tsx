
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Last updated: {currentDate}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using SnapSchedule's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site and services.
              </p>
              
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on SnapSchedule's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose;</li>
                <li>Attempt to decompile or reverse engineer any software contained on SnapSchedule's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              
              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password.
              </p>
              
              <h2>4. Payment Terms</h2>
              <p>
                SnapSchedule offers subscription-based services. By subscribing to our services, you agree to pay the fees at the rates in effect when the charges are incurred. You must provide a valid payment method for paying these fees.
              </p>
              <p>
                If you dispute any charges you must notify SnapSchedule within 60 days of the date of the charge.
              </p>
              
              <h2>5. Free Trial</h2>
              <p>
                SnapSchedule may, at its sole discretion, offer a free trial period for new users. At the end of the free trial period, you will be automatically charged the applicable subscription fee unless you cancel your subscription prior to the end of the trial period.
              </p>
              
              <h2>6. Termination</h2>
              <p>
                SnapSchedule may terminate your access to all or any part of our services at any time, with or without cause, with or without notice, effective immediately.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              
              <h2>7. Disclaimer</h2>
              <p>
                The materials on SnapSchedule's website are provided on an 'as is' basis. SnapSchedule makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              
              <h2>8. Limitations</h2>
              <p>
                In no event shall SnapSchedule or its suppliers be liable for any damages arising out of the use or inability to use the materials on SnapSchedule's website, even if SnapSchedule or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              
              <h2>9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              
              <h2>10. Changes to Terms</h2>
              <p>
                SnapSchedule reserves the right to modify these Terms at any time. We will notify users of any changes by posting the updated Terms on this page and updating the "Last Updated" date at the top of these Terms.
              </p>
              
              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@snapschedule.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
