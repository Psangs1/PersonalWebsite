import { Skills } from "../data/skills"
import typeScriptIcon from "../assets/icons/typescript.svg"


const SkillsCard: React.FC<Skills> = ({id, name, years, seenin}) => {

    return (
      <>
        <div className="">
            <div className="flex flex-col justify-start items-start ml-4">
                <h1 className="font-primary font-bold text-3xl text-start">{name}</h1>
                <h1 className="font-secondary font-extralight text-start font-style: italic">{years} Years of Experience</h1>
            </div>
            
            <h1 className=" text-right font-secondary font-style: italic">Seen in: {seenin}</h1>
        </div>
       
        
      </>
    )
  }
  
  export default SkillsCard