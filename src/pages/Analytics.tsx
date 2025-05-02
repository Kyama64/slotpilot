
import { useState } from "react";
import {
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Users,
  Clock
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import { useToast } from "@/hooks/use-toast";

// Mock data for various charts
const revenueData = [
  { month: "Jan", revenue: 4000, bookings: 40 },
  { month: "Feb", revenue: 3000, bookings: 30 },
  { month: "Mar", revenue: 5000, bookings: 45 },
  { month: "Apr", revenue: 7000, bookings: 55 },
  { month: "May", revenue: 6000, bookings: 48 },
  { month: "Jun", revenue: 8000, bookings: 61 },
  { month: "Jul", revenue: 9000, bookings: 70 },
];

const categoryData = [
  { name: "Beauty", value: 540 },
  { name: "Wellness", value: 620 },
  { name: "Home Services", value: 210 },
  { name: "Photography", value: 325 },
  { name: "Other", value: 150 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const weeklyData = [
  { day: "Mon", bookings: 15 },
  { day: "Tue", bookings: 20 },
  { day: "Wed", bookings: 25 },
  { day: "Thu", bookings: 18 },
  { day: "Fri", bookings: 30 },
  { day: "Sat", bookings: 40 },
  { day: "Sun", bookings: 25 },
];

const customerData = [
  { month: "Jan", new: 20, returning: 10 },
  { month: "Feb", new: 15, returning: 12 },
  { month: "Mar", new: 25, returning: 15 },
  { month: "Apr", new: 30, returning: 20 },
  { month: "May", new: 28, returning: 25 },
  { month: "Jun", new: 35, returning: 30 },
  { month: "Jul", new: 40, returning: 35 },
];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("month");
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Analytics exported",
      description: "Your analytics data has been exported successfully.",
    });
  };

  // Summary metrics
  const totalBookings = revenueData.reduce((sum, item) => sum + item.bookings, 0);
  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
  const averageBookingValue = totalRevenue / totalBookings;
  const percentIncrease = 18; // Mock percentage increase

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">
              Track and analyze your business performance
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last 7 Days</SelectItem>
                <SelectItem value="month">Last 30 Days</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={handleExport}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBookings}</div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <p className="text-xs text-green-500">
                  +{percentIncrease}% from last {timeRange}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <p className="text-xs text-green-500">
                  +22% from last {timeRange}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Avg. Booking Value</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${averageBookingValue.toFixed(2)}</div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <p className="text-xs text-green-500">
                  +5% from last {timeRange}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">New Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">125</div>
              <div className="flex items-center">
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                <p className="text-xs text-red-500">
                  -3% from last {timeRange}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="revenue" className="space-y-8">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          
          <TabsContent value="revenue" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>
                  Monthly revenue performance for the current year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={revenueData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="bookings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Trends</CardTitle>
                <CardDescription>
                  Weekly and monthly booking patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-8">
                <div className="h-[300px]">
                  <h3 className="text-lg font-medium mb-4">Weekly Distribution</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={weeklyData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bookings" fill="#0088FE" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="h-[300px]">
                  <h3 className="text-lg font-medium mb-4">Monthly Trend</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart
                      data={revenueData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="bookings"
                        stroke="#00C49F"
                        activeDot={{ r: 8 }}
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Analysis</CardTitle>
                <CardDescription>
                  New vs. returning customer trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={customerData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="new" name="New Customers" fill="#0088FE" stackId="a" />
                      <Bar dataKey="returning" name="Returning Customers" fill="#00C49F" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="categories" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Categories</CardTitle>
                <CardDescription>
                  Breakdown by service type and category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend />
                      <Tooltip formatter={(value) => [`${value} bookings`, "Count"]} />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
