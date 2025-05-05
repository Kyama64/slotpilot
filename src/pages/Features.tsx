
import React from "react";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 px-4 py-8">
        <div className="container mx-auto">
          {/* Hero section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Smart Features for Your Booking Needs
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              SnapSchedule is designed specifically for mobile-first scheduling and booking management
            </p>
            <div className="flex justify-center space-x-4 mb-8 flex-wrap gap-y-3">
              <Button asChild size="lg" className="gap-1">
                <Link to="/signup">
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>

          {/* Mobile app highlight */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">
                  Optimized for Mobile
                </h2>
                <p className="text-gray-600 mb-4">
                  SnapSchedule is built from the ground up with mobile in mind, ensuring 
                  you can manage bookings wherever you are.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Quick service management on the go</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Accept bookings from your phone</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Real-time booking notifications</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-60 h-96 bg-black rounded-3xl p-2 shadow-xl">
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gray-800 rounded-full"></div>
                  <div className="w-full h-full bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Smartphone className="w-20 h-20 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
                  <feature.icon className="h-10 w-10 text-blue-500 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Feature data
const features = [
  {
    title: "Easy Scheduling",
    description: "Create and manage your service schedule with our intuitive mobile interface.",
    icon: Calendar
  },
  {
    title: "Customer Management",
    description: "Keep track of all your customers and their booking history.",
    icon: Users
  },
  {
    title: "Real-time Analytics",
    description: "Get insights into your business performance with detailed analytics.",
    icon: BarChart3
  },
  {
    title: "Automated Reminders",
    description: "Reduce no-shows with automated SMS and email reminders.",
    icon: Bell
  },
  {
    title: "Online Payments",
    description: "Accept payments online for your services and bookings.",
    icon: DollarSign
  },
  {
    title: "Customizable Booking Page",
    description: "Create a branded booking page for your customers.",
    icon: PencilRuler
  }
];

// Import statements for icons used in the features array
import { 
  Calendar, 
  Users, 
  BarChart3, 
  Bell, 
  DollarSign, 
  PencilRuler 
} from "lucide-react";

export default Features;
