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
    workExperience: "",
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
    workExperience: "",
  },
  {
    name: "Design - Freelancer",
    years: "(2018-2023)",
    role: "Graphic Designer | UX/UI",
    skills: [
      "Design logotypes, web pages, banners, flyers, billboards, social media content, menus, woblers and more",
      "Design brand identity for various Bulgarian companies El Shisha, Vapy, Fitty, Coolfit",
    ],
    workExperience: "",
  },
  {
    name: "Soft Uni Advanced React Course",
    years: "(2023-2024)",
    role: "Front-End React Developer",
    skillsLearned: [
      "HTML, CSS, SASS",
      "JavaScript, JSX, React",
      "TailwindCSS, Zustand, Firebase, Git",
      "Unit Tests, Class & Functional Components, CRUD, API requests",
    ],
    workExperience: "",
    achievements: "Passed SoftUni React JS 2023 Course with 6.00",
  },
  {
    name: "IT Communication & Dissemination Manager, UBBSLA",
    years: "(2023-Present)",
    role: "Front-End | React Developer",
    skillsLearned: [],
    workExperience:
      "Developed websites and web applications using React, JavaScript, and TypeScript to optimize performance and ensure cross-device compatibility. Integrated APIs to facilitate proper communication between front-end and back-end systems. Debugged code, improved UI/UX, and maintained clean and scalable code for efficient project delivery.",
  },
];

