
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const Signup = () => {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const { signUp, isLoading } = useAuth();

  useEffect(() => {
    // Extract referral code from URL if present
    const params = new URLSearchParams(location.search);
    const ref = params.get("ref");
    if (ref) {
      setReferralCode(ref);
      toast({
        title: "Referral code applied",
        description: `You're signing up with a referral code: ${ref}`,
      });
    }
  }, [location.search, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!businessName || !email || !password || !phone) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 8) {
      toast({
        title: "Invalid password",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }
    
    if (!termsAccepted) {
      toast({
        title: "Terms not accepted",
        description: "You must accept the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    // Use the signUp function from auth context
    await signUp(email, password, businessName, phone);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <Link to="/" className="flex items-center space-x-2 mb-8">
        <Calendar className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">SnapSchedule</span>
      </Link>
      
      <Card className="w-full max-w-md shadow-lg glass-card animate-fade-in">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to get started with SnapSchedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  placeholder="Your Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              
              {!referralCode && (
                <div className="space-y-2">
                  <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                  <Input
                    id="referralCode"
                    placeholder="Enter referral code"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                  />
                </div>
              )}
              
              {referralCode && (
                <div className="p-3 bg-primary/10 rounded-md border border-primary/20 text-sm">
                  <p className="font-medium">Referral code applied: {referralCode}</p>
                  <p className="text-muted-foreground text-xs mt-1">You'll both receive rewards when you subscribe to a paid plan</p>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      required
                    />
                  </div>
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="flex items-center">
              <div className="flex-grow h-0.5 bg-gray-200"></div>
              <span className="px-3 text-sm text-gray-500">Or continue with</span>
              <div className="flex-grow h-0.5 bg-gray-200"></div>
            </div>
            
            <div className="mt-4 grid grid-cols-1 gap-3">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                    fill="currentColor"
                  />
                </svg>
                Sign up with Google
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <span className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </span>
        </CardFooter>
      </Card>

      <div className="mt-8 max-w-md text-center">
        <h3 className="text-lg font-medium mb-3">What you'll get:</h3>
        <ul className="space-y-3">
          <li className="flex items-center text-sm text-gray-600">
            <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
            <span>Custom booking page for your clients</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
            <span>Simple dashboard to manage appointments</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
            <span>Email notifications for you and your clients</span>
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="h-4 w-4 text-success mr-2 flex-shrink-0" />
            <span>No credit card required for free plan</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Signup;
