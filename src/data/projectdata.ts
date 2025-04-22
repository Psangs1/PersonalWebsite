export interface Project {
    id: number;
    name: string;
    skills: string;
    dates: string;
    image: string;
    description: string;
    codelink: string; 
    websitelink: string;
  }
  
  import mkitchenImg from '../assets/mkitchen.png';
  import networkgreenImg from '../assets/networkgreen.png';
  import stockbotImg from '../assets/stockbot.png';
  import collegeconnectImg from '../assets/collegeconnect.png';
  import personalwebsiteImg from '../assets/personalwebsite.png';
  
  export const projectdata: Project[] = [
    {
      id: 0,
      name: "M's Kitchen",
      skills: "NodeJS, Express, AWS DynamoDB, HTML/CSS, JavaScript, RestfulAPI, Database Design",
      dates: "June 2023 - Present",
      image: mkitchenImg,
      description: "Created a full-stack website for a local catering business, serving 100+ families. Designed dynamic menu and order pages, built REST APIs, and integrated DynamoDB to manage 1000+ orders efficiently.",
      codelink: "https://github.com/Psangs1/MomsWebsite",
      websitelink: "https://momswebsite.onrender.com/"
    },
    {
      id: 1,
      name: "Network Green",
      skills: "SQL, JavaScript, HTML/CSS, Google Maps API, Figma",
      dates: "May 2023 - Augest 2023",
      image: networkgreenImg,
      description: "Created a nonprofit website that connects restaurants and food shelters together, targeting the food waste crisis in the Austin area. Developed SQL queries and managed over 5 resturants data for the site.",
      codelink: "https://github.com/Network-Green/Network-Green",
      websitelink: "https://networkgreen.org/"
    },
    {
      id: 2,
      name: "Discord StockBot",
      skills: "Python, OpenAI, Heroku, Git, Discord API",
      dates: "August 2023 - May 2024",
      image: stockbotImg,
      description: "Built a chatbot for Discord that delivers real-time stock prices, news, and updates using Finnhub API. Integrated ChatGPT for smart query responses. Deployed on Heroku and added to 20+ servers to assist online investment communities.",
      codelink: "https://github.com/Psangs1/stockbot",
      websitelink: "https://github.com/Psangs1/stockbot"
    },
    {
      id: 3,
      name: "CollegeConnect",
      skills: "Python, Pandas, OpenAI, LLM Fine-tuning, ReactJS, TypeScript",
      dates: "July 2024 - Present",
      image: collegeconnectImg,
      description: "Trained a fine-tuned ChatGPT model on over 1M tokens. Built a responsive React frontend, Flask backend, and MongoDB database to store user data and resumes.",
      codelink: "https://github.com/Psangs1/CollegeConnect",
      websitelink: "https://github.com/Psangs1/CollegeConnect"
    },
    {
      id: 4,
      name: "Personal Website",
      skills: "TypeScript, TailwindCSS, React, JSON, Figma Design",
      dates: "January 2025 - Present",
      image: personalwebsiteImg,
      description: "This website!",
      codelink: "https://github.com/Psangs1/PersonalWebsite",
      websitelink: "https://parth-sangani.vercel.app/"
    }
  ];
  