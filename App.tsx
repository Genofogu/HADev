import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import TechStack from './components/TechStack';
import Impact from './components/Impact';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <TechStack />
      <Impact />
      <Team />
      <Contact />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;