import { problemSolving } from "../assets/logos";
import { detail } from "../assets/logos";
import { creative } from "../assets/logos";
import { collab } from "../assets/logos";
import { learn } from "../assets/logos";
import { task } from "../assets/logos";
import {
  blackSea,
  bsemImg,
  discoveryImg,
  discoveryLogo,
  hilinkImg,
  hilinkLogo,
  nextImg,
  nextLogo,
  popShotLogo,
  popshotImg,
  virtuosoImg,
  virtuosoLogoIcon,
} from "../assets/logos";

export const educationData = [
  {
    name: "Video Technician, NPGPTO “M.V. Lomonosov”",
    years: "(2013-2017)",
    location: "Sofia, Bulgaria",
    level: "Professional",
    skills: [
      "Cinema, audio and video technician",
      "Cinematography and photography",
      "Basic technical education",
    ],
  },
  {
    name: "Graphic Designer, New Bulgarian University",
    years: "(2017-2021)",
    location: "ul. “Montevideo” 21, Sofia, Bulgaria",
    level: "Bachelor's Degree",
    skills: [
      "Full branding design",
      "Print design",
      "Logo design",
      "Web design",
      "UI/UX design",
      "Creativity",
    ],
  },
  {
    name: "Design - Freelancer",
    years: "(2017-2023)",
    role: "Graphic Designer | UX/UI",
    skills: [
      "Design brand identity for various Bulgarian companies - El Shisha, Vapy, Fitty.",
      "Design logotypes, web pages, banners, flyers, billboards, social media content, menus, woblers and more",
    ],
  },
  {
    name: "Soft Uni Advanced React Course",
    years: "(2022-2024)",
    role: "Front-End React Developer",
    skillsLearned: [
      "HTML, CSS, SASS",
      "JavaScript, JSX, React",
      "TailwindCSS, Zustand, Firebase, Git",
    ],
    achievements: "Passed SoftUni React JS 2023 Course with 6.00",
  },
];

export const softSkills = [
  {
    name: "Problem Solving",
    logo: problemSolving,
  },
  {
    name: "Attention to Detail",
    logo: detail,
  },
  {
    name: "Creative Thinking",
    logo: creative,
  },
  {
    name: "Team Collaboration",
    logo: collab,
  },
  {
    name: "Fast & adaptive Learning",
    logo: learn,
  },
  {
    name: "Task Prioritization",
    logo: task,
  },
];

export const skillsDev = [
  {
    h1: "<h1 className=",
    class: "”text-3xl font-bold text-white”",
    classEnd: ">",
    text: "Web Application Development",
    h2: "</h1>",
  },
  {
    h1: "<h1 className=",
    class: "”text-3xl font-bold text-white”",
    classEnd: ">",
    text: "Single Page Applications (SPA)",
    h2: "</h1>",
  },
  {
    h1: "<h1 className=",
    class: "”text-3xl font-bold text-white”",
    classEnd: ">",
    text: "Performance Optimization",
    h2: "</h1>",
  },
  {
    h1: "<h1 className=",
    class: "”text-3xl font-bold text-white”",
    classEnd: ">",
    text: "Interactive UI Components",
    h2: "</h1>",
  },
  {
    h1: "<h1 className=",
    class: "”text-3xl font-bold text-white”",
    classEnd: ">",
    text: "API Integration",
    h2: "</h1>",
  },
];

export const skillsDevAfter = [
  {
    logo: "/web.png",
    text: "Web Application Development",
  },
  {
    logo: "/singlePage.png",
    text: "Single Page Applications (SPA)",
  },
  {
    logo: "/performance.png",
    text: "Performance Optimization",
  },
  {
    logo: "/interactive.png",
    text: "Interactive UI Components",
  },
  {
    logo: "/api.png",
    text: "API Integration",
  },
];

export const projectsData = [
  {
    logoSrc: hilinkLogo,
    title: "Vyara Digital",
    subTitle: "Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
    technologies: "#NextJs #TypeScript #TailwindCSS #Vercel #FramerMotion",
    imgSrc: hilinkImg,
    primaryButtonLabel: "Live Demo",
    secondaryButtonLabel: "Source Code",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://pop-shot-social-media-website.web.app/",
    sourceCode: "https://github.com/lyubomiriliev/Travel-App-NextJS",
    techStack: ["TypeScript", "NextJs2", "TailwindCSS", "Figma"],
  },
  {
    logoSrc: blackSea,
    title: "BlackSea Electromobility",
    subTitle: "EV CHARGING STATIONS WEBSITE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
    technologies: "#react #javascript #tailwindcss #firebase #i18next",
    imgSrc: bsemImg,
    primaryButtonLabel: "Website",
    secondaryButtonLabel: "Source Code",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://app.bse-mobility.eu/",
    sourceCode: "https://github.com/lyubomiriliev/BlackSea-electromobility",
    techStack: ["JavaScript", "React", "TailwindCSS", "Firebase", "Figma"],
  },
  {
    logoSrc: virtuosoLogoIcon,
    title: "Virtuoso Barbershop",
    subTitle: "barber shop website",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
    technologies:
      "#NextJS #TypeScript #TailwindCSS #FramerMotion #Vercel #i18next",
    imgSrc: virtuosoImg,
    primaryButtonLabel: "Live Demo",
    secondaryButtonLabel: "Source Code",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://pop-shot-social-media-website.web.app/",
    sourceCode:
      "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
    techStack: ["TypeScript", "NextJs2", "TailwindCSS", "Figma"],
  },
  {
    logoSrc: nextLogo,
    title: "Next Apparel",
    subTitle: "E-COMMERCE WEBSITE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
    technologies:
      "#react #javascript #tailwindcss #vercel #redux #toastify #stripe",
    imgSrc: nextImg,
    primaryButtonLabel: "Live Demo",
    secondaryButtonLabel: "Source Code",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://app.bse-mobility.eu/",
    sourceCode: "https://github.com/lyubomiriliev/N3XT-E-commerce-Website",
    techStack: [
      "JavaScript",
      "React",
      "Redux2",
      "TailwindCSS",
      "Stripe",
      "Figma",
    ],
  },
  {
    logoSrc: popShotLogo,
    title: "Popshot",
    subTitle: "SOCIAL MEDIA WEBSITE",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
    technologies: "#react #javascript #css #sass #firebase",
    imgSrc: popshotImg,
    primaryButtonLabel: "Live Demo",
    secondaryButtonLabel: "Source Code",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://pop-shot-social-media-website.web.app/",
    sourceCode:
      "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
    techStack: ["JavaScript", "React", "Css", "Sass", "Firebase", "Figma"],
  },
  {
    logoSrc: discoveryLogo,
    title: "DiscoveryBG",
    subTitle: "Tourism Booking Website",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
    technologies: "#React #JavaScript #TailwindCSS #i18next",
    imgSrc: discoveryImg,
    primaryButtonLabel: "Website",
    secondaryButtonLabel: "Source Code",
    testAccEmail: "",
    testAccPw: "",
    webLink: "https://booking.discoverybg.eu/",
    sourceCode: "https://github.com/lyubomiriliev/DISCOVERYBG-Booking-Website",
    techStack: ["JavaScript", "React", "TailwindCSS", "Figma"],
  },
];
