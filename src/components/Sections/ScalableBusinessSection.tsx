
import { Button } from "@/components/ui/button";

const ScalableBusinessSection = () => {
  const features = [
    {
      title: "Grow with our platform",
      description: "Scale your business with powerful tools designed for startups."
    },
    {
      title: "Designed with you in mind",
      description: "Intuitive interface that makes growth simple and achievable."
    },
    {
      title: "Accelerate your team's growth",
      description: "Empower your team with collaborative features built for success."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-purple-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scalable Business<br /> for Startups.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Button variant="link" className="p-0 text-purple hover:text-purple-dark">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalableBusinessSection;
