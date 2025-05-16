
const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "This platform has completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementation.",
      author: "Sarah Johnson",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100"
    },
    {
      content: "The analytics capabilities have given us insights we never had before, allowing us to make data-driven decisions with confidence.",
      author: "Michael Chen",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100"
    },
    {
      content: "Customer support is exceptional. Every question is answered promptly, and they've gone above and beyond to ensure our success.",
      author: "Emily Rodriguez",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Words from Our Satisfied Customers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`p-6 rounded-lg ${index === 1 ? 'bg-purple-light' : 'bg-purple-light/10'}`}>
              <p className={`mb-6 text-lg ${index === 1 ? 'text-white' : 'text-gray-600'}`}>
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <h4 className={`font-medium ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.author}
                  </h4>
                  <p className={`text-sm ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
