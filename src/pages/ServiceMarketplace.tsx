
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Filter, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Sample service categories
const categories = [
  "Haircut & Styling",
  "Personal Training",
  "Tutoring",
  "Massage Therapy",
  "Home Cleaning",
  "Pet Grooming",
  "Photography",
  "Consulting"
];

// Sample service data
const services = [
  {
    id: "1",
    name: "Elite Hair Studio",
    category: "Haircut & Styling",
    description: "Upscale hair salon offering precision cuts and premium styling",
    price: 65,
    rating: 4.8,
    location: "New York",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "2",
    name: "FitLife Personal Training",
    category: "Personal Training",
    description: "Custom fitness programs tailored to your goals with certified trainers",
    price: 80,
    rating: 4.9,
    location: "Los Angeles",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "3",
    name: "MindMaster Tutoring",
    category: "Tutoring",
    description: "Expert academic tutoring in math, science, and test preparation",
    price: 45,
    rating: 4.7,
    location: "Chicago",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "4",
    name: "Serene Massage Therapy",
    category: "Massage Therapy",
    description: "Therapeutic massage services focusing on relaxation and wellness",
    price: 90,
    rating: 4.9,
    location: "Miami",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "5",
    name: "SparkleClean Home Services",
    category: "Home Cleaning",
    description: "Comprehensive home cleaning with eco-friendly products",
    price: 120,
    rating: 4.6,
    location: "Seattle",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "6",
    name: "PawPerfect Grooming",
    category: "Pet Grooming",
    description: "Full-service pet grooming for dogs and cats of all breeds",
    price: 55,
    rating: 4.8,
    location: "Boston",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: "7",
    name: "FrameWorks Photography",
    category: "Photography",
    description: "Professional photography for portraits, events, and commercial use",
    price: 200,
    rating: 4.9,
    location: "San Francisco",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "8",
    name: "StrategyPlus Consulting",
    category: "Consulting",
    description: "Business strategy consulting for startups and small businesses",
    price: 150,
    rating: 4.7,
    location: "Austin",
    image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

// Sample locations
const locations = [
  "All Locations",
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "Seattle",
  "Boston",
  "San Francisco",
  "Austin"
];

const ServiceMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [topRatedOnly, setTopRatedOnly] = useState(false);

  // Filter services based on search, category, location, price, and rating
  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || service.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || service.location === selectedLocation;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    const matchesRating = !topRatedOnly || service.rating >= 4.8;
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Service Marketplace</h1>
        <p className="text-center text-gray-600 mb-8">Find and book the best local services</p>

        {/* Search and Main Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search services..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-full md:w-[200px]">
              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Advanced Filters */}
        <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen} className="mb-8">
          <CollapsibleContent>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Category</h3>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Categories">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider 
                      value={priceRange}
                      min={0}
                      max={200}
                      step={5}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Other Options</h3>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="top-rated" 
                      checked={topRatedOnly}
                      onCheckedChange={setTopRatedOnly}
                    />
                    <Label htmlFor="top-rated">Top-rated only (4.8+)</Label>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Results Count */}
        <p className="text-gray-500 mb-4">{filteredServices.length} services found</p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-1">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.category}</p>
                  </div>
                  <div className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm">
                    ${service.price}
                  </div>
                </div>
                <p className="text-gray-600 mt-2 text-sm line-clamp-2">{service.description}</p>
                <div className="flex items-center mt-3 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-gray-400 mr-1" />
                  <span className="text-gray-500">{service.location}</span>
                  <div className="ml-auto flex items-center">
                    <span className="text-amber-500 font-medium">★ {service.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild className="w-full">
                  <Link to={`/book/${service.id}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-4 inline-flex mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold">No services found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your filters or search term</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All Categories");
                setSelectedLocation("All Locations");
                setPriceRange([0, 200]);
                setTopRatedOnly(false);
              }}
              className="mt-4"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceMarketplace;
