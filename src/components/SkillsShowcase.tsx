import { skillsdata } from "../data/skills";
import { useState, useRef, useEffect } from 'react';
import SkillsCard from "./SkillsCard";
import { motion, AnimatePresence } from 'framer-motion';

import skillsBackdrop from '../assets/skillsbackdrop.jpg'

const SkillsShowcase = () => {
    const [visibleCards, setVisibleCards] = useState(skillsdata.slice(0, 2));
    const cardsPerPage = 3;
    const skillsRef = useRef<HTMLDivElement | null>(null);

    const loadMoreSkills = () => {
        setVisibleCards(prev => {
            const nextCount = prev.length + cardsPerPage;
            return skillsdata.slice(0, Math.min(nextCount, skillsdata.length));
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const container = skillsRef.current;
            if (!container) return;

            const { bottom } = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (bottom <= windowHeight + 100) {
                loadMoreSkills();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="min-h-screen" id="skills" >
            <div className='text-[48px] font-primary py-8'>
                <h1>Skills</h1>
                <p></p>
            </div>

            <div
                className="grid grid-rows-3 gap-10 p-8 rounded-2xl relative before:absolute bg-[url('../assets/skillsbackdrop.jpg')]"
                ref={skillsRef}
                id="skills-container"
            >
                {visibleCards.map((skill, index) => (
                    <motion.div
                    key={index}
                    className="p-5 rounded-4xl hover:scale-105 transition-transform shadow-md bg-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                        <SkillsCard
                            id={index}
                            name={skill.name}
                            years={skill.years}
                            seenin={skill.seenin}
                            icon={skill.icon}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsShowcase;
