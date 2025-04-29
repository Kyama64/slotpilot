
import { Link } from "react-router-dom";
import { Calendar, AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-4">
      <Card className="relative overflow-hidden w-full max-w-md border-none shadow-xl bg-white/90 backdrop-blur-sm">
        <div className="absolute top-0 left-0 right-0">
          <Progress value={progress} className="h-1 rounded-none bg-gray-100" />
        </div>
        
        <div className="p-8 text-center space-y-6">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SnapSchedule</span>
          </Link>
          
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
            <p className="text-gray-600 max-w-xs mx-auto">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link to="/">
                <ArrowLeft className="mr-2" />
                Return to Home
              </Link>
            </Button>
            
            <div className="flex justify-between text-sm text-muted-foreground">
              <Link to="/marketplace" className="hover:text-primary">Browse Services</Link>
              <Link to="/dashboard" className="hover:text-primary">Go to Dashboard</Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
