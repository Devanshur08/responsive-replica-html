
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Blob decorations */}
      <div className="absolute -top-36 -right-36 w-96 h-96 blob bg-gradient-to-br from-purple-light/40 to-blue-300/40"></div>
      <div className="absolute -bottom-24 right-1/4 w-64 h-64 blob bg-gradient-to-br from-blue-300/30 to-purple-light/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="bg-purple-light/10 text-purple-dark text-xs font-semibold px-3 py-1 rounded-full">
                NEW RELEASE 1.0
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Boost your <br />project's speed<br /> and efficiency.
            </h1>
            
            <p className="text-gray-600 mb-8 text-lg max-w-lg">
              Track, interact, and delight with your customers at every stage of the journey. Streamline your workflow, enhance collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-purple-light hover:bg-purple text-white font-medium px-8 py-6 h-auto">
                Get Started
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-6 h-auto">
                Learn More →
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="w-full h-full flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="blob absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-light opacity-80"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" 
                  alt="People collaborating"
                  className="absolute top-12 left-12 w-3/4 h-3/4 object-cover rounded-lg shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
