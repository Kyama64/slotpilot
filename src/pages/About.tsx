
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About SnapSchedule</h1>
              <p className="text-lg text-gray-600 mb-8">
                Empowering service providers with smart scheduling solutions since 2023
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                SnapSchedule was founded with a simple mission: to help small service businesses succeed by making appointment scheduling effortless for both businesses and their clients.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-8">
                After witnessing countless small business owners struggle with complicated scheduling systems and missed appointments, our founding team set out to create a solution that was both powerful and easy to use. Today, SnapSchedule serves over 10,000 businesses worldwide, helping them increase bookings and reduce no-shows.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplicity</h3>
                  <p className="text-gray-600">
                    We believe that powerful software doesn't need to be complicated. We strive to make every feature intuitive and accessible.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Success</h3>
                  <p className="text-gray-600">
                    Our customers' success is our success. We're committed to providing the tools and support businesses need to thrive.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    We're constantly improving our platform based on customer feedback and emerging technologies.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button asChild size="lg" className="px-8">
                  <Link to="/signup">Start Your Free Trial Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
