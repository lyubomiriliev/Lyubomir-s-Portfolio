import React, { useRef, useEffect } from 'react';
import { blackSea, bsemImg, discoveryImg, discoveryLogo, hilinkImg, hilinkLogo, nextImg, nextLogo, popShotLogo, popshotImg, virtuosoImg, virtuosoLogoIcon } from '../assets/logos';
import Project from './Project';
import { motion, useInView, useAnimation, delay } from 'framer-motion';

import { techStackLogos } from "../assets/logos"


const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const animationControls = useAnimation(); 

    useEffect(() => {
        if (isInView) {
            animationControls.start('visible');
        }
    }, [isInView, animationControls]);

    const scrollAnimationVariants = {
        hidden: { x: -1500 },
        visible: {
            x: 0,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                bounce: 0.5,
                delay: 0,
            },
        },
    };

    const projectsData = [
        {
            logoSrc: blackSea,
            title: "BlackSea Electromobility",
            subTitle: "EV CHARGING STATIONS WEBSITE",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
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
            logoSrc: nextLogo,
            title: "Next Apparel",
            subTitle: "E-COMMERCE WEBSITE",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            technologies: "#react #javascript #tailwindcss #vercel #redux #toastify #stripe",
            imgSrc: nextImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://app.bse-mobility.eu/",
            sourceCode: "https://github.com/lyubomiriliev/N3XT-E-commerce-Website",
            techStack: ["JavaScript", "React", "Redux2", "TailwindCSS", "Stripe", "Figma"],
        },
        {
            logoSrc: popShotLogo,
            title: "Popshot",
            subTitle: "SOCIAL MEDIA WEBSITE",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            technologies: "#react #javascript #css #sass #firebase",
            imgSrc: popshotImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://pop-shot-social-media-website.web.app/",
            sourceCode: "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
            techStack: ["JavaScript", "React", "Css", "Sass", "Firebase", "Figma"],
        },
        {
            logoSrc: discoveryLogo,
            title: "DiscoveryBG",
            subTitle: "Tourism Booking Website",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
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
        {
            logoSrc: hilinkLogo,
            title: "Hilink",
            subTitle: "travel app",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
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
            logoSrc: virtuosoLogoIcon,
            title: "Virtuoso",
            subTitle: "barber shop website",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            technologies: "#NextJS #TypeScript #TailwindCSS #FramerMotion #Vercel #i18next",
            imgSrc: virtuosoImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://pop-shot-social-media-website.web.app/",
            sourceCode: "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
            techStack: ["TypeScript", "NextJs2", "TailwindCSS", "Figma"],
        },
    ];

    return (
        <div className='w-full flex flex-col justify-center items-center mx-auto' ref={ref}>
            <motion.div
                className='w-full md:w-2/3 flex flex-col justify-center items-center'
                initial="hidden"
                animate={animationControls} // Control animation using animationControls
                variants={scrollAnimationVariants} // Use defined variants for the animation
            >
                <div className='w-full items-center flex justify-center gap-6 '>
                    <span className='font-outfit font-light text-5xl text-primary'>#02</span>
                    <div className='w-[3px] h-[36px] bg-primary'></div>
                    <h2 className='text-primary font-outfit font-bold text-5xl uppercase'>Projects</h2>
                </div>
            </motion.div>

            <div className='w-full md:max-w-screen-xl mx-auto items-center grid md:grid-cols-2 py-10'>
                {projectsData.map((project, index) => (
                    <Project
                        key={index}
                        logoSrc={project.logoSrc}
                        title={project.title}
                        subTitle={project.subTitle}
                        description={project.description}
                        technologies={project.technologies}
                        imgSrc={project.imgSrc}
                        primaryButtonLabel={project.primaryButtonLabel}
                        secondaryButtonLabel={project.secondaryButtonLabel}
                        testAccEmail={project.testAccEmail}
                        testAccPw={project.testAccPw}
                        webLink={project.webLink}
                        sourceCode={project.sourceCode}
                        techStack={project.techStack}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
