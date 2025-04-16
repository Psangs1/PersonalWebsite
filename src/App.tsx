import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import './App.css'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectShowcase from './components/ProjectShowcase'
import SkillsShowcase from './components/SkillsShowcase';
import PastExperiences from './components/PastExperiences';
import Connect from './components/Connect';
import Footer from './components/Footer'

function App() {

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);
  
  return (
    <>
      <Navbar />
      <Hero />
      {(
        <motion.div
        id="project-showcase"
        initial={{ opacity: 0, y: 20 }}
        animate={hasScrolled ? { opacity: 1, y: 0 } : { opacity: 0 }} 
        transition={{ duration: 1.8 }}
      >
        <ProjectShowcase />
      </motion.div>
      )}

      <SkillsShowcase />   
      <PastExperiences />
      <Connect />
      <Footer />
      
    </>
  )
}

export default App
