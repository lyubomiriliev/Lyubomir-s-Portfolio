import React from 'react';
import { blackSea, bsemImg, nextImg, nextLogo, popShotLogo, popshotImg, splashLogo } from '../assets/logos';
import Project from './Project';

const Projects = () => {

    const projectsData = [
        {
            logoSrc: blackSea,
            title: "BlackSea Electromobility",
            subTitle: "EV CHARGING STATIONS",
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
            title: "Next E-Commerce",
            subTitle: "E-COMMERCE",
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
            subTitle: "SOCIAL MEDIA",
            description: "Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus...",
            imgSrc: popshotImg,
            primaryButtonLabel: "Live Demo",
            secondaryButtonLabel: "Source Code",
            testAccEmail: "test@gmail.com",
            testAccPw: "test123",
            webLink: "https://pop-shot-social-media-website.web.app/",
            sourceCode: "https://github.com/lyubomiriliev/PopShot-Social-Media-SOFTUNI-2023-",
        },
    ];

    return (
        <div className='w-full py-10 relative'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className='w-2/3 md:w-1/2 h-full md:-ml-32 flex flex-col justify-center items-center relative'>
                    <div className='w-full items-center flex justify-center mt-10 md:ml-10'>
                        <h2 className='md:w-[30%] z-10 justify-center flex text-white font-outfit font-bold text-4xl mb-3 -ml-4'>Projects</h2>
                        <img className='absolute w-64' src={splashLogo} alt="splash" />
                    </div>
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
