
import { useState } from "react";
import { MoreHorizontal, Star } from "lucide-react";
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

// Mock service data
const mockServices = [
  {
    id: "s1",
    name: "Professional Haircut",
    provider: "Style & Scissors",
    category: "Beauty",
    price: 45,
    location: "New York, NY",
    rating: 4.8,
    status: "Active",
  },
  {
    id: "s2",
    name: "Deep Tissue Massage",
    provider: "Relaxation Spa",
    category: "Wellness",
    price: 85,
    location: "Los Angeles, CA",
    rating: 4.9,
    status: "Active",
  },
  {
    id: "s3",
    name: "Home Plumbing Repair",
    provider: "Quick Fix Plumbing",
    category: "Home Services",
    price: 120,
    location: "Chicago, IL",
    rating: 4.6,
    status: "Active",
  },
  {
    id: "s4",
    name: "House Cleaning",
    provider: "CleanHome Services",
    category: "Home Services",
    price: 90,
    location: "Miami, FL",
    rating: 4.5,
    status: "Inactive",
  },
  {
    id: "s5",
    name: "Wedding Photography",
    provider: "Perfect Moments",
    category: "Photography",
    price: 1200,
    location: "Seattle, WA",
    rating: 4.9,
    status: "Active",
  },
];

interface AdminServicesProps {
  searchQuery: string;
}

const AdminServices: React.FC<AdminServicesProps> = ({ searchQuery }) => {
  const [services, setServices] = useState(mockServices);

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
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Services List</h3>
        <Button size="sm">Add Service</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredServices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  No services found
                </TableCell>
              </TableRow>
            ) : (
              filteredServices.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{service.provider}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{service.category}</Badge>
                  </TableCell>
                  <TableCell>${service.price}</TableCell>
                  <TableCell>{service.location}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                      <span>{service.rating}</span>
                    </div>
                  </TableCell>
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
                        <DropdownMenuItem>Edit Service</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusToggle(service.id)}>
                          {service.status === "Active" ? "Deactivate" : "Activate"}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
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
