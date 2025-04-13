import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import './App.css'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProjectShowcase from './components/ProjectShowcase'

function App() {

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
      window.removeEventListener('scroll', handleScroll); // remove listener after first scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // cleanup
  }, []);
  
  return (
    <>
     <Navbar />
     <Hero />
     {hasScrolled && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.8 }}
      >
        <ProjectShowcase />
      </motion.div>
    )}
      
    </>
  )
}

export default App
