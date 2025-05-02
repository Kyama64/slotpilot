
import { useState } from "react";
import { Search, Plus, ChevronRight, Mail, Phone, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Mock customers data
const mockCustomers = [
  {
    id: "c1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    joinDate: "2023-04-15",
    lastBooking: "2023-06-10",
    totalBookings: 5,
    status: "Active",
    avatar: "",
  },
  {
    id: "c2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 234-5678",
    joinDate: "2023-02-28",
    lastBooking: "2023-06-15",
    totalBookings: 8,
    status: "Active",
    avatar: "",
  },
  {
    id: "c3",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "(555) 345-6789",
    joinDate: "2023-05-10",
    lastBooking: "2023-06-01",
    totalBookings: 2,
    status: "Inactive",
    avatar: "",
  },
  {
    id: "c4",
    name: "Alice Williams",
    email: "alice.williams@example.com",
    phone: "(555) 456-7890",
    joinDate: "2023-03-22",
    lastBooking: "2023-06-18",
    totalBookings: 4,
    status: "Active",
    avatar: "",
  },
  {
    id: "c5",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    phone: "(555) 567-8901",
    joinDate: "2023-01-15",
    lastBooking: "2023-05-30",
    totalBookings: 10,
    status: "Active",
    avatar: "",
  },
];

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState(mockCustomers);
  const { toast } = useToast();

  // Filter customers based on search query
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone.includes(searchQuery)
  );

  const handleAddCustomer = () => {
    toast({
      title: "Feature coming soon",
      description: "Adding new customers will be available in the next update.",
    });
  };

  const handleStatusToggle = (customerId: string) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === customerId
          ? {
              ...customer,
              status: customer.status === "Active" ? "Inactive" : "Active",
            }
          : customer
      )
    );
    
    toast({
      title: "Customer status updated",
      description: "The customer status has been successfully updated.",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground">
              Manage your customers and their information
            </p>
          </div>
          
          <Button onClick={handleAddCustomer} className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>

        <div className="mb-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search customers by name, email or phone..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer List</CardTitle>
            <CardDescription>
              View and manage all your customers in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Join Date</TableHead>
                    <TableHead>Last Booking</TableHead>
                    <TableHead>Total Bookings</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No customers found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredCustomers.map((customer) => (
                      <TableRow key={customer.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={customer.avatar} alt={customer.name} />
                              <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{customer.name}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <Mail className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                              <span className="text-sm">{customer.email}</span>
                            </div>
                            <div className="flex items-center mt-1">
                              <Phone className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                              <span className="text-sm">{customer.phone}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                            {new Date(customer.joinDate).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          {new Date(customer.lastBooking).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {customer.totalBookings}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={customer.status === "Active" ? "default" : "secondary"}
                            className={
                              customer.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
                            }
                          >
                            {customer.status}
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
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleStatusToggle(customer.id)}>
                                {customer.status === "Active" ? "Deactivate" : "Activate"}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Delete Customer
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Customers;
