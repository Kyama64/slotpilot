
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
          <nav className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Customers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/marketplace" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Marketplace</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Browse services from our providers</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/customer/login" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Customer Login</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Access your bookings and appointments</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Providers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/features" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Features</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">See what SnapSchedule offers for your business</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/pricing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Pricing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Choose the right plan for your business</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/provider/login" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Provider Login</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Access your business dashboard</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/signup" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Sign Up</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Create your business account</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild variant="outline">
              <Link to="/customer/login">Customer Login</Link>
            </Button>
            
            <Button asChild>
              <Link to="/provider/login">Provider Login</Link>
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
                  
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg mb-3">For Customers</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          to="/marketplace" 
                          className="block py-2 text-gray-700 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Marketplace
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/customer/login" 
                          className="block py-2 text-gray-700 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Customer Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border-b pb-4">
                    <h3 className="font-bold text-lg mb-3">For Providers</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link 
                          to="/features" 
                          className="block py-2 text-gray-700 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/pricing" 
                          className="block py-2 text-gray-700 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/provider/login" 
                          className="block py-2 text-gray-700 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Provider Login
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to="/signup" 
                          className="block py-2 text-gray-700 hover:text-primary"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full"
                    >
                      <Link
                        to="/customer/login"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Customer Login
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full"
                    >
                      <Link
                        to="/provider/login"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Provider Login
                      </Link>
                    </Button>
                  </div>
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
