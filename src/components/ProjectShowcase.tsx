import { useState } from 'react';
import { projectdata } from '../data/projectdata.ts';

import ProjectCard from './ProjectCard';


function ProjectShowcase() {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <>
        <div className='font-bold text-[64px] font-inter'>
            <h1>Project Showcase</h1>
        </div>
        <div className='flex flex-row'>
            <button className='hover:bg-gray-50 text-5xl px-4 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110' 
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectdata.length - 1))}>
            ◀
            </button>
            <div className='bg-gray-100 p-8 rounded-2xl font-inter w-full max-w-[1000px] h-[550px] mx-auto overflow-hidden'>
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
            </div>
            <button className='hover:bg-gray-50 text-5xl px-4 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110'
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex < projectdata.length - 1 ? prevIndex + 1 : 0))}>
            ▶
            </button>
        </div>
      </>
    )
  }
  
  export default ProjectShowcase