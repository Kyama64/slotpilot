
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="text-center space-y-8 max-w-md">
        <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
          <Calendar className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">SnapSchedule</span>
        </Link>
        
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
        </div>
        
        <Button asChild className="mt-6">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
