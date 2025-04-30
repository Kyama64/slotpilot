
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { exchangeCodeForToken, storeGitHubToken } from "@/services/github";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarClock } from "lucide-react";
import { toast } from "sonner";

const GitHubCallback = () => {
  const [progress, setProgress] = useState(10);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Parse query parameters
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get("code");
        const state = queryParams.get("state");
        
        if (!code) {
          throw new Error("No code parameter found in callback URL");
        }

        // Simulate progress
        setProgress(30);
        
        // Exchange code for token
        const token = await exchangeCodeForToken(code);
        
        setProgress(70);
        
        // Store token
        storeGitHubToken(token);
        
        setProgress(100);
        
        // Show success toast
        toast.success("Successfully connected to GitHub!");
        
        // Redirect to GitHub dashboard page
        setTimeout(() => {
          navigate("/github/dashboard");
        }, 800);
      } catch (error) {
        console.error("GitHub authentication error:", error);
        toast.error("Failed to connect to GitHub. Please try again.");
        
        // Redirect to GitHub connection page after error
        setTimeout(() => {
          navigate("/github/connect");
        }, 1500);
      }
    };

    handleOAuthCallback();
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-4">
      <Card className="relative overflow-hidden w-full max-w-md border-none shadow-xl bg-white/90 backdrop-blur-sm">
        <div className="absolute top-0 left-0 right-0">
          <Progress value={progress} className="h-1 rounded-none bg-gray-100" />
        </div>
        
        <div className="p-8 text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <CalendarClock className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SnapSchedule</span>
          </div>
          
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">Connecting to GitHub</h2>
            <p className="text-gray-600 max-w-xs mx-auto">
              Please wait while we establish a connection with your GitHub account...
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GitHubCallback;
