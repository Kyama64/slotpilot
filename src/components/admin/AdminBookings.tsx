
import { useState } from "react";
import { MoreHorizontal, Calendar } from "lucide-react";
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

// Mock bookings data
const mockBookings = [
  {
    id: "b1",
    service: "Professional Haircut",
    user: "John Doe",
    provider: "Style & Scissors",
    date: "2023-06-15",
    time: "10:00 AM",
    status: "Confirmed",
    price: 45,
  },
  {
    id: "b2",
    service: "Deep Tissue Massage",
    user: "Jane Smith",
    provider: "Relaxation Spa",
    date: "2023-06-16",
    time: "2:30 PM",
    status: "Pending",
    price: 85,
  },
  {
    id: "b3",
    service: "Home Plumbing Repair",
    user: "Bob Johnson",
    provider: "Quick Fix Plumbing",
    date: "2023-06-17",
    time: "9:00 AM",
    status: "Completed",
    price: 120,
  },
  {
    id: "b4",
    service: "House Cleaning",
    user: "Alice Williams",
    provider: "CleanHome Services",
    date: "2023-06-18",
    time: "1:00 PM",
    status: "Cancelled",
    price: 90,
  },
  {
    id: "b5",
    service: "Wedding Photography",
    user: "Charlie Brown",
    provider: "Perfect Moments",
    date: "2023-06-20",
    time: "11:00 AM",
    status: "Confirmed",
    price: 1200,
  },
];

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "Confirmed":
      return "bg-blue-100 text-blue-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

interface AdminBookingsProps {
  searchQuery: string;
}

const AdminBookings: React.FC<AdminBookingsProps> = ({ searchQuery }) => {
  const [bookings, setBookings] = useState(mockBookings);

  // Filter bookings based on search query
  const filteredBookings = bookings.filter(
    (booking) =>
      booking.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.provider.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUpdateStatus = (bookingId: string, newStatus: string) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === bookingId
          ? {
              ...booking,
              status: newStatus,
            }
          : booking
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Bookings List</h3>
        <Button size="sm">Add Booking</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBookings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No bookings found
                </TableCell>
              </TableRow>
            ) : (
              filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.service}</TableCell>
                  <TableCell>{booking.user}</TableCell>
                  <TableCell>{booking.provider}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>
                        {booking.date} at {booking.time}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>${booking.price}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusBadgeColor(booking.status)}
                    >
                      {booking.status}
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
                        <DropdownMenuItem onClick={() => handleUpdateStatus(booking.id, "Confirmed")}>
                          Mark as Confirmed
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleUpdateStatus(booking.id, "Completed")}>
                          Mark as Completed
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleUpdateStatus(booking.id, "Cancelled")}>
                          Cancel Booking
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

export default AdminBookings;
