
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Filter, Star, CalendarCheck } from "lucide-react";
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

// Mock services data
const mockServices = [
  {
    id: "s1",
    name: "Professional Haircut",
    description: "Professional haircut service including wash and style.",
    category: "Beauty",
    price: 45,
    duration: "45 min",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "s2",
    name: "Deep Tissue Massage",
    description: "Therapeutic massage focusing on deeper layers of muscle tissue.",
    category: "Wellness",
    price: 85,
    duration: "60 min",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "s3",
    name: "Home Plumbing Repair",
    description: "Professional plumbing service for home repairs and installations.",
    category: "Home Services",
    price: 120,
    duration: "90 min",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "s4",
    name: "House Cleaning",
    description: "Comprehensive cleaning service for homes and apartments.",
    category: "Home Services",
    price: 90,
    duration: "120 min",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "s5",
    name: "Wedding Photography",
    description: "Professional wedding photography service capturing your special day.",
    category: "Photography",
    price: 1200,
    duration: "8 hours",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1529635141176-14b0fd281d43?auto=format&fit=crop&q=80&w=300&h=200"
  },
];

const Services = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  // Filter services based on search query and category
  const filteredServices = mockServices.filter(
    (service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }
  );

  const handleAddService = () => {
    toast({
      title: "Feature coming soon",
      description: "Adding new services will be available in the next update.",
    });
  };

  const handleBookService = (serviceId: string) => {
    toast({
      title: "Booking initiated",
      description: "Redirecting to booking page...",
    });
  };

  // Get unique categories for filter
  const categories = ["all", ...new Set(mockServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Services</h1>
            <p className="text-muted-foreground">
              Manage and view all services offered
            </p>
          </div>
          
          <Button onClick={handleAddService} className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length === 0 ? (
            <div className="col-span-full p-8 text-center bg-white rounded-lg border">
              <p className="text-xl font-medium">No services found</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{service.name}</CardTitle>
                    <Badge variant="outline">{service.category}</Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span className="font-medium">{service.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {service.duration}
                      </span>
                      <span className="font-medium">${service.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleBookService(service.id)}
                  >
                    <CalendarCheck className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
