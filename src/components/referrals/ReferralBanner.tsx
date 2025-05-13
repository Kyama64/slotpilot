
import { useState } from "react";
import { Gift, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

type ReferralBannerProps = {
  referralCode?: string;
  onDismiss?: () => void;
};

const ReferralBanner = ({ referralCode = "", onDismiss }: ReferralBannerProps) => {
  const [dismissed, setDismissed] = useState(false);
  const isMobile = useIsMobile();

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (onDismiss) onDismiss();
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success("Referral code copied to clipboard!");
  };

  return (
    <div className="bg-primary/10 border-primary/20 border rounded-lg p-4 mb-6 relative">
      <button 
        onClick={handleDismiss}
        className="absolute right-2 top-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-4 w-4" />
      </button>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
          <Gift className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-sm sm:text-base">Refer friends, earn rewards!</h3>
          <p className="text-sm text-muted-foreground">
            Earn $25 for each service provider you refer who subscribes to a paid plan.
          </p>
          {referralCode && (
            <div className="mt-1 text-sm">
              Your code: <span className="font-semibold">{referralCode}</span>
              <button 
                onClick={copyReferralCode} 
                className="ml-2 text-primary hover:text-primary/80 underline text-xs"
              >
                Copy
              </button>
            </div>
          )}
        </div>
        <Button 
          size={isMobile ? "sm" : "default"} 
          className="mt-2 sm:mt-0 w-full sm:w-auto"
          onClick={() => window.location.href = "/referrals"}
        >
          View Referral Program
        </Button>
      </div>
    </div>
  );
};

export default ReferralBanner;
