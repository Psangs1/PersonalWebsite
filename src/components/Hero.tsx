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
        <div className='min-h-screen sm:items-center' id='hero'>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-6">
            <div className="md:basis-2/3 w-full flex flex-col font-primary items-center md:items-start text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold leading-tight">
                    Hello! I'm Parth Sangani.
                </h1>
                <h5 className="py-6 md:py-15 font-extralight text-base sm:text-lg md:text-[16px]">
                    I’m a current Junior at the University of Maryland, studying computer science and mathematics. 
                    I’ve interned across healthcare, government, and research sectors, where I’ve developed full-stack web applications, machine learning models, and cloud-based systems. 
                    Whether it’s optimizing food redistribution in Austin or matching nurses with top facilities in D.C., I bring strong engineering skills and a problem-solving mindset to every project.
                </h5>
                <HashLink smooth to="/#project-showcase">
                    <button className="mt-4 text-white bg-black py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl md:text-sm rounded-2xl hover:bg-gray-800 transition delay-50 duration-300 ease-in-out">
                        See My Portfolio
                    </button>
                </HashLink>
            </div>

            <div className="md:basis-1/3 flex justify-center">
                <img className="m-10 border-4 border-black rounded-full w-48 sm:w-60 md:w-72" src={headshot} alt='headshot' />
            </div>
        </div>

        <div className='mt-20 mb-10'>
                <div className='flex flex-wrap justify-center md:gap-24 gap-5 sm:p-4 px-2 font-icons font-bold text-lg sm:text-xl md:w-full'>
                    
                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                        <h1>React</h1>
                        <img src={reactIcon} width={64} height={64} />
                    </div>

                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                        <h1>TypeScript</h1>
                        <img src={typescriptIcon} width={64} height={64} />
                    </div>

                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                        <h1>NodeJS</h1>
                        <img src={nodeJSIcon} width={64} height={64} />
                    </div>

                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                        <h1 className="text-center">Amazon Web Services</h1>
                        <img className="mt-3" src={awsIcon} width={64} height={64} />
                    </div>

                    <div className='flex flex-col items-center text-center bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4'>
                        <h1>Express</h1>
                        <img src={expressIcon} width={64} height={64} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Hero;