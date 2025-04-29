
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SnapSchedule</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/features" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Log in
            </Link>
            <Button asChild>
              <Link to="/signup">Sign up free</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
              Features
            </Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
              Pricing
            </Link>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary">
              Log in
            </Link>
            <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90 text-center">
              Sign up free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
