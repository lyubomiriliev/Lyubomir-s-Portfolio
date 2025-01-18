import { problemSolving, vdLogo } from "../assets/logos";
import { detail } from "../assets/logos";
import { creative } from "../assets/logos";
import { collab } from "../assets/logos";
import { learn } from "../assets/logos";
import { task } from "../assets/logos";
import {
  blackSea,
  discoveryLogo,
  nextLogo,
  popShotLogo,
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
      "Design logotypes, web pages, banners, flyers, billboards, social media content, menus, woblers and more",
      "Design brand identity for various Bulgarian companies El Shisha, Vapy, Fitty, Coolfit",
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
      "Unit Tests, Class & Functional Components, CRUD, API requests",
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
    logo: "/web.webp",
    text: "Web Application Development",
  },
  {
    logo: "/singlePage.webp",
    text: "Single Page Applications (SPA)",
  },
  {
    logo: "/performance.webp",
    text: "Performance Optimization",
  },
  {
    logo: "/interactive.webp",
    text: "Interactive UI Components",
  },
  {
    logo: "/api.webp",
    text: "API Integration",
  },
];

export const projectsData = [
  {
    id: 1,
    logoSrc: vdLogo,
    url: "/vyara-digital",
    title: "Vyara Digital",
    subTitle: "Portfolio Website",
    description:
      "A modern portfolio showcasing the creativity and expertise of a Social Media Manager based in Sofia, Bulgaria.",
    technologies: "#NextJs #TypeScript #TailwindCSS #Vercel #FramerMotion",
    imgSrc: "/vyaradigital.webp",
    mobileImg: "/vyaraDigitalMobile.webp",
    primaryButtonLabel: "Live Demo",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://vyaradigital.vercel.app/",
    techStack: [
      "TypeScript",
      "NextJs2",
      "TailwindCSS",
      "Figma",
      "FramerMotion",
    ],
  },
  {
    id: 2,
    logoSrc: blackSea,
    url: "/bsem",
    title: "BlackSea Electromobility",
    subTitle: "EV CHARGING STATIONS WEBSITE",
    description:
      "A web application providing real-time access to free EV charging stations across Bulgaria. Find, navigate, and charge effortlessly—all in one place.",
    technologies: "#react #javascript #tailwindcss #firebase #i18next",
    imgSrc: "/bsem.webp",
    mobileImg: "/bsemMobile.webp",
    primaryButtonLabel: "Website",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://app.bse-mobility.eu/",
    sourceCode: "https://github.com/lyubomiriliev/BlackSea-electromobility",
    techStack: ["JavaScript", "React", "TailwindCSS", "Firebase", "Figma"],
  },
  {
    id: 3,
    logoSrc: virtuosoLogoIcon,
    url: "/virtuoso",
    title: "Virtuoso Barbershop",
    subTitle: "barber shop website",
    description:
      "Elegant, clean and well structured barbershop website offering online booking and email notifications.",
    technologies:
      "#NextJS #TypeScript #TailwindCSS #FramerMotion #Vercel #i18next",
    imgSrc: "/virtuoso.webp",
    mobileImg: "/virtuosoMobile.webp",
    primaryButtonLabel: "Live Demo",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://virtuoso-barbershop.vercel.app/",
    sourceCode:
      "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
    techStack: ["TypeScript", "NextJs2", "TailwindCSS", "Figma"],
  },
  {
    id: 4,
    logoSrc: nextLogo,
    url: "/next-apparel",
    title: "Next Apparel",
    subTitle: "E-COMMERCE WEBSITE",
    description:
      "An online clothing store with a seamless shopping experience. Browse the latest trends and checkout effortlessly with Stripe.",
    technologies:
      "#react #javascript #tailwindcss #vercel #redux #toastify #stripe",
    imgSrc: "/nextshop.webp",
    mobileImg: "/nextMobile.webp",
    primaryButtonLabel: "Live Demo",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://nextshopp.vercel.app/women",
    sourceCode: "https://github.com/lyubomiriliev/N3XT-E-commerce-Website",
    techStack: [
      "JavaScript",
      "React",
      "Firebase",
      "Redux2",
      "TailwindCSS",
      "Stripe",
      "Figma",
    ],
  },
  {
    id: 5,
    logoSrc: popShotLogo,
    url: "/mobile",
    title: "Mobile BG",
    subTitle: "Online Car Marketplace",
    description:
      "A platform for listing, showcasing, and selling cars online—quick and easy. | mobile.bg Rework",
    technologies: "#nextjs #typescript #tailwindcss #supabase #redux",
    imgSrc: "/vyaradigital.webp",
    mobileImg: "/virtuosoMobile.webp",
    primaryButtonLabel: "Live Demo",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://pop-shot-social-media-website.web.app/",
    sourceCode:
      "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
    techStack: ["JavaScript", "React", "Css", "Sass", "Firebase", "Figma"],
  },
  {
    id: 6,
    logoSrc: discoveryLogo,
    url: "/discovery-bg",
    title: "DiscoveryBG",
    subTitle: "Tourism Booking Website",
    description:
      "Discover and book the best tourist sites and routes with ease—all in one place.",
    technologies: "#React #JavaScript #TailwindCSS #i18next",
    imgSrc: "/discovery.webp",
    mobileImg: "/discoveryMobile.webp",
    primaryButtonLabel: "Website",
    testAccEmail: "",
    testAccPw: "",
    webLink: "https://booking.discoverybg.eu/",
    sourceCode: "https://github.com/lyubomiriliev/DISCOVERYBG-Booking-Website",
    techStack: ["JavaScript", "React", "TailwindCSS", "Figma"],
  },
];

