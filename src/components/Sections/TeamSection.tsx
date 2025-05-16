
const TeamSection = () => {
  const teamMembers = [
    {
      name: "James Rogers",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
    },
    {
      name: "Sarah Mitchell",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400"
    },
    {
      name: "Mike Thompson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
    },
    {
      name: "Alex Walker",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Amazing Team<br /> Behind Our Success
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
