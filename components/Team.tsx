import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const members = [
    {
      name: "Alex Rivera",
      role: "Co-Founder & CEO",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "CTO & AI Lead",
      img: "https://images.unsplash.com/photo-1573496359-1506d69fb58f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Marcus Johnson",
      role: "Hardware Engineer",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Meet the Innovators</h2>
          <p className="text-slate-600 mt-2">A student-led team passionate about clean mobility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl">
              <img 
                src={member.img} 
                alt={member.name}
                className="w-full h-96 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-4">{member.role}</p>
                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;