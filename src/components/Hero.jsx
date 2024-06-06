import React from 'react'
import { githubSecondary, heroImage, heroTitle, linkedinSecondary } from '../assets/logos'

const Hero = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-6 flex flex-col md:flex-row items-center'>
            <div className='flex flex-col p-4 md:p-0'>
                <img className='w-3/4 md:w-full' src={heroTitle} alt="Hero Title" />
                <div className='w-1/4 md:w-1/3 ml-4 mt-2 h-[2px] bg-secondary'></div>
                <p className='w-3/4 md:w-2/3 ml-4 mt-8 text-primary font-outfit font-light text-lg'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta.</p>
                <span className='w-3/4 md:w-2/3 ml-4 mt-4 text-primary font-medium font-outfit text-lg'>Based in Sofia, Bulgaria.</span>
                <div className='flex justify-start items-center mt-3 ml-4 gap-4'>
                    <img className='w-10 md:w-14' src={linkedinSecondary} alt="linkedin logo" />
                    <img className='w-10 md:w-14' src={githubSecondary} alt="github logo" />
                </div>
            </div>
            <img className='w-full md:w-2/3 ' src={heroImage} alt="Hero Image" />
        </div>
    )
}

export default Hero
