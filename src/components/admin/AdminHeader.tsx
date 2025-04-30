
import { Link } from "react-router-dom";
import { CalendarClock, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/admin" className="flex items-center gap-2">
            <CalendarClock className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SnapSchedule Admin</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
            <Bell className="h-[1.2rem] w-[1.2rem]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <Link to="/dashboard">
            <Button variant="outline" size="sm">
              Return to App
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" aria-label="User menu">
            <User className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
