import linkedinIcon from "../assets/icons/linkedin.svg"
import githubIcon from "../assets/icons/github.svg"
import resumeIcon from "../assets/icons/resume.svg"

export interface Connect {
    id: number;
    platform: string;
    icon: string;
    url: string;
}

export const connectdata = [
{
    id: 0,
    platform: "Linkedin",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/psangani1"
},
{
    id: 1,
    platform: "Github",
    icon: githubIcon,
    url: "https://www.github.com/Psangs1"
},
{
    id: 2,
    platform: "Resume",
    icon: resumeIcon,
    url: "https://drive.google.com/file/d/11CXuWiEBATCuyI3-4evjai7fjl2lLnDi/view?usp=sharing"
}

]