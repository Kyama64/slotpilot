
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, CreditCard, Gift, BarChart3, Check, UserCircle, Briefcase, Star, Award, ArrowDown } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section - Start strong with your heading */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 space-y-6">
                <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-1 rounded-full text-sm">
                  Voted #1 Service Scheduling App in 2025
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Book more clients, grow your business
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  SnapSchedule helps service businesses increase bookings by 35% and reduce no-shows by 80%. Simple online scheduling that your clients will love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="px-8">
                    <Link to="/signup">Start Free Trial</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/marketplace">See Demo</Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2 animate-fade-in">
                <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-1 max-w-md mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1588349482083-036b31c6eca3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                    alt="Calendar scheduling interface" 
                    className="w-full h-auto rounded-xl" 
                  />
                </div>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 border-t border-gray-200 pt-8">
              <p className="text-center text-sm font-medium text-gray-500 mb-6">TRUSTED BY 10,000+ BUSINESSES WORLDWIDE</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                <img src="https://via.placeholder.com/120x40?text=COMPANY" alt="Company logo" className="h-8" />
                <img src="https://via.placeholder.com/120x40?text=COMPANY" alt="Company logo" className="h-8" />
                <img src="https://via.placeholder.com/120x40?text=COMPANY" alt="Company logo" className="h-8" />
                <img src="https://via.placeholder.com/120x40?text=COMPANY" alt="Company logo" className="h-8" />
                <img src="https://via.placeholder.com/120x40?text=COMPANY" alt="Company logo" className="h-8" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Statistics/Social proof section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">10,000+</p>
                <p className="text-gray-600">Active Businesses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">4.9/5</p>
                <p className="text-gray-600">Customer Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">35%</p>
                <p className="text-gray-600">More Bookings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">80%</p>
                <p className="text-gray-600">Fewer No-shows</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* User path selection section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose your path
              </h2>
              <p className="text-lg text-gray-600">
                Whether you're looking to book a service or offer services to clients, SnapSchedule has you covered.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Customer path */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <UserCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">I'm a Customer</h3>
                <p className="text-gray-600 text-center mb-8">
                  Looking to book services? Browse our marketplace and find the perfect service provider for your needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-600">Browse services from various providers</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-600">Book appointments with real-time availability</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-600">Manage your bookings in one place</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col space-y-3">
                  <Button asChild size="lg">
                    <Link to="/marketplace">Browse Services</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/customer/login">Customer Login</Link>
                  </Button>
                </div>
              </div>
              
              {/* Provider path */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-primary border-opacity-50 hover:shadow-lg transition-shadow">
                <div className="bg-primary bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">I'm a Service Provider</h3>
                <p className="text-gray-600 text-center mb-8">
                  Ready to grow your business? Showcase your services and let clients book appointments online.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-600">Create a professional booking page</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-600">Manage your services and availability</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-600">Get insights into your booking performance</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col space-y-3">
                  <Button asChild size="lg">
                    <Link to="/signup">Start Free 14-Day Trial</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/provider/login">Provider Login</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section - Show your best features */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful features to grow your business
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to manage appointments, reduce no-shows, and focus on what you do best.
              </p>
            </div>
            
            <div className="space-y-24">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple online booking that clients love</h3>
                  <p className="text-gray-600 mb-6">
                    Your clients can book appointments 24/7 from any device. No more phone tag or email back-and-forth.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Custom booking page with your branding</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Seamless calendar integration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Multi-language support</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Online booking interface" 
                    className="rounded-xl shadow-lg w-full" 
                  />
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1578091879915-33e5e0c55c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Automated reminders interface" 
                    className="rounded-xl shadow-lg w-full" 
                  />
                </div>
                <div className="md:w-1/2">
                  <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                    <Gift className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated reminders that reduce no-shows</h3>
                  <p className="text-gray-600 mb-6">
                    Send automatic email and SMS reminders to clients before appointments. Our customers see 80% fewer no-shows.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Customizable reminder templates</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Email and SMS notifications</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Two-way chat with clients</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Insights to optimize your business</h3>
                  <p className="text-gray-600 mb-6">
                    Track performance, identify trends, and make data-driven decisions to grow your business.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Real-time booking analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Revenue tracking and reporting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>Client retention insights</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Analytics dashboard" 
                    className="rounded-xl shadow-lg w-full" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why choose us section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why service providers choose SnapSchedule
              </h2>
              <p className="text-lg text-gray-600">
                Designed specifically for service-based businesses with features that make a real difference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Save 10+ hours weekly</h3>
                <p className="text-gray-600">
                  Automate your scheduling and spend more time providing excellent service to your clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Secure payments</h3>
                <p className="text-gray-600">
                  Accept deposits, full payments, or packages when clients book to improve cash flow and reduce no-shows.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Top-rated support</h3>
                <p className="text-gray-600">
                  Our friendly customer support team is ready to help you get the most out of SnapSchedule.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials - Add real reviews */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Loved by 10,000+ businesses
              </h2>
              <p className="text-lg text-gray-600">
                Here's what our customers have to say about SnapSchedule
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  "SnapSchedule has transformed my salon business. My clients love being able to book appointments online, and I've seen a 30% reduction in no-shows."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center">
                    <span className="text-primary font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jane Doe</h4>
                    <p className="text-sm text-gray-500">Hair Stylist</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  "As a personal trainer, keeping track of client appointments was always a challenge. SnapSchedule has made it so easy that I can focus on training instead of admin work."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center">
                    <span className="text-primary font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">John Smith</h4>
                    <p className="text-sm text-gray-500">Personal Trainer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  "The automated reminders have cut my no-show rate in half! The interface is so intuitive that even my less tech-savvy clients have no trouble booking."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center">
                    <span className="text-primary font-bold">AR</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Amy Rodriguez</h4>
                    <p className="text-sm text-gray-500">Massage Therapist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently asked questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about SnapSchedule
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How much does SnapSchedule cost?</h3>
                <p className="mt-2 text-gray-600">
                  SnapSchedule offers a free plan for individuals just getting started. Our Professional plan is $19/month and our Business plan is $49/month. All plans come with a 14-day free trial.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How long does it take to set up?</h3>
                <p className="mt-2 text-gray-600">
                  Most users are up and running in less than 10 minutes. Our intuitive interface makes it easy to set up your services, availability, and start accepting bookings right away.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Can I customize my booking page?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, you can customize your booking page with your logo, colors, and brand elements. You can also add custom fields to gather information from clients during booking.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">How do I receive payments?</h3>
                <p className="mt-2 text-gray-600">
                  SnapSchedule integrates with popular payment processors like Stripe and PayPal, allowing you to collect deposits or full payments at the time of booking. Funds are deposited directly to your account.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-lg font-medium text-gray-900">Can I sync with my existing calendar?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, SnapSchedule integrates with Google Calendar, Outlook, iCal, and other popular calendar apps, ensuring you never double-book yourself.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Referral program banner */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-primary/20 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                <Gift className="h-10 w-10 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Refer friends, earn rewards!</h3>
                <p className="text-gray-600">
                  Know other service providers who could benefit from SnapSchedule? Earn $25 for each referral who subscribes to a paid plan. It's our way of saying thanks for spreading the word.
                </p>
              </div>
              <Button asChild>
                <Link to="/referrals">Join Referral Program</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA section - End with strong CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of service providers who've transformed their booking process with SnapSchedule.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link to="/signup">Start Free 14-Day Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-8">
                <Link to="/marketplace">Browse Services</Link>
              </Button>
            </div>
            <p className="text-blue-200 mt-4">No credit card required. Cancel anytime.</p>
            
            <div className="mt-12">
              <ArrowDown className="h-6 w-6 text-blue-200 mx-auto animate-bounce" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
