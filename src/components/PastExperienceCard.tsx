import { Experience } from "../data/experiencedata"



const PastExperienceCard: React.FC<Experience> = ({id, name, company, description, image}) => {

    return (
      <>
        <div className="flex flex-row rounded-4xl shadow-2xl p-4 hover:scale-105 transition-transform">
            <div className="flex flex-col">
                <div className="flex-1/2 h-fit">
                    <img src={image} width={400} height={400}/>
                </div>
                <div className="items-start text-start font-primary">
                    <h1 className="font-bold text-xl">{name}</h1>
                    <h1 className="font-style: italic font-extralight text-[12px]">{company}</h1>
                </div>
                <div className="align-bottom">
                    <h1>{description}</h1>
                </div>
            </div>
        </div>
        
        
      </>
    )
  }
  
  export default PastExperienceCard