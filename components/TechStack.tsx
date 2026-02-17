import React from 'react';
import { Cpu, Sun, Smartphone, Server, Shield } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="technology">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Powered By Advanced Technology</h2>
           <p className="mt-4 text-slate-600">The core components driving our thermal management engine.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
           <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-200">
             <Cpu className="text-primary-600" />
             <span className="font-semibold text-slate-700">IoT Edge Computing</span>
           </div>
           <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-200">
             <Sun className="text-yellow-500" />
             <span className="font-semibold text-slate-700">Photovoltaic Integration</span>
           </div>
           <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-200">
             <Server className="text-blue-500" />
             <span className="font-semibold text-slate-700">TensorFlow / PyTorch</span>
           </div>
           <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-sm border border-slate-200">
             <Smartphone className="text-purple-500" />
             <span className="font-semibold text-slate-700">React Native App</span>
           </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Why It Matters</h3>
             <ul className="space-y-4">
               {[
                 "Increased Battery Life: Up to 15% improvement.",
                 "Improved Safety: Reduced risk of thermal runaway.",
                 "Lower Operational Costs: Less energy wasted on AC.",
                 "Sustainability: Uses clean solar energy for cooling."
               ].map((benefit, i) => (
                 <li key={i} className="flex items-center space-x-3">
                   <div className="bg-green-100 p-1 rounded-full text-green-600">
                     <Shield size={16} />
                   </div>
                   <span className="text-slate-700 font-medium">{benefit}</span>
                 </li>
               ))}
             </ul>
           </div>
           <div className="md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop" 
                  alt="Solar Panels" 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Harnessing the sun to cool the future.</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;