import { Skills } from "../data/skills"


const SkillsCard: React.FC<Skills> = ({name, years, seenin, icon}) => {

    return (
      <>
        <div className="justify-center">
            <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:ml-10">
                <div className="flex flex-col justify-center md:flex-row gap-2">
                    <div className="flex justify-center md:p-2">
                        <img src={icon}  width={64} height={64}/> 
                    </div>
                    <div className="flex justify-center md:p-2 mt-8">
                        <h1 className="font-primary font-bold text-3xl text-center md:text-start">{name}</h1>
                    </div>
                </div>
                <h1 className="font-secondary font-extralight text-center md:text-start font-style: italic">{years} Years of Experience</h1>
            </div>
            
            <h1 className="text-center md:text-right font-secondary font-style: italic">Seen in: {seenin}</h1>
        </div>
       
        
      </>
    )
  }
  
  export default SkillsCard