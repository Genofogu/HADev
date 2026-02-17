import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-slate-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
           <div className="md:w-5/12 bg-slate-900 p-10 text-white flex flex-col justify-between">
             <div>
               <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
               <p className="text-slate-400 mb-8">Interested in our technology? Partner with us to build the future of sustainable transport.</p>
               
               <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                   <div className="bg-slate-800 p-3 rounded-lg">
                     <Mail className="text-primary-400" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-400">Email Us</p>
                     <p className="font-semibold">genofogu@gmail.com</p>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4">
                   <div className="bg-slate-800 p-3 rounded-lg">
                     <MapPin className="text-primary-400" />
                   </div>
                   <div>
                     <p className="text-sm text-slate-400">Location</p>
                     <p className="font-semibold">Innovation Hub, CA</p>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="mt-12">
               <p className="text-sm text-slate-500">© 2024 SolarTherm AI Inc.</p>
             </div>
           </div>
           
           <div className="md:w-7/12 p-10">
             <form onSubmit={handleSubmit} className="space-y-6">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                 <input 
                    type="text" 
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="John Doe"
                 />
               </div>
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                 <input 
                    type="email" 
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="john@example.com"
                 />
               </div>
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                 <textarea 
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your interest..."
                 ></textarea>
               </div>
               <button 
                 type="submit"
                 className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
               >
                 <span>Send Message</span>
                 <Send size={18} />
               </button>
             </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;