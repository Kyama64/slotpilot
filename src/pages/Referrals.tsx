
import { useState, useEffect } from "react";
import { Copy, Gift, Share2, User, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ReferralsPage = () => {
  const [referralCode, setReferralCode] = useState("SNAP" + Math.random().toString(36).substring(2, 8).toUpperCase());
  const [referralStats, setReferralStats] = useState({
    totalReferrals: 0,
    pendingReferrals: 0,
    successfulReferrals: 0,
    rewardsEarned: 0,
  });
  const [loading, setLoading] = useState(true);
  const [referralHistory, setReferralHistory] = useState([
    { id: 1, name: "John Smith", date: "2025-05-01", status: "completed", reward: "$25.00" },
    { id: 2, name: "Emma Johnson", date: "2025-05-03", status: "pending", reward: "--" },
    { id: 3, name: "Michael Brown", date: "2025-04-29", status: "completed", reward: "$25.00" },
  ]);

  useEffect(() => {
    // Simulate fetching referral data
    setTimeout(() => {
      setReferralStats({
        totalReferrals: 8,
        pendingReferrals: 3,
        successfulReferrals: 5,
        rewardsEarned: 125,
      });
      setLoading(false);
    }, 1000);
  }, []);

  const copyReferralLink = () => {
    const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard!");
  };

  const shareReferralLink = () => {
    const referralLink = `${window.location.origin}/signup?ref=${referralCode}`;
    if (navigator.share) {
      navigator.share({
        title: "Join SnapSchedule",
        text: "I'm using SnapSchedule to manage my business appointments. Join using my referral link!",
        url: referralLink,
      }).catch((error) => {
        console.log("Error sharing", error);
      });
    } else {
      copyReferralLink();
    }
  };

  const generateNewCode = () => {
    const newCode = "SNAP" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setReferralCode(newCode);
    toast.success("New referral code generated!");
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Referral Program</h1>
      <p className="text-muted-foreground mb-8">
        Earn rewards by inviting other service providers to use SnapSchedule. For each successful referral, you'll receive $25 credit.
      </p>

      <div className="grid gap-6 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Referrals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? "..." : referralStats.totalReferrals}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? "..." : referralStats.pendingReferrals}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Successful</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? "..." : referralStats.successfulReferrals}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Rewards Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${loading ? "..." : referralStats.rewardsEarned}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Your Referral Link</CardTitle>
            <CardDescription>
              Share this link with other service providers to earn rewards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                value={`${window.location.origin}/signup?ref=${referralCode}`} 
                readOnly 
                className="flex-1"
              />
              <Button variant="outline" onClick={copyReferralLink} title="Copy link">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={shareReferralLink} title="Share link">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Your referral code: <span className="font-semibold">{referralCode}</span></p>
              <Button variant="outline" size="sm" onClick={generateNewCode}>
                Generate New Code
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>
              Our referral program makes it easy to earn rewards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Share2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Share Your Link</h3>
                  <p className="text-sm text-muted-foreground">Send your unique referral link to other service providers</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">They Sign Up</h3>
                  <p className="text-sm text-muted-foreground">When they sign up using your link and subscribe to a paid plan</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Gift className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">You Get Rewarded</h3>
                  <p className="text-sm text-muted-foreground">Earn $25 credit for each successful referral</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Referral History</CardTitle>
          <CardDescription>
            Track the status of your referrals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 bg-muted/50 p-4 font-medium">
              <div>Name</div>
              <div>Date</div>
              <div>Status</div>
              <div>Reward</div>
              <div></div>
            </div>
            <div className="divide-y">
              {referralHistory.map((referral) => (
                <div key={referral.id} className="grid grid-cols-5 p-4 items-center">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <span>{referral.name}</span>
                  </div>
                  <div>{referral.date}</div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      referral.status === "completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {referral.status}
                    </span>
                  </div>
                  <div>{referral.reward}</div>
                  <div className="text-right">
                    {referral.status === "pending" && (
                      <Button variant="outline" size="sm">
                        Send Reminder
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Referral FAQ</CardTitle>
          <CardDescription>
            Common questions about our referral program
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">How much can I earn with referrals?</h3>
              <p className="text-sm text-muted-foreground">You earn $25 for each successful referral. There's no limit to how many people you can refer!</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">When do I receive my rewards?</h3>
              <p className="text-sm text-muted-foreground">Rewards are credited to your account after your referred user subscribes to a paid plan and completes their first billing cycle.</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">How can I use my rewards?</h3>
              <p className="text-sm text-muted-foreground">Rewards are automatically applied as credits to your next billing cycle. If your rewards exceed your subscription cost, the remaining balance carries over.</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Can I refer someone who is already using SnapSchedule?</h3>
              <p className="text-sm text-muted-foreground">Referral rewards are only valid for new users who haven't previously created an account with SnapSchedule.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralsPage;
