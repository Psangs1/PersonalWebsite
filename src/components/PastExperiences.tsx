import { useState } from 'react';
import { experiencedata } from '../data/experiencedata';
import PastExperienceCard from './PastExperienceCard'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';



function PastExperiences() {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <>
      <div className='mt-20 min-h-screen' id='experiences-container'>
        <div className='text-[48px] font-bold text-left'>
            <h1>Past Experiences</h1>
        </div>

        <div className='flex flex-row gap-10 mt-10'>
            {experiencedata.map(experience => <PastExperienceCard 
                id={experience.id}
                name={experience.name}
                company={experience.company}
                description={experience.description}
                image={experience.image}
            />
            )}
        </div>
        
    </div>
        
      </>
    )
  }
  
  export default PastExperiences