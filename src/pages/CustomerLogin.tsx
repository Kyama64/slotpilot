
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCircle, ArrowLeft } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, isLoading } = useAuth();

  useEffect(() => {
    // Extract referral code from URL if present
    const params = new URLSearchParams(location.search);
    const ref = params.get("ref");
    if (ref) {
      setReferralCode(ref);
      // Store referral code in local storage for later use during signup
      localStorage.setItem("referralCode", ref);
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(email, password);
  };

  const handleSignup = () => {
    // If there's a referral code, pass it to the signup page
    if (referralCode) {
      navigate(`/signup?ref=${referralCode}`);
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <UserCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-center">Customer Login</h1>
            <p className="text-gray-600 text-center mt-2">
              Access your account to browse services and manage your bookings
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log in"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={handleSignup}
                className="text-primary hover:underline cursor-pointer"
              >
                Sign up
              </button>
            </p>
            
            {referralCode && (
              <div className="mt-3 p-2 bg-primary/10 rounded-md border border-primary/20 text-sm">
                <p>You have a referral code: <strong>{referralCode}</strong></p>
                <p className="text-xs text-muted-foreground mt-1">
                  Sign up to receive special benefits!
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
