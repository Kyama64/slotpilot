
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, CreditCard, Gift, BarChart3, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 space-y-6">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Effortless scheduling for small service businesses
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl">
                  SnapSchedule makes it easy for your clients to book appointments with you. No more phone tag, no more calendar confusion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="px-8">
                    <Link to="/signup">Get started for free</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/demo">View demo</Link>
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
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything you need to grow your business
              </h2>
              <p className="text-lg text-gray-600">
                SnapSchedule gives you all the tools to manage your appointments and focus on what matters most: your clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom booking page</h3>
                <p className="text-gray-600">
                  Share your personalized booking link with clients to let them schedule appointments on their own.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible availability</h3>
                <p className="text-gray-600">
                  Set your working hours and block off dates when you're unavailable to avoid double-bookings.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Online payments</h3>
                <p className="text-gray-600">
                  Collect payments at the time of booking to reduce no-shows and secure your revenue.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Automated reminders</h3>
                <p className="text-gray-600">
                  Reduce no-shows with automated email reminders sent to clients before appointments.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Simple analytics</h3>
                <p className="text-gray-600">
                  Track your bookings and get insights into your busiest times to optimize your schedule.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3 inline-block mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 availability</h3>
                <p className="text-gray-600">
                  Let clients book appointments anytime, even outside of your business hours.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-lg text-gray-600">
                Start for free, upgrade when you need more features. No hidden fees or long-term commitments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter plan */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-center pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Starter</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">$0</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">Perfect for individuals just getting started</p>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Up to 10 appointments per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Basic booking page</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Email notifications</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/signup">Get started</Link>
                  </Button>
                </div>
              </div>
              
              {/* Professional plan */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-primary relative transform md:scale-105">
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
                <div className="text-center pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Professional</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">$19</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">For growing small businesses</p>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Unlimited appointments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Custom booking page</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Email & SMS notifications</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Online payments</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild className="w-full">
                    <Link to="/signup">Start free trial</Link>
                  </Button>
                </div>
              </div>
              
              {/* Business plan */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-center pb-6 border-b border-gray-100">
                  <h3 className="text-lg font-medium text-gray-600 mb-2">Business</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">$49</span>
                    <span className="text-gray-500 ml-1">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">For teams and multiple staff members</p>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Multiple staff members</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-success flex-shrink-0 mr-2" />
                    <span className="text-gray-600 text-sm">Priority support</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/signup">Contact sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Loved by businesses like yours
              </h2>
              <p className="text-lg text-gray-600">
                Here's what our customers have to say about SnapSchedule
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center">
                    <span className="text-primary font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Jane Doe</h4>
                    <p className="text-sm text-gray-500">Hair Stylist</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "SnapSchedule has transformed my salon business. My clients love being able to book appointments online, and I've seen a 30% reduction in no-shows."
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center">
                    <span className="text-primary font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">John Smith</h4>
                    <p className="text-sm text-gray-500">Personal Trainer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a personal trainer, keeping track of client appointments was always a challenge. SnapSchedule has made it so easy that I can focus on training instead of admin work."
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center">
                    <span className="text-primary font-bold">AR</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Amy Rodriguez</h4>
                    <p className="text-sm text-gray-500">Massage Therapist</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The automated reminders have cut my no-show rate in half! The interface is so intuitive that even my less tech-savvy clients have no trouble booking."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to simplify your scheduling?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of service providers who've transformed their booking process with SnapSchedule.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link to="/signup">Get started for free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary px-8">
                <Link to="/demo">View demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
