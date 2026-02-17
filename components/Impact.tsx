import React from 'react';
import { Globe, Leaf, TrendingUp } from 'lucide-react';

const Impact: React.FC = () => {
  return (
    <section className="py-20 bg-primary-900 text-white" id="impact">
       <div className="container mx-auto px-6 text-center">
          <div className="inline-block p-3 bg-primary-800 rounded-full mb-6">
            <Leaf size={32} className="text-primary-300" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Driving a Greener Planet</h2>
          <p className="max-w-2xl mx-auto text-primary-100 text-lg mb-16">
            Every degree of temperature optimized saves energy. Every saved kilowatt reduces carbon footprint. SolarTherm AI is committed to sustainable innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-6 border border-primary-700 rounded-2xl bg-primary-800/50 backdrop-blur-sm">
               <Globe className="mx-auto mb-4 text-primary-300" size={40} />
               <h3 className="text-4xl font-bold mb-2">20%</h3>
               <p className="text-primary-200">Energy Consumption Reduced</p>
             </div>
             <div className="p-6 border border-primary-700 rounded-2xl bg-primary-800/50 backdrop-blur-sm">
               <Leaf className="mx-auto mb-4 text-primary-300" size={40} />
               <h3 className="text-4xl font-bold mb-2">ZERO</h3>
               <p className="text-primary-200">Carbon Emissions from Cooling</p>
             </div>
             <div className="p-6 border border-primary-700 rounded-2xl bg-primary-800/50 backdrop-blur-sm">
               <TrendingUp className="mx-auto mb-4 text-primary-300" size={40} />
               <h3 className="text-4xl font-bold mb-2">3+ Years</h3>
               <p className="text-primary-200">Extended Vehicle Lifespan</p>
             </div>
          </div>
       </div>
    </section>
  );
};

export default Impact;