export const headerLinks = [
  "home",
  "about",
  "experience",
  "services",
  "projects",
  "contact",
];

export const projectsMoreDetails = [
  {
    id: 1,
    sectionTitle: "About the Client",
    sectionDescription:
      "The client is an experienced Social Media Manager based in Sofia, Bulgaria, specializing in content strategy, audience engagement, and digital brand growth. With years of experience managing social media for brands across different industries, they needed a modern, professional, and visually compelling portfolio to showcase their expertise, past work, and services. The main goals for the website were:",
    sectionGoalsTitle: "Main Goals",
    sectionGoals: [
      "A sleek, minimalistic design that reflects their brand identity.",
      "A clean showcase of case studies and social media campaigns.",
      "A contact section for business inquiries and collaborations.",
      "A responsive and fast-loading experience across all devices.",
    ],
    toolsUsed: [],
    keyFeatures: [],
  },
  {
    id: 2,
    sectionTitle: "Wireframe & Design",
    sectionDescription:
      "Before diving into development, I started with creating a  detailed wireframes to establish the website’s structure, navigation, and overall user experience. This phase was crucial in ensuring a logical and intuitive user flow, allowing visitors to seamlessly explore the portfolio and engage with key content.",
    sectionGoalsTitle: "Key design choices",
    sectionGoals: [
      "Dark theme for a premium and sleek feel.",
      "Typography-first layout to emphasize content without distractions.",
      "Subtle animations to make the experience dynamic without being overwhelming.",
      "Portfolio section featuring case studies, metrics, and campaign visuals.",
      "Call-to-action buttons to drive engagement and inquiries.",
    ],
    toolsUsedTitle: "Tools Used",
    toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    keyFeatures: [],
  },
  {
    id: 3,
    sectionTitle: "Development Process",
    sectionDescription:
      "To create a high-performing, accessible, and scalable portfolio website, I chose a modern front-end stack that balances speed, responsiveness, and maintainability. Every decision—from the framework selection to optimization techniques—was made to ensure the website not only looks great but also performs exceptionally well across all devices and screen sizes.",
    sectionGoalsTitle: "Tech Stack",
    sectionGoals: [
      "NextJs + Typescript for fast and interactive UI.",
      "Tailwind CSS for a responsive, mobile-first styling approach.",
      "Framer Motion for smooth animations and micro-interactions.",
      "Hosting with Vercel",
    ],
    toolsUsedTitle: "Key Features",
    toolsUsed: [],
    keyFeatures: [
      "Interactive homepage with a hero section highlighting the client’s expertise.",
      "Dynamic portfolio gallery to showcase past social media projects.",
      "Smooth page transitions using Framer Motion for a high-end feel.",
      "Fully responsive design for an optimal experience on desktop, tablet, and mobile.",
      "SEO-optimized structure to improve discoverability.",
    ],
  },
  {
    id: 4,
    sectionTitle: "The Finished Product",
    sectionDescription:
      "The result is a modern, visually compelling, and functional portfolio website that reflects the client’s personal brand and expertise in social media management. The client was thrilled with the final product, as it successfully represents their skills, experience, and credibility in the social media industry.",
    sectionGoalsTitle: "",
    sectionGoals: [],
    toolsUsed: [],
    keyFeatures: [],
  },
];
