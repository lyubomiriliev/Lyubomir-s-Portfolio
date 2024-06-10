import React from 'react'

import { blackSea, bsemImg, diagonalLines, nextImg, nextLogo, popShotLogo, popshotImg, splashLogo } from '../assets/logos'
import Project from './Project'


const Projects = () => {
    return (
        <div className='w-full relative py-10'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className='w-2/3 md:w-1/2 h-full  md:-ml-32 flex flex-col justify-center items-center relative'>
                    <div className='w-full items-center flex justify-center mt-10 md:ml-10'>
                        <h2 className='md:w-[30%] z-10 justify-center flex text-white font-outfit font-bold text-4xl mb-3 -ml-4'>Projects</h2>
                        <img className='absolute w-60' src={splashLogo} alt="splash" />
                    </div>
                </div>
            </div>


            <div className='w-full md:max-w-screen-xl mx-auto items-center gap-10 flex flex-col py-10'>
                <Project
                    logoSrc={blackSea}
                    title="BlackSea Electromobility"
                    description="Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet."
                    imgSrc={bsemImg}
                    primaryButtonlabel="Website"
                    secondaryButtonLabel="Source Code"
                    testAccEmail="test@gmail.com"
                    testAccPw="test123"
                />
                <Project
                    logoSrc={nextLogo}
                    title="Next E-Commerce"
                    description="Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet."
                    imgSrc={nextImg}
                    primaryButtonlabel="Live Demo"
                    secondaryButtonLabel="Source Code"
                    testAccEmail="test@gmail.com"
                    testAccPw="test123"
                />
                <Project
                    logoSrc={popShotLogo}
                    title="Popshot Social Media"
                    description="Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet."
                    imgSrc={popshotImg}
                    primaryButtonlabel="Live Demo"
                    secondaryButtonLabel="Source Code"
                    testAccEmail="test@gmail.com"
                    testAccPw="test123"
                />
            </div>
        </div>
    )
}

export default Projects
