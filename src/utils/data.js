import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { FaCss3, FaJava, FaUniversity } from "react-icons/fa";
// react-icons
import { FaSchool } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress, SiSpringboot, SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

// import { FaGithub,FaReact, FaNode, FaHtml5, RiTailwindCssFill,SiMongodb,AiOutlineConsoleSql,FaPython,TbBrandCpp,SiExpress,SiTensorflow,PiHeadCircuit } from 'react-icons/bi';
export const Education = [
  {
    name: "B.Tech",
    School: "Netaji Subhas University of Technology",
    cgpa: 8.24,
    icon: FaUniversity,
    bg: "#286F6C",
  },
  {
    name: "Class 12",
    School: "GRM School",
    cgpa: "91.4%",
    icon: FaSchool,
    bg: "#36527D",
  },
  {
    name: "Class 10",
    School: "GRM School",
    cgpa: "97.4%",
    icon: FaSchool,
    bg: "#A61D60",
  },
];
// utils/data.js

export const skills = [
  {
    name: "Java",
    icon: FaJava, // Example of linking to an icon component
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "HTML",
    icon: FaHtml5,
  },
  {
    name: "CSS",
    icon: FaCss3,
  },
  {
    name: "SQL",
    icon: AiOutlineConsoleSql,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  
  // Add more skills as needed
];

export const Whoami = [
  "Hi, I am Tanisha Gupta, a final-year Computer Science and Engineering student at NSUT, Delhi. With a strong foundation in Java, Spring Boot, MySQL, and frontend technologies like HTML, CSS, and React, I’m a passionate full-stack web developer focused on building impactful and scalable applications  with strong problem-solving skills. I’ve developed multiple end-to-end projects many of which combine robust backend architectures with interactive frontend experiences. Beyond academics, I’ve actively embraced leadership roles and co-curricular involvement.",
];

export const workExp = [
  
  {
    place: "EngineBogie",
    tenure: "May 2025 - July 2025",
    role: "Software Engineering Intern",
    detail:
      "Architected robust backend APIs in Spring Boot for scheduling automation, embedding business logic enforcement and real-time email notification workflows.",
  },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
