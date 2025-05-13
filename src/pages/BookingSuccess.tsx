
import { useLocation, useParams, Link } from "react-router-dom";
import { CheckCircle, Calendar, Clock, User, Mail, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingSuccess = () => {
  const location = useLocation();
  const { businessId } = useParams();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  // Get booking details from location state
  const {
    businessName = "Service Provider",
    serviceName = "Appointment",
    servicePrice = "$0",
    bookingDate = "N/A",
    bookingTime = "N/A",
    customerName = "Guest",
    customerEmail = "N/A"
  } = location.state || {};

  const handleShare = async () => {
    const shareText = `I just booked a ${serviceName} with ${businessName} on ${bookingDate} at ${bookingTime}.`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Booking',
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };
  
  const copyToClipboard = () => {
    const shareText = `I just booked a ${serviceName} with ${businessName} on ${bookingDate} at ${bookingTime}. Book your appointment here: ${window.location.origin}/book/${businessId}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "Share link with your friends",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Booking Confirmed!</h1>
          <p className="text-gray-600 mt-2">Your appointment has been successfully scheduled</p>
        </div>
        
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">{serviceName}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-[20px_1fr] gap-x-3 items-center">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-gray-700">{bookingDate}</span>
            </div>
            
            <div className="grid grid-cols-[20px_1fr] gap-x-3 items-center">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-gray-700">{bookingTime}</span>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-[20px_1fr] gap-x-3 items-center">
              <User className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">{customerName}</span>
            </div>
            
            <div className="grid grid-cols-[20px_1fr] gap-x-3 items-center">
              <Mail className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">{customerEmail}</span>
            </div>
            
            <div className="font-medium text-right">
              Total: {servicePrice}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Alert className="bg-blue-50 border-blue-100">
              <AlertTitle className="text-blue-800 font-medium">Booking details sent</AlertTitle>
              <AlertDescription className="text-blue-700">
                We've sent the booking details to your email.
              </AlertDescription>
            </Alert>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleShare}
              >
                <Share2 className="mr-2 h-4 w-4" />
                {copied ? "Copied!" : "Share Booking"}
              </Button>
              
              <Button asChild className="flex-1">
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return Home
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <div className="mt-6 text-center">
          <Link to={`/book/${businessId}`} className="text-primary hover:text-primary/80 text-sm font-medium">
            Book another appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
