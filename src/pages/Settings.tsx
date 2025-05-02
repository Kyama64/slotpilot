
import { useState } from "react";
import { Save, User, Bell, Shield, CreditCard, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Settings = () => {
  // Profile settings
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@example.com");
  const [phone, setPhone] = useState("(555) 123-4567");
  const [bio, setBio] = useState("Owner of Alex's Hair Studio");

  // Business settings
  const [businessName, setBusinessName] = useState("Alex's Hair Studio");
  const [businessPhone, setBusinessPhone] = useState("(555) 987-6543");
  const [businessAddress, setBusinessAddress] = useState("123 Main St, New York, NY 10001");
  const [businessDescription, setBusinessDescription] = useState("Professional hair styling services for all ages and styles.");
  const [businessHours, setBusinessHours] = useState("Monday-Friday: 9am-7pm, Saturday: 10am-5pm, Sunday: Closed");
  const [website, setWebsite] = useState("www.alexhairstudio.com");
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [bookingConfirmations, setBookingConfirmations] = useState(true);
  const [bookingReminders, setBookingReminders] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  
  // Payment settings
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState("stripe");
  const [currency, setCurrency] = useState("usd");
  
  const { toast } = useToast();
  
  const handleSaveSettings = (section: string) => {
    toast({
      title: `${section} settings saved`,
      description: `Your ${section.toLowerCase()} settings have been updated successfully.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and application preferences
          </p>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="w-full grid grid-cols-1 md:grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Profile
                </CardTitle>
                <CardDescription>
                  Manage your personal information and profile details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      value={bio} 
                      onChange={(e) => setBio(e.target.value)}
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground">
                      Brief description of yourself visible to others
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Security</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('Profile')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="business">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Business Information
                </CardTitle>
                <CardDescription>
                  Manage your business details and public information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input 
                        id="business-name" 
                        value={businessName} 
                        onChange={(e) => setBusinessName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="business-phone">Business Phone</Label>
                      <Input 
                        id="business-phone" 
                        value={businessPhone} 
                        onChange={(e) => setBusinessPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-address">Business Address</Label>
                    <Input 
                      id="business-address" 
                      value={businessAddress} 
                      onChange={(e) => setBusinessAddress(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-website">Website</Label>
                    <Input 
                      id="business-website" 
                      value={website} 
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-hours">Business Hours</Label>
                    <Textarea 
                      id="business-hours" 
                      value={businessHours} 
                      onChange={(e) => setBusinessHours(e.target.value)}
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="business-description">Business Description</Label>
                    <Textarea 
                      id="business-description" 
                      value={businessDescription} 
                      onChange={(e) => setBusinessDescription(e.target.value)}
                      rows={4}
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Service Settings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="booking-interval">Booking Interval</Label>
                      <Select defaultValue="15">
                        <SelectTrigger id="booking-interval">
                          <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="advance-booking">Maximum Advance Booking</Label>
                      <Select defaultValue="30">
                        <SelectTrigger id="advance-booking">
                          <SelectValue placeholder="Select days" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">7 days</SelectItem>
                          <SelectItem value="14">14 days</SelectItem>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('Business')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Configure how and when notifications are sent
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable or disable all email notifications
                      </p>
                    </div>
                    <Switch 
                      id="email-notifications" 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="booking-confirmations">Booking Confirmations</Label>
                      <p className="text-sm text-muted-foreground">
                        Send confirmation emails when bookings are made
                      </p>
                    </div>
                    <Switch 
                      id="booking-confirmations" 
                      checked={bookingConfirmations} 
                      disabled={!emailNotifications}
                      onCheckedChange={setBookingConfirmations}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="booking-reminders">Booking Reminders</Label>
                      <p className="text-sm text-muted-foreground">
                        Send reminder emails 24 hours before appointments
                      </p>
                    </div>
                    <Switch 
                      id="booking-reminders" 
                      checked={bookingReminders}
                      disabled={!emailNotifications}
                      onCheckedChange={setBookingReminders}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-emails">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">
                        Send promotional emails and special offers
                      </p>
                    </div>
                    <Switch 
                      id="marketing-emails" 
                      checked={marketingEmails}
                      disabled={!emailNotifications}
                      onCheckedChange={setMarketingEmails}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('Notification')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Settings
                </CardTitle>
                <CardDescription>
                  Manage payment methods and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="default-payment">Default Payment Method</Label>
                    <Select 
                      value={defaultPaymentMethod} 
                      onValueChange={setDefaultPaymentMethod}
                    >
                      <SelectTrigger id="default-payment">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stripe">Stripe</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="cash">Cash on Delivery</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select 
                      value={currency} 
                      onValueChange={setCurrency}
                    >
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD - US Dollar</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                        <SelectItem value="gbp">GBP - British Pound</SelectItem>
                        <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                        <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Connected Payment Accounts</h3>
                  
                  <div className="rounded-md border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                            <path d="M22 12L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 6L3 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22 18L3 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Stripe</p>
                          <p className="text-xs text-muted-foreground">Connected on Apr 30, 2023</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Disconnect</Button>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Connect New Payment Method
                  </Button>
                </div>
                
                <div className="flex justify-end">
                  <Button onClick={() => handleSaveSettings('Payment')}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
