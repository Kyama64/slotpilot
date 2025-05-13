
import { Gift, Award, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

const DashboardReferralSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleCopyReferralLink = () => {
    const url = `${window.location.origin}/signup?ref=SNAP123456`;
    navigator.clipboard.writeText(url);
    toast.success("Referral link copied to clipboard!");
  };
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-primary" />
          Referral Program
        </CardTitle>
        <CardDescription>Earn rewards by inviting others to SnapSchedule</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'justify-between'}`}>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Award className="h-4 w-4 text-primary" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Your Earnings</p>
                <p className="text-lg font-bold">$125</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-full">
                <Share2 className="h-4 w-4 text-primary" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Successful Referrals</p>
                <p className="text-lg font-bold">5</p>
              </div>
            </div>
          </div>
          
          <div className={`flex pt-2 ${isMobile ? 'flex-col space-y-2' : 'justify-between'}`}>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCopyReferralLink}
              className={isMobile ? 'w-full' : ''}
            >
              Copy Referral Link
            </Button>
            <Button 
              size="sm" 
              onClick={() => navigate("/referrals")}
              className={isMobile ? 'w-full' : ''}
            >
              View Full Program
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardReferralSection;
