
import { useState } from "react";
import { Check, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const AdminSettings = () => {
  // General settings
  const [siteName, setSiteName] = useState("SnapSchedule");
  const [siteDescription, setSiteDescription] = useState("Service booking platform");
  const [contactEmail, setContactEmail] = useState("admin@snapschedule.com");
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [bookingConfirmations, setBookingConfirmations] = useState(true);
  const [bookingReminders, setBookingReminders] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  
  // API settings
  const [apiKey, setApiKey] = useState("sk_test_123456789");
  
  const handleSaveSettings = (section: string) => {
    // In a real application, this would save to the backend
    toast.success(`${section} settings saved successfully`);
  };
  
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="api">API & Integrations</TabsTrigger>
      </TabsList>
      
      <TabsContent value="general">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">General Settings</h3>
            <p className="text-sm text-muted-foreground">
              Basic application configuration settings
            </p>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="site-name">Site Name</Label>
              <Input 
                id="site-name" 
                value={siteName} 
                onChange={(e) => setSiteName(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                The name of your application as shown to users
              </p>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="site-description">Site Description</Label>
              <Input 
                id="site-description" 
                value={siteDescription} 
                onChange={(e) => setSiteDescription(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                A brief description of your application
              </p>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Contact Email</Label>
              <Input 
                id="contact-email" 
                type="email" 
                value={contactEmail} 
                onChange={(e) => setContactEmail(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Email address for user inquiries
              </p>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => handleSaveSettings('General')}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="notifications">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">Notification Settings</h3>
            <p className="text-sm text-muted-foreground">
              Configure how and when notifications are sent
            </p>
          </div>
          
          <Separator />
          
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
        </div>
      </TabsContent>
      
      <TabsContent value="api">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium">API & Integrations</h3>
            <p className="text-sm text-muted-foreground">
              Manage API keys and third-party integrations
            </p>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="api-key">API Key</Label>
              <div className="flex gap-2">
                <Input 
                  id="api-key" 
                  type="password" 
                  value={apiKey} 
                  onChange={(e) => setApiKey(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" onClick={() => {
                  navigator.clipboard.writeText(apiKey);
                  toast.success("API key copied to clipboard");
                }}>
                  Copy
                </Button>
                <Button variant="outline" onClick={() => {
                  setApiKey("sk_test_" + Math.random().toString(36).substring(2, 15));
                  toast.success("API key regenerated");
                }}>
                  Regenerate
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Your API key for accessing the SnapSchedule API
              </p>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Connected Services</h4>
              
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-xs text-muted-foreground">Connected on Apr 30, 2023</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Connect New Service
              </Button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={() => handleSaveSettings('API')}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default AdminSettings;
