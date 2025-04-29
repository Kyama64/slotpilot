
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  BarChart3,
  Settings,
  ChevronRight,
  Plus,
  CalendarCheck,
  CalendarX,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

interface Booking {
  id: string;
  customerName: string;
  service: string;
  date: string;
  time: string;
  status: "confirmed" | "cancelled";
}

const mockBookings: Booking[] = [
  {
    id: "1",
    customerName: "John Smith",
    service: "Haircut",
    date: "2025-04-29",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: "2",
    customerName: "Sarah Johnson",
    service: "Hair Color",
    date: "2025-04-29",
    time: "1:00 PM",
    status: "confirmed",
  },
  {
    id: "3",
    customerName: "Michael Brown",
    service: "Styling",
    date: "2025-04-30",
    time: "11:00 AM",
    status: "cancelled",
  },
  {
    id: "4",
    customerName: "Emily Davis",
    service: "Haircut",
    date: "2025-05-01",
    time: "9:00 AM",
    status: "confirmed",
  },
  {
    id: "5",
    customerName: "David Wilson",
    service: "Hair Color",
    date: "2025-05-01",
    time: "2:00 PM",
    status: "confirmed",
  },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const todayBookings = mockBookings.filter(booking => booking.date === "2025-04-29");
  const confirmedBookings = mockBookings.filter(booking => booking.status === "confirmed");

  if (isMobile && sidebarOpen) {
    setSidebarOpen(false);
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNewBooking = () => {
    toast({
      title: "Feature coming soon",
      description: "Creating new bookings will be available in the next update.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
            sidebarOpen ? "w-64" : "w-0 sm:w-16"
          } ${isMobile && !sidebarOpen ? "hidden" : ""}`}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 border-b border-gray-100">
              {sidebarOpen ? (
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">SnapSchedule</span>
                </div>
              ) : (
                <div className="flex justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
            <div className="py-4 flex-1">
              <nav className="space-y-1 px-2">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md bg-blue-50 text-primary"
                >
                  <CalendarCheck className="h-5 w-5" />
                  {sidebarOpen && <span>Bookings</span>}
                </Link>
                <Link
                  to="/services"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Clock className="h-5 w-5" />
                  {sidebarOpen && <span>Services</span>}
                </Link>
                <Link
                  to="/customers"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Users className="h-5 w-5" />
                  {sidebarOpen && <span>Customers</span>}
                </Link>
                <Link
                  to="/analytics"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <BarChart3 className="h-5 w-5" />
                  {sidebarOpen && <span>Analytics</span>}
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="h-5 w-5" />
                  {sidebarOpen && <span>Settings</span>}
                </Link>
              </nav>
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                  A
                </div>
                {sidebarOpen && (
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Alex's Hair Studio</p>
                    <p className="text-xs text-gray-500 truncate">alex@example.com</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
            <div className="flex items-center justify-between px-4 h-16">
              <div className="flex items-center">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleSidebar} 
                  className="mr-2"
                  aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <h1 className="text-xl font-semibold">Bookings</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button onClick={handleNewBooking} className="flex items-center">
                  <Plus className="h-4 w-4 mr-2" />
                  New Booking
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            {/* Dashboard metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Today's Bookings</CardTitle>
                  <CalendarCheck className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{todayBookings.length}</div>
                  <p className="text-xs text-gray-500">+2 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">This Week</CardTitle>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-gray-500">+5 from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Confirmed</CardTitle>
                  <CalendarCheck className="h-4 w-4 text-success" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{confirmedBookings.length}</div>
                  <p className="text-xs text-gray-500">From all bookings</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Cancelled</CardTitle>
                  <CalendarX className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-gray-500">From all bookings</p>
                </CardContent>
              </Card>
            </div>

            {/* Bookings table */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Upcoming Bookings</CardTitle>
                <CardDescription>View and manage your scheduled appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="today">Today</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                  </TabsList>
                  <TabsContent value="upcoming">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-50 text-left">
                            <th className="px-4 py-3 font-medium text-gray-500">Customer</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Service</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Date</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Time</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Status</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {mockBookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-50">
                              <td className="px-4 py-4 whitespace-nowrap">{booking.customerName}</td>
                              <td className="px-4 py-4 whitespace-nowrap">{booking.service}</td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                {new Date(booking.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap">{booking.time}</td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    booking.status === "confirmed"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </span>
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link to={`/bookings/${booking.id}`}>
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">View details</span>
                                  </Link>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="today">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gray-50 text-left">
                            <th className="px-4 py-3 font-medium text-gray-500">Customer</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Service</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Time</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Status</th>
                            <th className="px-4 py-3 font-medium text-gray-500">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {todayBookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-50">
                              <td className="px-4 py-4 whitespace-nowrap">{booking.customerName}</td>
                              <td className="px-4 py-4 whitespace-nowrap">{booking.service}</td>
                              <td className="px-4 py-4 whitespace-nowrap">{booking.time}</td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <span
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    booking.status === "confirmed"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                </span>
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <Button variant="ghost" size="icon" asChild>
                                  <Link to={`/bookings/${booking.id}`}>
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">View details</span>
                                  </Link>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                  <TabsContent value="past">
                    <div className="flex items-center justify-center h-40 text-gray-500">
                      No past bookings to display
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
