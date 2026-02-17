import React from 'react';
import { ArrowRight, Sun, Wind, Battery } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop" 
          alt="Modern Electric Vehicle" 
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500 rounded-full blur-[128px] opacity-30"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-secondary-500 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left mb-12 md:mb-0">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-300 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span>Next-Gen Thermal Management</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Smarter Vehicles. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Longer Life.
              </span> <br/>
              Cleaner Future.
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              SolarTherm AI combines IoT sensors, renewable solar energy, and adaptive AI to revolutionize thermal control in electric vehicles.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#solution" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 transition-all duration-200 bg-primary-500 rounded-full hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-slate-900"
              >
                Explore Innovation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border border-slate-600 rounded-full hover:bg-slate-800 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 focus:ring-offset-slate-900"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative hidden md:block">
            {/* Abstract Tech Visualization */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
               <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
               <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 shadow-2xl">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center text-center">
                     <Sun className="text-yellow-400 w-12 h-12 mb-3" />
                     <h3 className="text-white font-bold">Solar Harvesting</h3>
                     <p className="text-slate-400 text-sm mt-1">Passive Energy Gain</p>
                   </div>
                   <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center text-center">
                     <Wind className="text-secondary-400 w-12 h-12 mb-3" />
                     <h3 className="text-white font-bold">Smart Airflow</h3>
                     <p className="text-slate-400 text-sm mt-1">AI-Driven Cooling</p>
                   </div>
                   <div className="col-span-2 bg-slate-900/80 p-6 rounded-xl border border-slate-700/50 flex items-center justify-between">
                     <div className="flex items-center space-x-4">
                        <Battery className="text-primary-500 w-10 h-10" />
                        <div>
                          <h3 className="text-white font-bold text-lg">Battery Efficiency</h3>
                          <p className="text-slate-400 text-sm">Optimized Health</p>
                        </div>
                     </div>
                     <span className="text-2xl font-bold text-primary-400">+25%</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;