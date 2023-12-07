

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";

import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";

import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { VscSymbolClass } from "react-icons/vsc"; //oops
import { HiMiniCpuChip } from "react-icons/hi2"; //os

import { MdDownloading } from "react-icons/md";


//for mini projects
import { FaAmazon } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

export const projectDetails = [
  {
   
    title: "Thread Clone",
    description:
      "Developed a full-stack Thread clone that allows users to create Threads, Communities and more.",
    tags: ["Nextjs", "TailwindCSS", "Shadcn", "TypeScript"],
    via: 'https://threads-app-flame-seven.vercel.app/',
    code: 'https://github.com/janisar007/threads_app',
  },
  {
   
    title: "Real Estate",
    description:
      "Developed a full-stack web app that allows users to buy and sell real estate properties.",
    tags: ["Reactjs", "Nodejs", "Firebase", "MongoDB", "JavaScript"],
    via: 'https://dream-house-y0uy.onrender.com/',
    code: 'https://github.com/janisar007/dream-house',
  },
  {
 
    title: "Youtube Clone",
    description:
      "This is a youtube clone build using YouTube API, that allows user to watch, search videos and comment on it.",
    tags: ["Reactjs", "Redux", "SASS", "Nodejs"],
    via: 'https://me-tube-pro.web.app',
    code: 'https://github.com/janisar007/me-tubee',
  },
  
  {
   
    title: "My Portfolio",
    description:
      "This is my portfolio, that showcase all my projects, skills and experiences",
    tags: ["Reactjs", "TailwindCSS", "Firebase", "JavaScript"],
    via: '/',
    code: 'https://github.com/janisar007/my-portfolio',
  },
];

export const skillTags = [
  {
    field: "Frontend",
    technology: [
      {
        tech: "HTML",
        logo: FaHtml5,
      },

      {
        tech: "CSS",
        logo: FaCss3Alt,
      },

      {
        tech: "JavaScript",
        logo: IoLogoJavascript,
      },

      {
        tech: "TypeScript",
        logo: BiLogoTypescript,
      },

      {
        tech: "React Js",
        logo: RiReactjsLine,
      },

      {
        tech: "Next Js",
        logo: TbBrandNextjs,
      },

      {
        tech: "Tailwind",
        logo: SiTailwindcss,
      },
    ],
  },

  {
    field: "Backend",
    technology: [
      {
        tech: "Node Js",
        logo: IoLogoNodejs,
      },

      {
        tech: "Express Js",
        logo: SiExpress,
      },

      {
        tech: "JavaScipt",
        logo: IoLogoJavascript,
      },

      {
        tech: "Firebase",
        logo: BiLogoFirebase,
      },
    ],
  },

  {
    field: "Database",
    technology: [
      {
        tech: "MySQL",
        logo: TbBrandMysql,
      },

      {
        tech: "MongoDB",
        logo: SiMongodb,
      },

      {
        tech: "Redux",
        logo: TbBrandRedux,
      },
    ],
  },

  {
    field: "Programming Language",
    technology: [
      { tech: "Java", logo: FaJava },
      { tech: "JavaScript", logo: IoLogoJavascript },
      { tech: "TypeScript", logo: BiLogoTypescript },
      { tech: "C++", logo: TbBrandCpp },
    ],
  },

  {
    field: "Core Concepts",
    technology: [
      {
        tech: "Computer Networking",
        logo: FaServer,
      },

      {
        tech: "Oops",
        logo: VscSymbolClass,
      },

      {
        tech: "DBMS",
        logo: FaDatabase,
      },

      {
        tech: "Operting System",
        logo: HiMiniCpuChip,
      },
    ],
  },

  {
    field: "Dev Ops",
    technology: [{ tech: "Loading...", logo: MdDownloading }],
  },
];

export const miniProjets = [

    {
        title: 'Amazon clone (CSS Based)',
        tech: 'HTML, CSS, FlexBox, VScode',
        logo: FaAmazon,
        code: 'https://github.com/janisar007/amazon-clone',
    },

    {
        title: 'Video rental API',
        tech: 'NodeJs, ExpressJs, NPM libraries, VScode',
        logo: FaPhotoVideo,
        code: 'https://github.com/janisar007/vidly',
    },

    {
        title: 'Trip Booking App (CSS based)',
        tech: 'ReactJs, CSS, VScode, Tailwind',
        logo: MdOutlineTravelExplore,
        code: 'https://github.com/janisar007/trip-bookin-app',
    },

    {
        title: 'Student Info Manager',
        tech: 'C, C++, FileHandling, VScode',
        logo: PiStudentFill,
        code: '/',
    },
];

export const educationDetails = [

  {
    name: 'Dr. Ambedkar Institute of Technology for Handicapped, Kanpur',
    course: 'Bachelor of Technology - BTech, Information Technology',
    duration: 'Sep 2021 - Aug 2025',
    grade: '8.2 SGPA',
    content: "I am currently pursuing a Bachelor's degree in Information Technology at Dr. Ambedkar Institute of Technology for Handicapped, Kanpur. I have completed 4 semesters and have a SGPA of 8.2. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. In this journey, I am learning and working on exciting projects with a lot of talented friends and developers.",
  },

  {
    name: 'Saraswati Vidya Mandir, Gonda',
    course: 'UP-Board(XII), Physics, Chemistry, Maths',
    duration: '2018-2019',
    grade: '8.1 %',
    content: "I completed my class 12 Intermediate education at Saraswati Vidya Mandir, Gonda, where I studied Physics, Chemistry and Maths.",
  },

  {
    name: 'Saraswati Vidya Mandir, Gonda',
    course: 'UP-Board(X), Physics, Chemistry, Maths',
    duration: '2016-2017',
    grade: '8.2 %',
    content: "I completed my class 10 high school education at Saraswati Vidya Mandir, Gonda, where I studied Physics, Chemistry and Maths.",
  },
];