import homegrown from "../../assets/images/homegrown.png";
import canele from "../../assets/images/canele.png";
import projectmatch from "../../assets/images/projectmatch.png";
import weatherwidget from "../../assets/images/weatherwidget.png";
import next from '../../assets/tech-icons/next.png'
import react from '../../assets/tech-icons/react.png'
import js from '../../assets/tech-icons/js.png'
import css from '../../assets/tech-icons/css.png'
import typescript from '../../assets/tech-icons/typescript.png'
import sql from '../../assets/tech-icons/sql.png'
import firebase from '../../assets/tech-icons/firebase.png'
import photoshop from '../../assets/tech-icons/photoshop.png'
import figma from '../../assets/tech-icons/figma.png'
import node from '../../assets/tech-icons/node.png'
export const portfolioData = [
  {
    img: homegrown ,
    title: "Home-Grown",
    desc: "As our final project in the School of Code bootcamp, we tackled societal issues with a new tech stack (Next.js and Firebase). Our team developed an app to empower positive action on climate change, cost of living, and lack of community. Our app offers guidance and resources for a sustainable, self-sufficient, and community-oriented future. Please follow the links below to explore the live site and codebase.",
    url: "https://home-grown-front-stretch.vercel.app/",
    repo: "https://github.com/edmundsamina/home-grown-front-stretch.git",
  },
  {
    img: canele,
    title: "Canele Bakery",
    desc: "I worked on this small side project with a partner for one week. Our goals were to review the use of useContext, React Router, caching, and persisting state while learning about MongoDB. Our MVP functions well and incorporates delightful user experiences like a loader when filtering bakery items. Please follow the links below to explore the live site and codebase.",
    url: "https://canele-bakery.netlify.app/",
    repo: "https://github.com/edmundsamina/CANELE-BAKERY.git",
  },
  {
    img:  weatherwidget ,
    title: "Weather Widget",
    desc: "During a School of Code Friday hackathon, I paired with a colleague to develop a weather app, which marked my first experience with TypeScript. The project enabled us to explore TypeScript and a 3rd party weather API, solidify our knowledge of fetching data, and improve our conditional rendering skills. Feel free to check out the weather at your location by clicking the link below!",
    url: "https://pastel-weather-widget.netlify.app/",
    repo: "https://github.com/edmundsamina/bc13_w12d5_hackathon_react-typescript-amina-em.git",
  },
  {
    img:  projectmatch ,
    title: "Project Match",
    desc: "In my first group project with the School of Code, we tackled a common problem for coding boot campers new to tech: feeling overwhelmed when working independently. Our solution was a social platform promoting collaboration and connection. I've since revisited the project with a design overhaul and new features, which I will be updating soon, but in the meantime, explore the sprint one MVP at the links below.",
    url: "https://project-match.netlify.app/",
    repo: "https://github.com/edmundsamina/PROJECT-MATCH.git",
  },
];


export const skillsData = [
  {
    icon: react,
    name: 'react'
  },
  {
    icon: node,
    name: 'node js'
  },
  {
    icon: next,
    name: 'next'
  },
  {
    icon: js,
    name: 'javascript'
  },
  {
    icon: typescript,
    name: 'typescript'
  },
  {
    icon: css,
    name: 'css'
  },
  {
    icon: firebase,
    name: 'firebase'
  },
  {
    icon: figma,
    name: 'figma'
  },
  {
    icon: sql,
    name: 'sql'
  },
  {
    icon: photoshop,
    name: 'photoshop'
  },
]