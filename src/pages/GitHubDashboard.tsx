
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  isGitHubAuthenticated,
  fetchGitHubUser,
  fetchUserRepositories,
  clearGitHubToken
} from "@/services/github";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { ArrowLeft, MoreVertical, Plus, RefreshCw } from "lucide-react";
import Header from "@/components/layout/Header";

const GitHubDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [repositories, setRepositories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("repositories");
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is authenticated with GitHub
    if (!isGitHubAuthenticated()) {
      toast.error("You need to connect to GitHub first");
      navigate("/github/connect");
      return;
    }
    
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Load GitHub user and repositories in parallel
        const [userResponse, reposResponse] = await Promise.all([
          fetchGitHubUser(),
          fetchUserRepositories()
        ]);
        
        setUser(userResponse);
        setRepositories(reposResponse);
      } catch (error) {
        console.error("Failed to load GitHub data:", error);
        toast.error("Failed to load GitHub data. Please reconnect your account.");
        
        // Clear GitHub token and redirect to connect page
        clearGitHubToken();
        navigate("/github/connect");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [navigate]);
  
  const handleDisconnect = () => {
    clearGitHubToken();
    toast.success("Successfully disconnected from GitHub");
    navigate("/github/connect");
  };
  
  const handleRefresh = async () => {
    try {
      setIsLoading(true);
      const reposResponse = await fetchUserRepositories();
      setRepositories(reposResponse);
      toast.success("Repositories refreshed");
    } catch (error) {
      console.error("Failed to refresh repositories:", error);
      toast.error("Failed to refresh repositories");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <h1 className="text-2xl font-bold">GitHub Integration</h1>
            </div>
            
            {user && (
              <div className="flex items-center space-x-2">
                <div className="text-sm text-gray-600 hidden md:block">
                  Connected as <span className="font-medium">{user.login}</span>
                </div>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="h-8 w-8 rounded-full border border-gray-200"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleDisconnect}>
                      Disconnect GitHub
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
          
          <Tabs defaultValue="repositories" value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="repositories">Repositories</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="repositories" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">Your Repositories</h2>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={handleRefresh} disabled={isLoading}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/github/new-repo">
                      <Plus className="h-4 w-4 mr-2" />
                      New
                    </Link>
                  </Button>
                </div>
              </div>
              
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="h-40 animate-pulse bg-white/60">
                      <div className="p-6">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <>
                  {repositories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {repositories.map((repo) => (
                        <Card key={repo.id} className="overflow-hidden bg-white/90 hover:shadow-md transition-shadow">
                          <div className="p-6">
                            <h3 className="font-semibold text-lg mb-2 truncate">{repo.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
                              {repo.description || "No description provided"}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center text-xs text-gray-500">
                                  <span className={`inline-block w-3 h-3 rounded-full mr-1 ${repo.language ? "bg-primary" : "bg-gray-300"}`}></span>
                                  {repo.language || "None"}
                                </div>
                                <div className="text-xs text-gray-500 flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                  </svg>
                                  {repo.stargazers_count}
                                </div>
                              </div>
                              <Button size="sm" variant="outline" asChild>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View</a>
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="bg-white/90 p-8 text-center">
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium">No repositories found</h3>
                        <p className="text-gray-600 max-w-sm mx-auto">
                          You don't have any GitHub repositories yet, or we don't have permission to view them.
                        </p>
                        <Button asChild>
                          <Link to="/github/new-repo">
                            <Plus className="h-4 w-4 mr-2" />
                            Create Repository
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  )}
                </>
              )}
            </TabsContent>
            
            <TabsContent value="settings">
              <Card className="bg-white/90">
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">GitHub Connection</h3>
                    <p className="text-gray-600 mb-4">
                      Manage your GitHub integration settings and permissions.
                    </p>
                    
                    {user && (
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <img
                          src={user.avatar_url}
                          alt={user.login}
                          className="h-12 w-12 rounded-full border border-gray-200"
                        />
                        <div>
                          <p className="font-medium">{user.name || user.login}</p>
                          <p className="text-sm text-gray-600">@{user.login}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Connection Status</h3>
                    <div className="flex items-center space-x-2 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Connected and working properly</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Actions</h3>
                    
                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" onClick={handleRefresh}>
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Refresh Connection
                      </Button>
                      
                      <Button variant="outline" onClick={handleDisconnect} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        Disconnect GitHub Account
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default GitHubDashboard;
