
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import ServiceMarketplace from "./pages/ServiceMarketplace";
import GitHubConnect from "./pages/GitHubConnect";
import GitHubCallback from "./pages/GitHubCallback";
import GitHubDashboard from "./pages/GitHubDashboard";
import Admin from "./pages/Admin";
import CustomerLogin from "./pages/CustomerLogin";
import ProviderLogin from "./pages/ProviderLogin";
import Referrals from "./pages/Referrals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer/login" element={<CustomerLogin />} />
          <Route path="/provider/login" element={<ProviderLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/book/:businessId" element={<Booking />} />
          <Route path="/booking-success/:businessId" element={<BookingSuccess />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/marketplace" element={<ServiceMarketplace />} />
          <Route path="/github/connect" element={<GitHubConnect />} />
          <Route path="/github/callback" element={<GitHubCallback />} />
          <Route path="/github/dashboard" element={<GitHubDashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
