import React from 'react';

const steps = [
  {
    num: "01",
    title: "Data Collection",
    desc: "IoT sensors continuously monitor battery temperature, ambient heat, and driving load."
  },
  {
    num: "02",
    title: "AI Analysis",
    desc: "Our neural network processes data to predict thermal spikes and optimal cooling strategies."
  },
  {
    num: "03",
    title: "Active Response",
    desc: "Smart vents open, and solar-powered fans activate to dissipate heat efficiently."
  },
  {
    num: "04",
    title: "Real-time Feedback",
    desc: "Drivers receive system status and efficiency gains via our mobile dashboard."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 skew-x-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          <div className="lg:w-1/3">
             <h3 className="text-primary-400 font-bold uppercase tracking-wider text-sm mb-2">Workflow</h3>
             <h2 className="text-4xl font-bold mb-6">How SolarTherm AI Works</h2>
             <p className="text-slate-400 text-lg mb-8">
               A seamless loop of intelligence and action. We turn environmental data into vehicle efficiency.
             </p>
             <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
               <h4 className="font-bold text-white mb-2">Did you know?</h4>
               <p className="text-slate-400 text-sm">
                 Maintaining batteries at 20°C-25°C can extend their lifespan by up to 30%.
               </p>
             </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors">
                <span className="text-5xl font-black text-slate-700 mb-4 block opacity-50">{step.num}</span>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;