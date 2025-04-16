import austinImage from "../assets/images/austin.jpeg"
import keckImage from "../assets/images/keck.jpg"

import agorasImage from "../assets/images/agorashealth.jpeg"


export interface Experience {
    id: number;
    company: string;
    name: string;
    description: string;
    image: string;
}

export const experiencedata = [
{
    id: 0,
    company: "Agoras Health",
    name: "Data Science Intern",
    description: "Created data pipelines and dashboards to help nurses find top-rated facilities using Medicare data. Built machine learning models that matched nurses with jobs, leading to 20+ successful placements. Designed a SQL-based database to streamline access to key healthcare metrics.",
    image: agorasImage

},
{
    id: 1,
    name: "Machine Learning Assistant",
    company: "Keck Graduate Institute",
    description: "Used machine learning to match drugs to patient symptoms for personalized medicine. Analyzed over 50,000 data points with TensorFlow and regression techniques. Helped improve accuracy in drug recommendations based on patient profiles.",
    image: keckImage

},
{
    id: 2,
    name: "Software Engineering Intern",
    company: "City of Austin",
    description: "Built a web app connecting restaurants with food shelters to reduce waste. Designed a backend system and integrated real-time location tracking with Google Maps API. Platform supported 5+ restaurants and led to a 30% growth in participation.",
    image: austinImage

}
]