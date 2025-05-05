
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Package } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 px-4 py-8">
        <div className="container mx-auto">
          {/* Pricing header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that's right for your business. All plans include full mobile access.
            </p>
          </div>

          {/* Pricing tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Starter Plan */}
            <Card className="border-2 border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
                <CardDescription>For individuals just starting out</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$9</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Up to 30 bookings/month</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Basic analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>3 services</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Email reminders</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Mobile app access</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/signup?plan=starter">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Pro Plan - Highlighted */}
            <Card className="border-2 border-primary shadow-md relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Unlimited bookings</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Detailed analytics</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>10 services</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Email + SMS reminders</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Priority mobile support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Custom booking page</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to="/signup?plan=pro">Choose Pro</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Business Plan */}
            <Card className="border-2 border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Business</CardTitle>
                <CardDescription>For larger operations</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">$79</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Everything in Pro</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Unlimited services</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Advanced reporting</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Multiple staff accounts</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>API access</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span>Dedicated account manager</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/signup?plan=business">Contact Sales</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* FAQ section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <Package className="h-12 w-12 mx-auto text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ready to streamline your booking process?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that use SnapSchedule to manage their appointments and grow their customer base.
            </p>
            <Button asChild size="lg">
              <Link to="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

// FAQ data
const faqs = [
  {
    question: "Can I try SnapSchedule for free?",
    answer: "Yes! We offer a 14-day free trial on all plans with no credit card required."
  },
  {
    question: "How does mobile access work?",
    answer: "Our app is fully optimized for mobile browsers, so you can access all features from any device."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle."
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, you can save 20% by choosing annual billing on any plan."
  },
];

export default Pricing;
