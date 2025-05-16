
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">support@snapschedule.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Office</h3>
                      <p className="text-gray-600">
                        123 Scheduling Street<br />
                        San Francisco, CA 94103<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
                  <dl className="space-y-2">
                    <div className="grid grid-cols-2">
                      <dt className="font-medium text-gray-900">Monday-Friday</dt>
                      <dd className="text-gray-600">9:00 AM - 6:00 PM</dd>
                    </div>
                    <div className="grid grid-cols-2">
                      <dt className="font-medium text-gray-900">Saturday</dt>
                      <dd className="text-gray-600">10:00 AM - 4:00 PM</dd>
                    </div>
                    <div className="grid grid-cols-2">
                      <dt className="font-medium text-gray-900">Sunday</dt>
                      <dd className="text-gray-600">Closed</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
