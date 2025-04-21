import { experiencedata } from '../data/experiencedata';
import PastExperienceCard from './PastExperienceCard'



function PastExperiences() {

    return (
      <>
      <div className='mt-20 min-h-screen' id='experiences-container'>
        <div className='text-[48px] text-center font-bold md:text-left font-secondary'>
            <h1>Past Experiences</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-25 md:gap-10 mt-10 font-secondary text-[14px] md:gap-y-0.5'>
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