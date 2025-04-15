import { Project } from "../data/projectdata"



const ProjectCard: React.FC<Project> = ({id, name, skills, dates, image, description, codelink, websitelink}) => {

    return (
      <>
        <div className="border-x-gray-400">
          <div className="flex flex-col items-start text-left">
            <h1 className="font-bold text-[18px]">{name}</h1>
            <p className="font-style: italic text-[12px] pb-2">{skills}</p>
            <p className="font-style: italic text-[12px]">{dates}</p>
          </div>
        </div>

        <div className="h-[250px] w-full max-w-[500px] pt-10 mx-auto overflow-hidden flex justify-center items-center rounded-2xl bg-gray-200">
          <img 
            src={image} 
            className="h-full object-cover rounded-2xl"
            alt={`${name} screenshot`}
          />
        </div>
       
        <div className="items-start text-left py-8">
          <h1>{description}</h1>
        </div>
       
       <div className="flex flex-row-reverse items-end justify-items-end gap-8 font-primary">
        <a href={websitelink} target="_blank">
          <button className="w-[150px] h-[50px] text-white bg-black text-sm font-semibold rounded-3xl drop-shadow-xl hover:bg-gray-800 transition delay-50 duration-300 ease-in-out ">
            Visit Website
          </button>
        </a>
        <a href={codelink} target="_blank">
          <button className="w-[150px] h-[50px] text-black bg-white text-sm font-semibold rounded-3xl drop-shadow-xl border border-black hover:bg-gray-200 transition delay-50 duration-300 ease-in-out ">
            Visit Code
          </button>
        </a>
       </div>
       
        
      </>
    )
  }
  
  export default ProjectCard