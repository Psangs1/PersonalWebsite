import { skillsdata } from "../data/skills";
import { useState, useRef, useEffect } from 'react';
import SkillsCard from "./SkillsCard";

const SkillsShowcase = () => {
    const [visibleCards, setVisibleCards] = useState(skillsdata.slice(0, 3));
    const [currentIndex, setCurrentIndex] = useState(0);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const cardsPerPage = 3;
  
    useEffect(() => {
      const handleScroll = () => {
        if (!skillsRef.current) return;
  
        const rect = skillsRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight;
  
        if (isInView && visibleCards.length < skillsdata.length) {
          const nextCards = skillsdata.slice(
            0,
            visibleCards.length + cardsPerPage
          );
          setVisibleCards((prev) => [...prev, ...nextCards]);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      console.log(visibleCards)
      return () => window.removeEventListener('scroll', handleScroll);
    }, [visibleCards]);
  

    return (
        <>
        <section className='min-h-screen' id="skills">
        <div className='font-bold text-[64px] font-primary py-8'>
            <h1>Top Skills Showcased</h1>
        </div>

        <div className="grid grid-rows-3 gap-6 p-8 rounded-2xl" id="skills-container">
            
                {visibleCards.map((skill, index) => (
                    <div className="bg-gray-100 p-5 rounded-4xl hover:scale-105 transition-transform shadow-md">
                <SkillsCard
                    key={index}
                    id={index}
                    name={skill.name}
                    years={skill.years}
                    seenin={skill.seenin}
                />
                </div>
                ))}
            
        </div>
        </section>
        </>
       
    )
};

export default SkillsShowcase;