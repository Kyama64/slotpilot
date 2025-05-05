
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`bg-white sticky top-0 z-40 transition-shadow duration-200 ${
        isScrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">SnapSchedule</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Log in
            </Link>
            <Button asChild>
              <Link to="/signup">Sign up free</Link>
            </Button>
          </nav>

          {/* Mobile menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 pt-16">
                <div className="flex flex-col space-y-6 py-4">
                  <Link 
                    to="/"
                    className="flex items-center mb-8"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <span className="font-bold text-xl">SnapSchedule</span>
                  </Link>
                  <Link 
                    to="/features" 
                    className="text-xl font-medium border-b border-gray-100 pb-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="text-xl font-medium border-b border-gray-100 pb-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link 
                    to="/login" 
                    className="text-xl font-medium border-b border-gray-100 pb-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Button asChild size="lg" className="mt-4">
                    <Link 
                      to="/signup"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign up free
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
