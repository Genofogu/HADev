import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="text-primary-500" size={24} />
            <span className="text-xl font-bold text-white">SolarTherm AI</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-4">Clean-tech innovation for a sustainable future.</p>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="hover:text-primary-400 transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-sm text-center">
           &copy; {new Date().getFullYear()} SolarTherm AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;