export const softSkills = [
  {
    name: "Problem Solving",
    logo: "/problemSolving.webp",
  },
  {
    name: "Attention to Detail",
    logo: "/detail.webp",
  },
  {
    name: "Creative Thinking",
    logo: "/creative.webp",
  },
  {
    name: "Team Collaboration",
    logo: "/collab.webp",
  },
  {
    name: "Fast & adaptive Learning",
    logo: "/learn.webp",
  },
  {
    name: "Task Prioritization",
    logo: "/task.webp",
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
    url: "/blacksea-electromobility",
    title: "Blacksea Electromobility",
    subTitle: "EV CHARGING STATIONS WEBSITE",
    description:
      "A web application providing real-time access to free EV charging stations across Bulgaria. Find, navigate, and charge effortlessly—all in one place.",
    technologies: "#react #javascript #tailwindcss #firebase #i18next",
    imgSrc: "/bsem.webp",
    mobileImg: "/bsemWeb.webp",
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
    url: "/virtuoso-barbershop",
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
    logoSrc: "/mobileLogoWhite.svg",
    url: "/mobile-bg",
    title: "Mobile BG",
    subTitle: "Online Car Marketplace",
    description:
      "A platform for listing, showcasing, and selling cars online—quick and easy. | mobile.bg Rework",
    technologies: "#nextjs #typescript #tailwindcss #supabase #redux",
    imgSrc: "/mobile.webp",
    mobileImg: "/mobilePhone.webp",
    primaryButtonLabel: "Live Demo",
    testAccEmail: "test@gmail.com",
    testAccPw: "test123",
    webLink: "https://mobilebg.vercel.app/",
    techStack: [
      "NextJs2",
      "TypeScript",
      "TailwindCSS",
      "Redux2",
      "Supabase",
      "Figma",
      "Postgres",
    ],
  },
  {
    id: 6,
    logoSrc: discoveryLogo,
    url: "/discovery-bg",
    title: "Discovery BG",
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

// export const projectsMoreDetails = [
//   {
//     id: 1,
//     sectionTitle: "About the Client",
//     sectionDescription:
//       "The client is an experienced Social Media Manager based in Sofia, Bulgaria, specializing in content strategy, audience engagement, and digital brand growth. With years of experience managing social media for brands across different industries, they needed a modern, professional, and visually compelling portfolio to showcase their expertise, past work, and services. The main goals for the website were:",
//     sectionGoalsTitle: "Main Goals",
//     sectionGoals: [
//       "A sleek, minimalistic design that reflects their brand identity.",
//       "A clean showcase of case studies and social media campaigns.",
//       "A contact section for business inquiries and collaborations.",
//       "A responsive and fast-loading experience across all devices.",
//     ],
//     toolsUsed: [],
//     keyFeatures: [],
//   },
//   {
//     id: 2,
//     sectionTitle: "Wireframe & Design",
//     sectionDescription:
//       "Before diving into development, I started with creating a  detailed wireframes to establish the website’s structure, navigation, and overall user experience. This phase was crucial in ensuring a logical and intuitive user flow, allowing visitors to seamlessly explore the portfolio and engage with key content.",
//     sectionGoalsTitle: "Key design choices",
//     sectionGoals: [
//       "Dark theme for a premium and sleek feel.",
//       "Typography-first layout to emphasize content without distractions.",
//       "Subtle animations to make the experience dynamic without being overwhelming.",
//       "Portfolio section featuring case studies, metrics, and campaign visuals.",
//       "Call-to-action buttons to drive engagement and inquiries.",
//     ],
//     toolsUsedTitle: "Tools Used",
//     toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
//     keyFeatures: [],
//   },
//   {
//     id: 3,
//     sectionTitle: "Development Process",
//     sectionDescription:
//       "To create a high-performing, accessible, and scalable portfolio website, I chose a modern front-end stack that balances speed, responsiveness, and maintainability. Every decision—from the framework selection to optimization techniques—was made to ensure the website not only looks great but also performs exceptionally well across all devices and screen sizes.",
//     sectionGoalsTitle: "Tech Stack",
//     sectionGoals: [
//       "NextJs + Typescript for fast and interactive UI.",
//       "Tailwind CSS for a responsive, mobile-first styling approach.",
//       "Framer Motion for smooth animations and micro-interactions.",
//       "Hosting with Vercel",
//     ],
//     toolsUsedTitle: "Key Features",
//     toolsUsed: [],
//     keyFeatures: [
//       "Interactive homepage with a hero section highlighting the client’s expertise.",
//       "Dynamic portfolio gallery to showcase past social media projects.",
//       "Smooth page transitions using Framer Motion for a high-end feel.",
//       "Fully responsive design for an optimal experience on desktop, tablet, and mobile.",
//       "SEO-optimized structure to improve discoverability.",
//     ],
//   },
//   {
//     id: 4,
//     sectionTitle: "The Finished Product",
//     sectionDescription:
//       "The result is a modern, visually compelling, and functional portfolio website that reflects the client’s personal brand and expertise in social media management. The client was thrilled with the final product, as it successfully represents their skills, experience, and credibility in the social media industry.",
//     sectionGoalsTitle: "",
//     sectionGoals: [],
//     toolsUsed: [],
//     keyFeatures: [],
//   },
// ];

export const detailedProjects = [
  {
    id: 1,
    name: "Vyara Digital",
    aboutTitle: "About the Client",
    aboutDescription:
      "The client is an experienced Social Media Manager based in Sofia, Bulgaria, specializing in content strategy, audience engagement, and digital brand growth. With years of experience managing social media for brands across different industries, they needed a modern, professional, and visually compelling portfolio to showcase their expertise, past work, and services. The main goals for the website were:",
    aboutGoalsTitle: "Main Goals",
    aboutGoals: [
      "A sleek, minimalistic design that reflects their brand identity.",
      "A clean showcase of case studies and social media campaigns.",
      "A contact section for business inquiries and collaborations.",
      "A responsive and fast-loading experience across all devices.",
    ],
    designTitle: "Wireframe & Design",
    designDescription:
      "Before diving into development, I started with creating a  detailed wireframes to establish the website’s structure, navigation, and overall user experience. This phase was crucial in ensuring a logical and intuitive user flow, allowing visitors to seamlessly explore the portfolio and engage with key content.",
    designGoalsTitle: "Key design choices",
    designGoals: [
      "Dark theme for a premium and sleek feel.",
      "Typography-first layout to emphasize content without distractions.",
      "Subtle animations to make the experience dynamic without being overwhelming.",
      "Portfolio section featuring case studies, metrics, and campaign visuals.",
      "Call-to-action buttons to drive engagement and inquiries.",
    ],
    toolsUsedTitle: "Tools Used",
    toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    developmentTitle: "Development",
    developmentDescription:
      "To create a high-performing, accessible, and scalable portfolio website, I chose a modern front-end stack that balances speed, responsiveness, and maintainability. Every decision—from the framework selection to optimization techniques—was made to ensure the website not only looks great but also performs exceptionally well across all devices and screen sizes.",
    techStackTitle: "Tech Stack",
    techStack: [
      "NextJs + TypeScript for fast and interactive UI.",
      "Tailwind CSS for a responsive, mobile-first styling approach.",
      "Framer Motion for smooth animations and micro-interactions.",
      "Hosting with Vercel",
    ],
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Interactive homepage with a hero section highlighting the client’s expertise.",
      "Dynamic portfolio gallery to showcase past social media projects.",
      "Smooth page transitions using Framer Motion for a high-end feel.",
      "Fully responsive design for an optimal experience on desktop, tablet, and mobile.",
      "SEO-optimized structure to improve discoverability.",
    ],
    finishTitle: "Finished Project",
    finishDescription:
      "The result is a modern, visually compelling, and functional portfolio website that reflects the client’s personal brand and expertise in social media management. The client was thrilled with the final product, as it successfully represents their skills, experience, and credibility in the social media industry.",
  },
  {
    id: 2,
    name: "Blacksea Electromobility",
    aboutTitle: "About the Client",
    aboutDescription:
      "BlackSea Electromobility is a European Project initiative aimed at enhancing electric vehicle infrastructure along Bulgaria’s Black Sea coast. The client needed a modern, data-driven web application where EV owners could easily find and access free and paid charging stations in real time.",
    aboutGoalsTitle: "Main Goals",
    aboutGoals: [
      "Provide a seamless, user-friendly platform to locate nearby EV charging stations.",
      "Display live availability and station details using an interactive map.",
      "Implement a Firebase-based authentication system for user registration and login.",
      "Use RESTful APIs to fetch real-time station data, ensuring up-to-date information.",
      "Ensure high performance and priority mobile accessibility for on-the-go users.",
    ],
    designTitle: "Wireframe & Design",
    designDescription:
      "The wireframing phase focused on clarity and efficiency, making the user experience as intuitive as possible. The platform needed to be highly visual and data-centric, ensuring users could quickly find charging stations without unnecessary distractions.",
    designGoalsTitle: "Key design choices",
    designGoals: [
      "Google Maps integration as the centerpiece for station discovery.",
      "Dark and modern UI to enhance readability and highlight key data points.",
      "User-friendly dashboard for registered users to track their activity.",
      "Color-coded station markers to indicate availability in real-time.",
    ],
    toolsUsedTitle: "Tools Used",
    toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    developmentTitle: "Development",
    developmentDescription:
      "To achieve high performance, reliability, and real-time updates, I used a modern full-stack approach with a focus on API communication and authentication.",
    techStackTitle: "Tech Stack",
    techStack: [
      "React/JavaScript + Vite → Ensures smooth and fast rendering.",
      "Tailwind CSS → Provides a responsive, scalable, and lightweight design.",
      "Google Maps API → Enables real-time station mapping with dynamic updates.",
      "Firebase Authentication → Secure login and registration for users.",
      "RESTful APIs → Fetches up-to-date station availability and details.",
    ],
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Real-time charging station availability powered by RESTful APIs.",
      "Interactive Google Maps UI for seamless navigation.",
      "Secure user authentication via Firebase (Register/Login).",
      "Dynamic search for users to find the desired charging station.",
      "Mobile-first design for on-the-go EV drivers.",
    ],
    finishTitle: "Finished Project",
    finishDescription:
      "The BlackSea Electromobility web application delivers a powerful, data-driven, and user-friendly experience that helps EV drivers in Bulgaria find charging stations with ease. Built with a real-time Google Maps API integration, the platform provides live availability updates, filtering options, and seamless navigation, ensuring that users can quickly locate and access charging stations along the Black Sea coast.",
  },
  {
    id: 3,
    name: "Virtuoso Barbershop",
    aboutTitle: "About the Client",
    aboutDescription:
      "Virtuoso Barbershop is a premium barbershop known for its modern approach to men’s grooming. The client wanted a sleek, professional, and highly functional website where customers could:",
    aboutGoalsTitle: "Main Goals",
    aboutGoals: [
      "Explore available services with detailed descriptions.",
      "Learn about the barbers through an introduction section.",
      "Book appointments online with a seamless scheduling system.",
      "Receive email notifications confirming their appointment details.",
      "Showcase the barbershop’s brand identity through a modern, aesthetic UI.",
    ],
    designTitle: "Wireframe & Design",
    designDescription:
      "The wireframing process prioritized clean layouts and a premium feel, ensuring a smooth booking experience.",
    designGoalsTitle: "Key design Choices",
    designGoals: [
      "Dark, elegant theme to reflect the premium nature of the barbershop.",
      "Minimalist UI with easy-to-navigate sections.",
      "Service preview cards with pricing and descriptions.",
      "Team member profiles featuring experience and specialties.",
      "Step-by-step reservation with service, date, and barber selection",
      "Email notifications with appointment confirmation.",
    ],
    toolsUsedTitle: "Tools Used",
    toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    developmentTitle: "Development",
    developmentDescription:
      "To ensure a smooth booking experience, the platform was built using high-performance Next.Js front-end, using its API endpoints and Resend for emails.",
    techStackTitle: "Tech Stack",
    techStack: [
      "NextJs + TypeScript → Ensures a fast, interactive experience.",
      "Tailwind CSS → Delivers a stylish, fully responsive UI.",
      "Email notifications with Resend by Vercel.",
      "API endpoints",
    ],
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Dynamic booking system with service, date, and barber selection.",
      "Automated email confirmations upon successful booking.",
      "Professional team introduction section showcasing barbers.",
      "Elegant, dark-themed design for a luxury feel.",
      "SEO-optimized structure to improve discoverability.",
      "Mobile-friendly and fully responsive UI for effortless navigation.",
    ],
    finishTitle: "Finished Project",
    finishDescription:
      "The BlackSea Electromobility web application delivers a powerful, data-driven, and user-friendly experience that helps EV drivers in Bulgaria find charging stations with ease. Built with a real-time Google Maps API integration, the platform provides live availability updates, filtering options, and seamless navigation, ensuring that users can quickly locate and access charging stations along the Black Sea coast.",
  },
  {
    id: 4,
    name: "Next Apparel",
    aboutTitle: "About the Client",
    aboutDescription:
      "Next Apparel is a modern online store built to provide a seamless and engaging shopping experience. The goal was to create a fully functional e-commerce website where users could browse, favorite, add to cart, and securely purchase fashion items.",
    aboutGoalsTitle: "Main Goals",
    aboutGoals: [
      "Develop a user-friendly and responsive e-commerce website.",
      "Implement full CRUD functionality for products and orders..",
      "Enable secure authentication and data storage via Firebase.",
      "Integrate Stripe for secure checkout and payment processing.",
      "Provide a modern and intuitive UI with smooth navigation.",
    ],
    designTitle: "Wireframe & Design",
    designDescription:
      "The design was focused on simplicity, usability, and conversion optimization.",
    designGoalsTitle: "Key design Choices",
    designGoals: [
      "Clean and minimal UI to keep the focus on products.",
      "Dynamic product cards with hover effects.",
      "Intuitive navigation, pagination & filters for an effortless shopping experience.",
      "Dedicated profile section for users to track their orders and favorites.",
      "Smooth animations, notifications and transitions for a premium feel.",
    ],
    toolsUsedTitle: "Tools Used",
    toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    developmentTitle: "Development",
    developmentDescription:
      "To ensure scalability, speed, and security, I chose a modern front-end stack React/JavaScript with API integration and Firebase.",
    techStackTitle: "Tech Stack",
    techStack: [
      "React + JavaScript → Fast, interactive UI development.",
      "Tailwind CSS → Delivers a stylish, fully responsive UI.",
      "Firebase Authentication & Firestore → Secure login and real-time product database.",
      "Stripe API → Secure payment processing for purchases.",
      "Redux & Context API → State management for different functionalities.",
    ],
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Full e-commerce functionality (Add to cart, Wishlist, Checkout).",
      "User Authentication with Firebase (Sign up, Login, Profile).",
      "Stripe Payment Integration for seamless transactions.",
      "Order Tracking – Users can view past purchases.",
    ],
    finishTitle: "Finished Project",
    finishDescription:
      "The Virtuoso Barbershop website is a modern, stylish, and highly functional platform designed to elevate the client’s online presence and streamline the appointment booking process. Built with a dark, premium aesthetic, the website reflects the high-end, sophisticated branding of the barbershop while ensuring an effortless user experience.",
  },
  {
    id: 5,
    name: "Mobile BG",
    aboutTitle: "About the Client",
    aboutDescription:
      "Mobile BG is a comprehensive online car marketplace that allows users to list, browse, and purchase vehicles with ease. Unlike traditional classified ad websites, Mobile BG offers a detailed, feature-rich experience, allowing users to filter and search listings with high precision.",
    aboutGoalsTitle: "Main Goals",
    aboutGoals: [
      "Create an intuitive listing platform where users can add, edit, and manage car listings.",
      "Enable detailed car specifications and extra features.",
      "Allow users to upload up to 15 images per listing.",
      "Implement a complex search and filtering system.",
      "Offer paid and free listing options for monetization.",
    ],
    designTitle: "Wireframe & Design",
    designDescription:
      "The wireframing process prioritized clean layouts and a premium feel, ensuring a smooth posting and search experience.",
    designGoalsTitle: "Key design Choices",
    designGoals: [
      "Modern and structured layout with a focus on usability",
      "Comprehensive search filters to refine results easily.",
      "Clear CTA buttons to encourage users to list their cars.",
      "Well-organized listing cards with images and details.",
    ],
    toolsUsedTitle: "Tools Used",
    toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    developmentTitle: "Development",
    developmentDescription:
      "Given the scale and complexity of the application, I used a highly optimized stack.",
    techStackTitle: "Tech Stack",
    techStack: [
      "Next.js 15 → Server-side rendering for optimal performance.",
      "Tailwind CSS → Clean and responsive UI.",
      "Supabase Authentication & Database → Secure user management and data storage.",
      "Redux & Context API → State management for different functionalities.",
      "Custom API endpoints for fetching vehicle data dynamically.",
    ],
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Advanced search & filtering system with detailed car specs.",
      "Listing management – Users can create, edit, and delete their listings.",
      "Image upload feature (up to 15 images per listing).",
      "Paid & Free Listing Options for monetization",
      "Authentication & User Profiles for listing management.",
    ],
    finishTitle: "Finished Project",
    finishDescription:
      "Mobile BG successfully transforms the car-selling process into an intuitive, highly functional, and visually appealing experience. The final product is a fully interactive online marketplace that allows users to create detailed car listings, browse available vehicles, and find the perfect match using advanced filtering options.",
  },
  {
    id: 6,
    name: "Discovery BG",
    aboutTitle: "About the Client",
    aboutDescription:
      "Discovery BG is a travel exploration platform aimed at helping people in Bulgaria discover hidden gems and lesser-known tourist attractions. Unlike mainstream travel sites, this platform focuses on unique locations, scenic routes, and cultural spots that are often overlooked.",
    aboutGoalsTitle: "Main Goals",
    aboutGoals: [
      "Provide a comprehensive list of hidden travel destinations.",
      "Integrate Google Maps for location-based browsing.",
      "Offer detailed information and travel tips.",
      "Ensure ultra-fast loading and high performance.",
    ],
    designTitle: "Wireframe & Design",
    designDescription:
      "The wireframing process prioritized clean layouts and a premium feel, ensuring a smooth booking experience.",
    designGoalsTitle: "Key design Choices",
    designGoals: [
      "Minimalist, clean UI for distraction-free browsing.",
      "Large, high-quality images for each destination.",
      "Interactive maps for easy navigation.",
      "Simple card-based layout for travel inspiration.",
    ],
    toolsUsedTitle: "Tools Used",
    toolsUsed: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    developmentTitle: "Development",
    developmentDescription:
      "To ensure fast load times and a smooth experience, I optimized both design and functionality.",
    techStackTitle: "Tech Stack",
    techStack: [
      "React + Vite → Ensures a fast, interactive experience.",
      "Tailwind CSS → Delivers a stylish, fully responsive UI.",
      "Google Maps API Integration → Enables dynamic location-based browsing.",
    ],
    keyFeaturesTitle: "Key Features",
    keyFeatures: [
      "Curated list of travel spots with photos and descriptions.",
      "Ultra-fast loading for a smooth experience.",
      "Google Maps integration for location browsing.",
      "Mobile-optimized design for travelers on the go.",
    ],
    finishTitle: "Finished Project",
    finishDescription:
      "Discovery BG is a gateway to Bulgaria’s hidden gems, offering users a visually rich and information-packed experience. The platform was designed to be simple yet effective, guiding users effortlessly through lesser-known travel destinations while providing essential details like location coordinates, historical background, and recommended activities.",
  },
];
