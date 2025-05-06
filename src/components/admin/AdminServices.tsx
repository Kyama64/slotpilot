
import { useState } from "react";
import { MoreHorizontal, Star, Plus, Clock, Edit, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Enhanced mock service data with more details
const mockServices = [
  {
    id: "s1",
    name: "Professional Haircut",
    provider: "Style & Scissors",
    category: "Beauty",
    price: 45,
    duration: 45,
    location: "New York, NY",
    rating: 4.8,
    status: "Active",
    description: "Professional haircut service including wash and style.",
    bookings: 28,
  },
  {
    id: "s2",
    name: "Deep Tissue Massage",
    provider: "Relaxation Spa",
    category: "Wellness",
    price: 85,
    duration: 60,
    location: "Los Angeles, CA",
    rating: 4.9,
    status: "Active",
    description: "Therapeutic massage focusing on deeper layers of muscle tissue.",
    bookings: 42,
  },
  {
    id: "s3",
    name: "Home Plumbing Repair",
    provider: "Quick Fix Plumbing",
    category: "Home Services",
    price: 120,
    duration: 90,
    location: "Chicago, IL",
    rating: 4.6,
    status: "Active",
    description: "Professional plumbing service for home repairs and installations.",
    bookings: 15,
  },
  {
    id: "s4",
    name: "House Cleaning",
    provider: "CleanHome Services",
    category: "Home Services",
    price: 90,
    duration: 120,
    location: "Miami, FL",
    rating: 4.5,
    status: "Inactive",
    description: "Comprehensive cleaning service for homes and apartments.",
    bookings: 32,
  },
  {
    id: "s5",
    name: "Wedding Photography",
    provider: "Perfect Moments",
    category: "Photography",
    price: 1200,
    duration: 480,
    location: "Seattle, WA",
    rating: 4.9,
    status: "Active",
    description: "Professional wedding photography service capturing your special day.",
    bookings: 8,
  },
];

// Available service categories
const serviceCategories = [
  "Beauty",
  "Wellness",
  "Home Services",
  "Photography",
  "Professional Services",
  "Education",
  "Events",
  "Health",
  "Automotive"
];

interface AdminServicesProps {
  searchQuery: string;
}

const AdminServices: React.FC<AdminServicesProps> = ({ searchQuery }) => {
  const [services, setServices] = useState(mockServices);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentService, setCurrentService] = useState<any>(null);
  const { toast } = useToast();
  
  // New service form state
  const [newService, setNewService] = useState({
    name: "",
    category: "",
    price: "",
    duration: "",
    description: "",
    location: "",
    provider: "Your Business",
  });

  // Filter services based on search query
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusToggle = (serviceId: string) => {
    setServices(
      services.map((service) =>
        service.id === serviceId
          ? {
              ...service,
              status: service.status === "Active" ? "Inactive" : "Active",
            }
          : service
      )
    );
    
    const service = services.find(s => s.id === serviceId);
    toast({
      title: `Service ${service?.status === "Active" ? "deactivated" : "activated"}`,
      description: `${service?.name} is now ${service?.status === "Active" ? "inactive" : "active"}.`,
    });
  };

  const handleAddService = () => {
    // Validate form
    if (!newService.name || !newService.category || !newService.price || !newService.duration) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create new service
    const service = {
      id: `s${services.length + 1}`,
      name: newService.name,
      provider: newService.provider,
      category: newService.category,
      price: parseFloat(newService.price),
      duration: parseInt(newService.duration),
      location: newService.location || "Various locations",
      rating: 0,
      status: "Active",
      description: newService.description,
      bookings: 0,
    };

    setServices([...services, service]);
    setNewService({
      name: "",
      category: "",
      price: "",
      duration: "",
      description: "",
      location: "",
      provider: "Your Business",
    });
    setIsAddDialogOpen(false);

    toast({
      title: "Service added",
      description: `${service.name} has been added to your services.`,
    });
  };

  const handleEditService = () => {
    if (!currentService) return;

    setServices(
      services.map((service) =>
        service.id === currentService.id ? currentService : service
      )
    );
    setIsEditDialogOpen(false);
    
    toast({
      title: "Service updated",
      description: `${currentService.name} has been updated.`,
    });
  };

  const handleDeleteService = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    setServices(services.filter((service) => service.id !== serviceId));
    
    toast({
      title: "Service deleted",
      description: `${service?.name} has been removed from your services.`,
    });
  };

  const openEditDialog = (service: any) => {
    setCurrentService(service);
    setIsEditDialogOpen(true);
  };

  // Format duration for display
  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Services Management</h3>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>
                Add a new service to your business offerings
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-3">
              <div className="grid gap-2">
                <Label htmlFor="name">Service Name</Label>
                <Input
                  id="name"
                  placeholder="e.g. Premium Haircut"
                  value={newService.name}
                  onChange={(e) => setNewService({...newService, name: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    placeholder="0.00"
                    type="number"
                    min="0"
                    step="0.01"
                    value={newService.price}
                    onChange={(e) => setNewService({...newService, price: e.target.value})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    placeholder="60"
                    type="number"
                    min="1"
                    value={newService.duration}
                    onChange={(e) => setNewService({...newService, duration: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={newService.category} 
                  onValueChange={(value) => setNewService({...newService, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g. Main Street Location"
                  value={newService.location}
                  onChange={(e) => setNewService({...newService, location: e.target.value})}
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your service..."
                  value={newService.description}
                  onChange={(e) => setNewService({...newService, description: e.target.value})}
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddService}>
                Add Service
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* Edit Service Dialog */}
        {currentService && (
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Service</DialogTitle>
                <DialogDescription>
                  Update the details of this service
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-3">
                <div className="grid gap-2">
                  <Label htmlFor="edit-name">Service Name</Label>
                  <Input
                    id="edit-name"
                    value={currentService.name}
                    onChange={(e) => setCurrentService({...currentService, name: e.target.value})}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="edit-price">Price ($)</Label>
                    <Input
                      id="edit-price"
                      type="number"
                      min="0"
                      step="0.01"
                      value={currentService.price}
                      onChange={(e) => setCurrentService({...currentService, price: parseFloat(e.target.value)})}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="edit-duration">Duration (minutes)</Label>
                    <Input
                      id="edit-duration"
                      type="number"
                      min="1"
                      value={currentService.duration}
                      onChange={(e) => setCurrentService({...currentService, duration: parseInt(e.target.value)})}
                    />
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="edit-category">Category</Label>
                  <Select 
                    value={currentService.category} 
                    onValueChange={(value) => setCurrentService({...currentService, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="edit-location">Location</Label>
                  <Input
                    id="edit-location"
                    value={currentService.location}
                    onChange={(e) => setCurrentService({...currentService, location: e.target.value})}
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea
                    id="edit-description"
                    value={currentService.description}
                    onChange={(e) => setCurrentService({...currentService, description: e.target.value})}
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleEditService}>
                  Update Service
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredServices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="h-24 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <AlertCircle className="h-8 w-8 mb-2" />
                    <p>No services found</p>
                    <p className="text-sm">Try adjusting your search or add a new service</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{service.name}</p>
                      <p className="text-xs text-gray-500 truncate max-w-[150px]">
                        {service.description}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{service.category}</Badge>
                  </TableCell>
                  <TableCell>${service.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 text-gray-500 mr-1" />
                      <span>{formatDuration(service.duration)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-[120px] truncate">{service.location}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span>{service.rating.toFixed(1)}</span>
                    </div>
                  </TableCell>
                  <TableCell>{service.bookings}</TableCell>
                  <TableCell>
                    <Badge
                      variant={service.status === "Active" ? "success" : "secondary"}
                      className={
                        service.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditDialog(service)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Service
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusToggle(service.id)}>
                          {service.status === "Active" ? "Deactivate" : "Activate"}
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600"
                          onClick={() => handleDeleteService(service.id)}
                        >
                          Delete Service
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminServices;
