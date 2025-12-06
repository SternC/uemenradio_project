import React from 'react';

function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Richard Stern Chandra",
      role: "Founder & Music Director",
      image: "/images/Stern.jpg",
      quote: "Ashiap Santuy"
    },
    {
      id: 2,
      name: "Wiliam Asabha Purnamadjaja",
      role: "Head of Operations", 
      image: "/images/Willy.jpg",
      quote: "Easy tides, easy mind."
    }
  ];

  return (
    <section id="team-about" className="scroll-mt-24 py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        MEET THE MINDS BEHIND THE MUSIC
      </h2>

      <div className="space-y-16 md:space-y-20">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}
          >
            <div className="md:w-2/5 relative">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full max-w-[320px] md:max-w-[380px] mx-auto rounded-2xl shadow-xl object-cover aspect-square relative z-10"
                />
                
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-orange-500 rounded-full opacity-20 z-0"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-500 rounded-full opacity-20 z-0"></div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="inline-block bg-linear-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                    {member.role}
                  </div>
                </div>

                <div className="relative">
                  <div className="text-4xl text-gray-300 absolute -top-6 -left-2">❝</div>
                  <blockquote className="text-lg md:text-xl italic text-gray-700 pl-8 pr-4 py-4 border-l-3 border-orange-500 bg-gray-50 rounded-r-lg">
                    "{member.quote}"
                  </blockquote>
                  <div className="text-4xl text-gray-300 absolute -bottom-6 -right-2">❞</div>
                </div>

                <div className="pt-4">
                  <div className="h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            </div>
            <div className={`absolute -z-10 w-48 h-48 rounded-full opacity-5 ${index % 2 === 0 ? 'bg-orange-500 -right-4 -top-4' : 'bg-purple-500 -left-4 -top-4'}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;