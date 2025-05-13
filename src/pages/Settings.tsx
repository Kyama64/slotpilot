
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock, Clock, User, Bell, Shield } from "lucide-react";
import AvailabilityManager from "@/components/provider/AvailabilityManager";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Mock services data for the provider - this matches with the MyServices page
const mockServices = [
  { id: "s1", name: "Professional Haircut", duration: 45 },
  { id: "s2", name: "Hair Coloring", duration: 90 },
  { id: "s3", name: "Hair Styling", duration: 60 },
];

const Settings = () => {
  const [selectedService, setSelectedService] = useState(mockServices[0].id);
  const [serviceDuration, setServiceDuration] = useState(mockServices[0].duration.toString());
  
  const handleSaveDuration = () => {
    // In a real application, this would update the database
    toast.success(`Updated duration for service successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="availability" className="space-y-6">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="availability">
              <CalendarClock className="h-4 w-4 mr-2" />
              Availability
            </TabsTrigger>
            <TabsTrigger value="services">
              <Clock className="h-4 w-4 mr-2" />
              Service Times
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="availability">
            <AvailabilityManager />
          </TabsContent>
          
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Service Duration Settings</CardTitle>
                <CardDescription>
                  Set the duration for each of your services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service-select">Select Service</Label>
                      <Select 
                        value={selectedService} 
                        onValueChange={(value) => {
                          setSelectedService(value);
                          const service = mockServices.find(s => s.id === value);
                          if (service) {
                            setServiceDuration(service.duration.toString());
                          }
                        }}
                      >
                        <SelectTrigger id="service-select" className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {mockServices.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="duration-input">Duration (minutes)</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="duration-input"
                          type="number" 
                          value={serviceDuration} 
                          onChange={(e) => setServiceDuration(e.target.value)}
                          className="flex-1"
                        />
                        <Button onClick={handleSaveDuration}>Save</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded p-4 mt-4">
                    <h3 className="text-sm font-medium text-blue-800 mb-2">Time Slot Configuration</h3>
                    <p className="text-sm text-blue-700">
                      Setting the correct duration for each service helps our system create appropriate time slots for bookings.
                      Make sure to account for any preparation or clean-up time in your service duration.
                    </p>
                  </div>
                  
                  <div className="border rounded-md mt-4">
                    <div className="bg-gray-50 px-4 py-2 border-b">
                      <h3 className="font-medium">Current Service Durations</h3>
                    </div>
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b bg-gray-50">
                          <th className="text-left py-2 px-4 text-xs font-medium text-gray-500 uppercase">Service Name</th>
                          <th className="text-right py-2 px-4 text-xs font-medium text-gray-500 uppercase">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockServices.map((service) => (
                          <tr key={service.id} className="border-b last:border-b-0">
                            <td className="py-2 px-4">{service.name}</td>
                            <td className="py-2 px-4 text-right">
                              <div className="flex items-center justify-end">
                                <Clock className="w-3 h-3 text-gray-400 mr-1" />
                                <span>{service.duration} min</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>
                  Manage your personal and business information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Profile settings will be implemented here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Control how and when you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Notification settings will be implemented here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your password and security preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Security settings will be implemented here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
