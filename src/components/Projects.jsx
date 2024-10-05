import React from 'react';
import { blackSea, bsemImg, discoveryImg, discoveryLogo, hilinkImg, hilinkLogo, nextImg, nextLogo, popShotLogo, popshotImg, virtuosoImg, virtuosoLogoIcon } from '../assets/logos';
import Project from './Project';

const Projects = () => {

    const projectsData = [
        {
            logoSrc: blackSea,
            title: "BlackSea Electromobility",
            subTitle: "EV CHARGING STATIONS WEBSITE",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            imgSrc: bsemImg,
            primaryButtonLabel: "Website",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://app.bse-mobility.eu/",
            sourceCode: "https://github.com/lyubomiriliev/BlackSea-electromobility",
        },
        {
            logoSrc: nextLogo,
            title: "Next Apparel",
            subTitle: "E-COMMERCE WEBSITE",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            imgSrc: nextImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://app.bse-mobility.eu/",
            sourceCode: "https://github.com/lyubomiriliev/N3XT-E-commerce-Website",
        },
        {
            logoSrc: popShotLogo,
            title: "Popshot",
            subTitle: "SOCIAL MEDIA WEBSITE",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            imgSrc: popshotImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://pop-shot-social-media-website.web.app/",
            sourceCode: "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
        },
        {
            logoSrc: discoveryLogo,
            title: "DiscoveryBG",
            subTitle: "Tourism Booking Website",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            imgSrc: discoveryImg,
            primaryButtonLabel: "Website",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "",
            testAccPw: "",
            webLink: "https://booking.discoverybg.eu/",
            sourceCode: "https://github.com/lyubomiriliev/DISCOVERYBG-Booking-Website",
        },
        {
            logoSrc: hilinkLogo,
            title: "Hilink",
            subTitle: "travel app",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            imgSrc: hilinkImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://pop-shot-social-media-website.web.app/",
            sourceCode: "https://github.com/lyubomiriliev/Travel-App-NextJS",
        },
        {
            logoSrc: virtuosoLogoIcon,
            title: "Virtuoso",
            subTitle: "barber shop website",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            imgSrc: virtuosoImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://pop-shot-social-media-website.web.app/",
            sourceCode: "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
        },
    ];

    return (
        <div className='w-full flex flex-col justify-center items-center mx-auto'>
                <div className='w-full  md:w-2/3 flex flex-col justify-center items-center'>
                    <div className='w-full items-center flex justify-center gap-6 '>
                        <span className='font-outfit font-light text-5xl text-primary'>#02</span>
                        <div className='w-[3px] h-[36px] bg-primary'></div>
                        <h2 className='text-primary font-outfit font-bold text-5xl uppercase'>Projects</h2>
                    </div>
                </div>

            <div className='w-full md:max-w-screen-xl mx-auto items-center grid md:grid-cols-2 py-10'>
                {projectsData.map((project, index) => (
                    <Project
                        key={index}
                        logoSrc={project.logoSrc}
                        title={project.title}
                        subTitle={project.subTitle}
                        description={project.description}
                        imgSrc={project.imgSrc}
                        primaryButtonLabel={project.primaryButtonLabel}
                        secondaryButtonLabel={project.secondaryButtonLabel}
                        testAccEmail={project.testAccEmail}
                        testAccPw={project.testAccPw}
                        webLink={project.webLink}
                        sourceCode={project.sourceCode}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
