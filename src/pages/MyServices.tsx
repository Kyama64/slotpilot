
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, Clock, Edit, Trash2 } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Mock services data for the provider
const mockProviderServices = [
  {
    id: "s1",
    name: "Professional Haircut",
    description: "Professional haircut service including wash and style.",
    price: 45,
    duration: 45,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "s2",
    name: "Hair Coloring",
    description: "Professional hair coloring service with premium products.",
    price: 85,
    duration: 90,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    id: "s3",
    name: "Hair Styling",
    description: "Professional styling for any occasion.",
    price: 60,
    duration: 60,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=300&h=200"
  }
];

const MyServices = () => {
  const [services, setServices] = useState(mockProviderServices);
  const [searchQuery, setSearchQuery] = useState("");
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: 0,
    duration: 30
  });
  const [editingService, setEditingService] = useState<null | {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
  }>(null);
  
  // Filter services based on search query
  const filteredServices = services.filter(
    (service) => service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                 service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddService = () => {
    // Validate form
    if (!newService.name) {
      toast.error("Service name is required");
      return;
    }
    
    if (newService.price <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }
    
    if (newService.duration <= 0) {
      toast.error("Duration must be greater than 0");
      return;
    }
    
    // Add new service with a generated ID
    const newServiceWithId = {
      ...newService,
      id: `s${services.length + 1}`,
      image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&q=80&w=300&h=200"
    };
    
    setServices([...services, newServiceWithId]);
    setNewService({ name: "", description: "", price: 0, duration: 30 });
    toast.success("Service added successfully");
  };
  
  const handleUpdateService = () => {
    if (!editingService) return;
    
    // Validate form
    if (!editingService.name) {
      toast.error("Service name is required");
      return;
    }
    
    if (editingService.price <= 0) {
      toast.error("Price must be greater than 0");
      return;
    }
    
    if (editingService.duration <= 0) {
      toast.error("Duration must be greater than 0");
      return;
    }
    
    // Update the service
    setServices(services.map(service => 
      service.id === editingService.id ? editingService : service
    ));
    
    setEditingService(null);
    toast.success("Service updated successfully");
  };
  
  const handleDeleteService = (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter(service => service.id !== id));
      toast.success("Service deleted successfully");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Services</h1>
            <p className="text-muted-foreground">
              Manage your service offerings
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
                <DialogDescription>
                  Create a new service to offer to your customers
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newService.name}
                    onChange={(e) => setNewService({...newService, name: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    value={newService.description}
                    onChange={(e) => setNewService({...newService, description: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="price" className="text-right">
                    Price ($)
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={newService.price}
                    onChange={(e) => setNewService({...newService, price: parseFloat(e.target.value)})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="duration" className="text-right">
                    Duration (min)
                  </Label>
                  <Input
                    id="duration"
                    type="number"
                    value={newService.duration}
                    onChange={(e) => setNewService({...newService, duration: parseInt(e.target.value)})}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleAddService}>Add Service</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.length === 0 ? (
            <div className="col-span-full p-8 text-center bg-white rounded-lg border">
              <p className="text-xl font-medium">No services found</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search or add a new service</p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" variant="outline" className="h-8 w-8 bg-white" onClick={() => setEditingService(service)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Service</DialogTitle>
                          <DialogDescription>
                            Update your service details
                          </DialogDescription>
                        </DialogHeader>
                        {editingService && (
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="edit-name"
                                value={editingService.name}
                                onChange={(e) => setEditingService({...editingService, name: e.target.value})}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-description" className="text-right">
                                Description
                              </Label>
                              <Input
                                id="edit-description"
                                value={editingService.description}
                                onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-price" className="text-right">
                                Price ($)
                              </Label>
                              <Input
                                id="edit-price"
                                type="number"
                                value={editingService.price}
                                onChange={(e) => setEditingService({...editingService, price: parseFloat(e.target.value)})}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-duration" className="text-right">
                                Duration (min)
                              </Label>
                              <Input
                                id="edit-duration"
                                type="number"
                                value={editingService.duration}
                                onChange={(e) => setEditingService({...editingService, duration: parseInt(e.target.value)})}
                                className="col-span-3"
                              />
                            </div>
                          </div>
                        )}
                        <DialogFooter>
                          <Button type="submit" onClick={handleUpdateService}>Save Changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="h-8 w-8 bg-white text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-muted-foreground">
                      {service.duration} minutes
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className="w-full flex items-center justify-between">
                    <span className="font-bold text-lg">${service.price}</span>
                    <Button variant="outline" onClick={() => toast.success("Service visibility toggled")}>
                      Active
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
