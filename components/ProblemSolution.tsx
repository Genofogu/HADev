import React from 'react';
import { AlertTriangle, ThermometerSun, ZapOff, CheckCircle2, ShieldCheck, Leaf, Gauge } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <div className="bg-white py-20 overflow-hidden" id="about">
      {/* About Section Intro */}
      <div className="container mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pioneering Sustainable Mobility</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          At SolarTherm AI, our mission is to accelerate the transition to electric mobility by solving one of its biggest challenges: <span className="text-primary-600 font-semibold">Thermal Efficiency</span>. We bridge the gap between advanced AI, IoT hardware, and renewable energy.
        </p>
      </div>

      {/* The Problem */}
      <section className="bg-slate-50 py-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <h3 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">The Challenge</h3>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Heat is the Enemy of Efficiency</h2>
               <p className="text-slate-600 mb-8 text-lg">
                 Electric vehicles lose significant range and battery lifespan due to inefficient thermal management. Traditional cooling systems drain power and struggle in extreme climates.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start space-x-4">
                   <div className="bg-red-100 p-3 rounded-lg text-red-600 flex-shrink-0">
                     <ThermometerSun size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">Overheating & Degradation</h4>
                     <p className="text-slate-600 mt-1">Excessive heat accelerates battery chemical breakdown, reducing vehicle lifespan.</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="bg-orange-100 p-3 rounded-lg text-orange-600 flex-shrink-0">
                     <ZapOff size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">Energy Drain</h4>
                     <p className="text-slate-600 mt-1">Traditional AC and liquid cooling can consume up to 20% of the battery's charge.</p>
                   </div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600 flex-shrink-0">
                     <AlertTriangle size={24} />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-slate-800">Safety Risks</h4>
                     <p className="text-slate-600 mt-1">Thermal runaway events pose significant safety hazards to passengers.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full"></div>
               <img 
                 src="https://images.unsplash.com/photo-1620288627223-53302f4e8c3a?q=80&w=1964&auto=format&fit=crop"
                 alt="Overheating Engine Conceptual" 
                 className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-slate-200"
               />
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-white" id="solution">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Our Innovation</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Intelligent Thermal Mastery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gauge size={32} />,
                title: "AI Monitoring",
                desc: "Predictive algorithms analyze heat patterns to cool components before they overheat."
              },
              {
                icon: <Leaf size={32} />,
                title: "Smart Airflow",
                desc: "Active vents and aerodynamic channels optimized in real-time for maximum passive cooling."
              },
              {
                icon: <ThermometerSun size={32} />,
                title: "Solar Integration",
                desc: "Roof-mounted solar arrays power the cooling fans, preserving the main battery for driving."
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Battery Health",
                desc: "Extends battery cycle life by maintaining the optimal operating temperature window."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemSolution;