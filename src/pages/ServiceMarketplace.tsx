
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Star, CalendarCheck, Clock, Check, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Enhanced mock businesses data
const mockBusinesses = [
  {
    id: "business1",
    name: "Alex's Hair Studio",
    description: "Professional hair styling and coloring services.",
    category: "Beauty",
    location: "New York, NY",
    rating: 4.8,
    planType: "professional",
    popularServices: ["Haircut", "Hair Color", "Styling"],
    image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "business2",
    name: "Wellness Massage Center",
    description: "Therapeutic massage and body treatments.",
    category: "Wellness",
    location: "Chicago, IL",
    rating: 4.9,
    planType: "business",
    popularServices: ["Deep Tissue Massage", "Hot Stone Massage", "Aromatherapy"],
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "business3",
    name: "QuickFix Plumbing",
    description: "Professional plumbing services for residential and commercial properties.",
    category: "Home Services",
    location: "Austin, TX",
    rating: 4.6,
    planType: "starter",
    popularServices: ["Pipe Repair", "Drain Cleaning", "Installation"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "business4",
    name: "Spotless Cleaning Co.",
    description: "Comprehensive cleaning services for homes and offices.",
    category: "Home Services",
    location: "Seattle, WA",
    rating: 4.7,
    planType: "professional",
    popularServices: ["Deep Cleaning", "Regular Maintenance", "Move-in/Move-out"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "business5",
    name: "Capture Photography",
    description: "Professional photography for weddings, events, and portraits.",
    category: "Photography",
    location: "Los Angeles, CA",
    rating: 4.9,
    planType: "business",
    popularServices: ["Wedding Photography", "Portrait Sessions", "Event Coverage"],
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=300&h=200"
  },
];

const ServiceMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const { toast } = useToast();
  const navigate = useNavigate();

  // Filter businesses based on search query, category, and location
  const filteredBusinesses = mockBusinesses.filter(
    (business) => {
      const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           business.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
      const matchesLocation = selectedLocation === "all" || business.location.includes(selectedLocation);
      return matchesSearch && matchesCategory && matchesLocation;
    }
  );

  // Get unique categories and locations for filters
  const categories = ["all", ...new Set(mockBusinesses.map(business => business.category))];
  const locations = ["all", ...new Set(mockBusinesses.map(business => business.location.split(", ")[0]))];

  const handleViewServices = (businessId: string) => {
    navigate(`/book/${businessId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Service Marketplace</h1>
            <p className="text-muted-foreground">
              Find and book services from top providers in your area
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search businesses or services..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location === "all" ? "All Locations" : location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.length === 0 ? (
              <div className="col-span-full p-8 text-center bg-white rounded-lg border">
                <p className="text-xl font-medium">No businesses found</p>
                <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredBusinesses.map((business) => (
                <Card key={business.id} className="overflow-hidden flex flex-col h-full">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={business.image} 
                      alt={business.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{business.name}</CardTitle>
                      <Badge variant="outline">{business.category}</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{business.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 flex-grow">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-muted-foreground">{business.location}</span>
                      <div className="ml-auto flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                        <span className="font-medium">{business.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-2">Popular Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {business.popularServices.map((service, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button 
                      className="w-full flex items-center" 
                      onClick={() => handleViewServices(business.id)}
                    >
                      <CalendarCheck className="h-4 w-4 mr-2" />
                      View Services
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceMarketplace;
