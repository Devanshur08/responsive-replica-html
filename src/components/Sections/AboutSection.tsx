
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" 
              alt="Team collaborating" 
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="inline-block mb-4">
              <Button className="bg-purple-light/10 hover:bg-purple-light/20 text-purple text-xs rounded-full px-4">
                OUR STORY
              </Button>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              Explore our story, values, and<br /> the mission that inspires 
              <span className="text-purple"> everything we do</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              We started with a simple idea: make technology work better for people. Today, we're a global team of innovators, creators, and problem-solvers dedicated to transforming how businesses operate.
            </p>
            
            <p className="text-gray-600 mb-8">
              Our mission drives us to create solutions that don't just solve today's challenges, but anticipate tomorrow's opportunities. We believe in technology that empowers, simplifies, and brings people together.
            </p>
            
            <Button className="bg-purple-light hover:bg-purple text-white font-medium">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
