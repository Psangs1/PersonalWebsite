import { useState } from 'react';
import { projectdata } from '../data/projectdata.ts';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectCard from './ProjectCard';


function ProjectShowcase() {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <>
        <section id='project-showcase' className='min-h-screen rounded-4xl w-full bg-white shadow-2xl p-10'>
        <div className='font-bold text-[64px] font-primary'>
            <h1>Project Showcase</h1>
        </div>
        <div className='flex flex-row'>
            <button className='hover:bg-card text-5xl px-4 transition duration-150 ease-in-out' 
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectdata.length - 1))}>
            ◀
            </button>
          <div className='p-8 rounded-2xl font-primary w-full max-w-[1000px] h-[550px] mx-auto overflow-hidden'>
              <AnimatePresence mode="wait">
              <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
              >
              <ProjectCard 
                  id = {currentIndex}
                  name = {projectdata[currentIndex].name}
                  skills = {projectdata[currentIndex].skills}
                  dates= {projectdata[currentIndex].dates}
                  image = {projectdata[currentIndex].image}
                  description = {projectdata[currentIndex].description}
                  codelink = {projectdata[currentIndex].codelink}
                  websitelink = {projectdata[currentIndex].websitelink}
              />
              </motion.div>
              </AnimatePresence>
          </div>
            <button className='hover:bg-card text-5xl px-4 transition duration-200 ease-in-out'
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex < projectdata.length - 1 ? prevIndex + 1 : 0))}>
            ▶
            </button>
        </div>
        </section>
      </>
    )
  }
  
  export default ProjectShowcase