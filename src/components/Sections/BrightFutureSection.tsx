
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BrightFutureSection = () => {
  const features = [
    {
      title: "Enhance Your Team's Productivity",
      description: "Improve communication and streamline your workflow with our integrated tools.",
      buttonText: "Read More"
    },
    {
      title: "Maximize Return on Investment",
      description: "Get more value with less time and resources through our optimized solutions.",
      buttonText: "Read More"
    },
    {
      title: "Improve Customer Experience",
      description: "Deliver exceptional experiences at every step of the customer journey.",
      buttonText: "Read More"
    },
    {
      title: "Stay Ahead of the Competition",
      description: "Implement cutting-edge solutions to maintain your competitive advantage.",
      buttonText: "Read More"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Together, we are<br /> creating a <span className="text-purple">Bright Future.</span>
          </h2>
          <p className="text-gray-600 font-medium">JOIN US</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <Button variant="secondary" size="sm" className="bg-purple-light/10 text-purple hover:bg-purple-light/20">
                  {feature.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrightFutureSection;
