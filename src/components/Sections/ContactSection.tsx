
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have Questions?<br />
              <span className="text-purple">Contact Us</span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              We're here to help with any questions you might have about our products, services, or how we can support your business goals.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input type="text" id="name" placeholder="John Doe" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input type="email" id="email" placeholder="john@example.com" className="w-full" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input type="text" id="subject" placeholder="How can we help?" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message here..." className="w-full" rows={5} />
              </div>
              
              <Button type="submit" className="bg-purple-light hover:bg-purple text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="h-full rounded-lg overflow-hidden">
              <div className="h-full bg-gradient-to-br from-purple-light to-blue-400 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
