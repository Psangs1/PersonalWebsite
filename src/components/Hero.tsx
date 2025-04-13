import headshot from '../assets/professional-headshot.jpeg'
        
const Hero = () => {
    return (
        <>
        <div className="flex flex-row justify-start">
            <div className="basis-2/3 flex flex-col font-inter items-start text-left"> 
                <h1 className="text-[64px] font-bold">Hello! I'm Parth Sangani.</h1>
                <h5 className="py-15 font-extralight"> I’m a current Junior at the University of Maryland, studying computer science and mathematics. 
                    I’ve interned across healthcare, government, and research sectors, where I’ve developed full-stack web applications, machine learning models, and cloud-based systems. 
                    Whether it’s optimizing food redistribution in Austin or matching nurses with top facilities in D.C., I bring strong engineering skills and a problem-solving mindset to every project.</h5>
                <button 
                className="text-white bg-black py-4 px-8 text-24px rounded-2xl hover:bg-gray-800 transition delay-50 duration-300 ease-in-out" 
                onClick={() => alert('Simple Button pressed')}>See My Portfolio</button>
            </div>
            <div className="basis-1/3">
                <img className="m-10 border-4 border-black rounded-full"src={headshot} alt='headshot' />
            </div>
        </div>
        </>
    )
};

export default Hero;