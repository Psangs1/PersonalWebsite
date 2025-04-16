import { Connect } from "../data/connectdata"



const ConnectCard: React.FC<Connect> = ({platform, icon, url}) => {

    return (
      <>
      <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block">
            <div className="shadow-2xl rounded-2xl hover:scale-105 transition-transform">
                <div className="text-start p-4 font-bold font-secondary">
                    <h1>{platform}</h1>
                </div>

                <div className="flex justify-center">
                    <img src={icon}/>
                </div>

            </div>
        </a>
       
        
      </>
    )
  }
  
  export default ConnectCard