
import { useState, useEffect } from "react";
import { Calendar, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

const mockTimeSlots = [
  { id: "1", time: "9:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: true },
  { id: "3", time: "11:00 AM", available: false },
  { id: "4", time: "12:00 PM", available: true },
  { id: "5", time: "1:00 PM", available: true },
  { id: "6", time: "2:00 PM", available: false },
  { id: "7", time: "3:00 PM", available: true },
  { id: "8", time: "4:00 PM", available: true },
  { id: "9", time: "5:00 PM", available: false },
];

interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

// Mock services for different business plans
const mockBusinessData = {
  starter: {
    name: "Alex's Hair Studio",
    plan: "Starter",
    planFeatures: ["Up to 30 bookings/month", "Basic analytics", "3 services"],
    services: [
      { id: "1", name: "Basic Haircut", duration: "30 min", price: "$25" },
      { id: "2", name: "Simple Styling", duration: "20 min", price: "$20" },
      { id: "3", name: "Quick Trim", duration: "15 min", price: "$15" },
    ],
  },
  pro: {
    name: "Elite Salon & Spa",
    plan: "Professional",
    planFeatures: ["Unlimited bookings", "Detailed analytics", "Up to 10 services", "SMS notifications"],
    services: [
      { id: "1", name: "Premium Haircut", duration: "45 min", price: "$40" },
      { id: "2", name: "Full Color Service", duration: "120 min", price: "$120" },
      { id: "3", name: "Styling", duration: "30 min", price: "$35" },
      { id: "4", name: "Facial Treatment", duration: "60 min", price: "$65" },
      { id: "5", name: "Manicure", duration: "45 min", price: "$45" },
    ],
  },
  business: {
    name: "Wellness Center Complete",
    plan: "Business",
    planFeatures: ["Unlimited everything", "Advanced reporting", "Staff management", "Custom booking page", "API access"],
    services: [
      { id: "1", name: "Executive Haircut & Style", duration: "60 min", price: "$75" },
      { id: "2", name: "Full Spa Package", duration: "180 min", price: "$200" },
      { id: "3", name: "Deep Tissue Massage", duration: "90 min", price: "$120" },
      { id: "4", name: "Premium Facial", duration: "75 min", price: "$95" },
      { id: "5", name: "Body Scrub & Wrap", duration: "120 min", price: "$150" },
      { id: "6", name: "Hair Coloring", duration: "120 min", price: "$140" },
      { id: "7", name: "Nail Art", duration: "60 min", price: "$65" },
    ],
  },
};

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [businessData, setBusinessData] = useState<any>(null);
  const { toast } = useToast();
  const { businessId } = useParams<{ businessId: string }>();

  useEffect(() => {
    // In a real app, you'd fetch the business data from an API using the businessId
    // For this demo, we'll map the ID to our mock data
    const planType = businessId?.toLowerCase() || "pro";
    
    if (planType in mockBusinessData) {
      setBusinessData(mockBusinessData[planType as keyof typeof mockBusinessData]);
    } else {
      // Default to pro plan if ID doesn't match
      setBusinessData(mockBusinessData.pro);
    }
  }, [businessId]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setDate(date);
    // In a real app, you'd fetch available time slots for the selected date
  };

  const handleNextStep = () => {
    if (step === 1 && selectedService) {
      setStep(2);
    } else if (step === 2 && date && selectedTimeSlot) {
      setStep(3);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleBookAppointment = () => {
    // Validate form
    if (!customerName || !customerEmail || !customerPhone) {
      toast({
        title: "Please fill in all fields",
        description: "We need your contact information to confirm the booking.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, you'd send this data to your API
    toast({
      title: "Booking confirmed!",
      description: "Check your email for confirmation details.",
      variant: "default",
    });
    
    // Reset form
    setStep(1);
    setSelectedService(null);
    setSelectedTimeSlot(null);
    setCustomerName("");
    setCustomerEmail("");
    setCustomerPhone("");
  };

  const selectedServiceData = selectedService && businessData?.services 
    ? businessData.services.find((service: Service) => service.id === selectedService) 
    : null;

  const selectedTimeSlotData = selectedTimeSlot 
    ? mockTimeSlots.find(slot => slot.id === selectedTimeSlot) 
    : null;

  if (!businessData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading business data...</p>
      </div>
    );
  }

  const getPlanBadgeColor = (plan: string) => {
    switch (plan.toLowerCase()) {
      case "starter": return "bg-blue-100 text-blue-800";
      case "professional": return "bg-purple-100 text-purple-800";
      case "business": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h1 className="text-xl md:text-2xl font-bold">{businessData.name}</h1>
          </div>
          
          <div className="flex justify-center mb-4">
            <Badge className={`${getPlanBadgeColor(businessData.plan)}`}>
              {businessData.plan} Plan
            </Badge>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {businessData.planFeatures.map((feature: string, index: number) => (
              <div key={index} className="flex items-center text-xs md:text-sm text-gray-600">
                <Check className="h-3 w-3 md:h-4 md:w-4 text-green-500 mr-1" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <p className="text-gray-600 max-w-lg mx-auto text-sm md:text-base">
            Book your appointment online. Select a service, choose a date and time, and provide your contact information.
          </p>
        </div>

        <Card className="shadow-lg glass-card">
          <CardHeader>
            <CardTitle>Book an Appointment</CardTitle>
            <CardDescription>Follow the steps to schedule your appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <div className={`h-1 w-5 md:w-10 mx-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                  <div className={`h-1 w-5 md:w-10 mx-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                    3
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Step {step} of 3
                </div>
              </div>
            </div>

            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="font-medium text-lg mb-4">Select a Service</h3>
                <div className="grid grid-cols-1 gap-3">
                  {businessData.services.map((service: Service) => (
                    <div 
                      key={service.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedService === service.id 
                          ? 'border-primary bg-blue-50 shadow-sm' 
                          : 'border-gray-200 hover:border-primary/40'
                      }`}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{service.name}</h4>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                        <div className="font-medium">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="font-medium text-lg mb-4">Select Date & Time</h3>
                <Tabs defaultValue="calendar" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                    <TabsTrigger value="timeSlots">Time Slots</TabsTrigger>
                  </TabsList>
                  <TabsContent value="calendar" className="space-y-4">
                    <div className="flex justify-center">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        className="rounded-md border p-2 md:p-3 pointer-events-auto"
                        disabled={(date) => {
                          // Disable past dates and Sundays (day 0)
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || date.getDay() === 0;
                        }}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="timeSlots">
                    <div className="mb-3 text-center text-sm text-gray-500">
                      {date ? (
                        <span>Available times for {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                      ) : (
                        <span>Please select a date first</span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                      {mockTimeSlots.map((slot) => (
                        <Button
                          key={slot.id}
                          variant={selectedTimeSlot === slot.id ? "default" : "outline"}
                          className={`flex items-center justify-center text-xs md:text-sm ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={!slot.available}
                          onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
                        >
                          <Clock className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="font-medium text-lg mb-4">Your Information</h3>
                
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-medium mb-2">Booking Summary</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-500">Service:</div>
                    <div className="font-medium">{selectedServiceData?.name}</div>
                    
                    <div className="text-gray-500">Duration:</div>
                    <div>{selectedServiceData?.duration}</div>
                    
                    <div className="text-gray-500">Date:</div>
                    <div>{date?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
                    
                    <div className="text-gray-500">Time:</div>
                    <div>{selectedTimeSlotData?.time}</div>
                    
                    <div className="text-gray-500">Price:</div>
                    <div className="font-medium">{selectedServiceData?.price}</div>
                  </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      placeholder="John Doe"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-1 md:space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      placeholder="(123) 456-7890"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={handlePreviousStep} className="text-sm">
                Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <Button 
                onClick={handleNextStep}
                disabled={(step === 1 && !selectedService) || (step === 2 && !selectedTimeSlot)}
                className="text-sm"
              >
                Continue
              </Button>
            ) : (
              <Button 
                onClick={handleBookAppointment}
                className="bg-success hover:bg-success/90 text-sm"
              >
                Confirm Booking
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
