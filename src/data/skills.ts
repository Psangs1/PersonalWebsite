import typeScriptIcon from "../assets/icons/typescript.svg"
import htmlIcon from "../assets/icons/html.svg"
import reactIcon from "../assets/icons/react.svg"
import nodejsIcon from "../assets/icons/nodejs.svg"
import awsIcon from "../assets/icons/aws.svg"
import databaseIcon from "../assets/icons/database.svg"
import pythonIcon from "../assets/icons/python.svg"

export interface Skills {
    id: number;
    name: string;
    years: number;
    seenin: string;
    icon: string;
}

export const skillsdata = [
{
    id: 0,
    name: "TypeScript",
    years: 3,
    seenin: "AgorasHealth Intern, M's Kitchen, Personal Website, Network Green",
    icon: typeScriptIcon
},
{
    id: 1,
    name: "HTML/CSS/Javascript",
    years: 5,
    seenin: "AgorasHealth Intern, M's Kitchen, CollegeConnect, Personal Website",
    icon: htmlIcon
},
{
    id: 2,
    name: "Python",
    years: 7,
    seenin: "CollegeConnect, AgorasHealth Intern, City of Austin Intern, M's Kitchen",
    icon: pythonIcon
},
{
    id: 3,
    name: "React",
    years: 4,
    seenin: "AgorasHealth Intern, M's Kitchen, CollegeConnect, Personal Website",
    icon: reactIcon
},
{
    id: 4,
    name: "Machine Learning and Data Analysis",
    years: 2,
    seenin: "AgorasHealth Intern, CollegeConnect, Keck Graduate Institute, University of Maryland Reseracher",
    icon: databaseIcon
},
{
    id: 5,
    name: "NodeJS",
    years: 3,
    seenin: "AgorasHealth Intern, CollegeConnect, M's Kitchen, City of Austin Intern",
    icon: nodejsIcon
},
{
    id: 6,
    name: "Amazon Web Services(DynamoDB, ElasticBeanstalk)",
    years: 2,
    seenin: "M's Kitchen, Network Green, Personal Website",
    icon: awsIcon
}
]