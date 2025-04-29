
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";

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

const mockServices = [
  { id: "1", name: "Haircut", duration: "30 min", price: "$30" },
  { id: "2", name: "Hair Color", duration: "90 min", price: "$120" },
  { id: "3", name: "Styling", duration: "45 min", price: "$50" },
];

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const { toast } = useToast();

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

  const selectedServiceData = selectedService 
    ? mockServices.find(service => service.id === selectedService) 
    : null;

  const selectedTimeSlotData = selectedTimeSlot 
    ? mockTimeSlots.find(slot => slot.id === selectedTimeSlot) 
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Alex's Hair Studio</h1>
          </div>
          <p className="text-gray-600 max-w-lg mx-auto">
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
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <div className={`h-1 w-10 mx-1 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                  <div className={`h-1 w-10 mx-1 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockServices.map((service) => (
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
                        className="rounded-md border p-3 pointer-events-auto"
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {mockTimeSlots.map((slot) => (
                        <Button
                          key={slot.id}
                          variant={selectedTimeSlot === slot.id ? "default" : "outline"}
                          className={`flex items-center justify-center ${!slot.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={!slot.available}
                          onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
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
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name"
                      placeholder="John Doe"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
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
              <Button variant="outline" onClick={handlePreviousStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <Button 
                onClick={handleNextStep}
                disabled={(step === 1 && !selectedService) || (step === 2 && !selectedTimeSlot)}
              >
                Continue
              </Button>
            ) : (
              <Button 
                onClick={handleBookAppointment}
                className="bg-success hover:bg-success/90"
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
