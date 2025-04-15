import { HashLink } from 'react-router-hash-link';

import headshot from '../assets/professional-headshot.jpeg'

import typescriptIcon from '../assets/icons/typescript.svg'
import awsIcon from '../assets/icons/aws.svg'
import expressIcon from '../assets/icons/express.svg'
import nodeJSIcon from '../assets/icons/nodejs.svg'
import reactIcon from '../assets/icons/react.svg'
        
const Hero = () => {
    return (
        <>
        <div className='min-h-screen'>
            <div className="flex flex-row justify-start">
                <div className="basis-2/3 flex flex-col font-primary items-start text-left"> 
                    <h1 className="text-[64px] font-bold">Hello! I'm Parth Sangani.</h1>
                    <h5 className="py-15 font-extralight"> I’m a current Junior at the University of Maryland, studying computer science and mathematics. 
                        I’ve interned across healthcare, government, and research sectors, where I’ve developed full-stack web applications, machine learning models, and cloud-based systems. 
                        Whether it’s optimizing food redistribution in Austin or matching nurses with top facilities in D.C., I bring strong engineering skills and a problem-solving mindset to every project.</h5>
                        <HashLink smooth to="/#project-showcase">
                            <button className="text-white bg-black py-4 px-8 text-24px rounded-2xl hover:bg-gray-800 transition delay-50 duration-300 ease-in-out">
                                See My Portfolio
                            </button>
                        </HashLink>
                </div>
                <div className="basis-1/3">
                    <img className="m-10 border-4 border-black rounded-full"src={headshot} alt='headshot' />
                </div>
            </div>

            <div className='mt-15'>
                <div className='flex gap-20 px-4 flex-row justify-center font-icons font-bold text-[26px]'>
                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                    <h1>React</h1>
                    <img src= {reactIcon} width={64} height={64}></img>
                    </div>

                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                    <h1>TypeScript</h1>
                    <img src= {typescriptIcon} width={64} height={64}></img>
                    </div>
                    
                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                    <h1>NodeJS</h1>
                    <img src= {nodeJSIcon} width={64} height={64}></img>
                    </div>
                    
                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                    <h1>Amazon Web Services</h1>
                    <img className="mt-5" src= {awsIcon} width={64} height={64}></img>
                    </div>
                    
                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                    <h1>Express</h1>
                    <img src= {expressIcon} width={64} height={64}></img>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
};

export default Hero;