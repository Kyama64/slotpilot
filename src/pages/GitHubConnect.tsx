
import { useState } from "react";
import { Link } from "react-router-dom";
import { getGitHubAuthUrl } from "@/services/github";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";

const GitHubConnect = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleConnect = () => {
    setIsLoading(true);
    window.location.href = getGitHubAuthUrl();
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <Header />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-none shadow-xl bg-white/90 backdrop-blur-sm">
          <div className="p-8 space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold">Connect to GitHub</h1>
              <p className="text-gray-600">
                Connect your GitHub account to synchronize your projects and manage repositories directly from SnapSchedule.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h3 className="text-sm font-medium text-gray-700 mb-2">What you'll get:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Repository synchronization
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Issue tracking integration
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Project management tools
                </li>
              </ul>
            </div>
            
            <Button 
              onClick={handleConnect} 
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              {isLoading ? 'Connecting...' : 'Connect with GitHub'}
            </Button>
            
            <Separator />
            
            <div className="text-sm text-gray-500">
              <p>
                By connecting, you authorize SnapSchedule to access your GitHub repositories and related data according to the permissions you grant.
              </p>
            </div>
          </div>
          
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <Button variant="outline" asChild size="sm">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            
            <Link to="/help/github-integration" className="text-sm text-primary hover:underline">
              Learn more
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GitHubConnect;
