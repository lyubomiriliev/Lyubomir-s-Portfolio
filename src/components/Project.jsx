import React from 'react'
import { projectBG } from '../assets/logos'
import { techStackLogos } from "../assets/logos"


const Project = ({ logoSrc, title, subTitle, description, imgSrc, primaryButtonLabel, secondaryButtonLabel, testAccEmail, testAccPw, webLink, sourceCode, techStack }) => {

    const filteredLogos = techStackLogos.filter(logo => techStack.includes(logo.name))

    return (
        <div className='w-full flex h-[768px] md:h-[768px] space-x-6  px-4 py-4 rounded-lg'>
            <div className='w-full h-full  rounded-lg overflow-hidden relative'>
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                <div className='h-1/3 md:h-1/2 bg-white w-[90%] mx-auto flex justify-end my-8 rounded-lg relative z-10'>
                    <div className='flex  h-20 w-20 p-2 rounded-lg justify-center items-center'>
                        <img src={logoSrc} className='w-full mx-2 my-2 object-cover' alt="Project Logo" />
                    </div>
                    <img src={imgSrc} className='object-cover w-full rounded-lg h-full absolute inset-0 left-0 -z-20' alt="" />
                </div>
                </a>
                <div className='w-full h-1/3 gap-2 flex flex-col justify-start px-10 relative z-10'>
                    <h3 className='w-full font-outfit font-bold mt-2 text-2xl'>{title}</h3>
                    <p className='font-outfit font-light text-sm tracking-widest uppercase'>{subTitle}</p>
                    <p className='w-2/3 text-sm font-outfit font-light'>{description}</p>
                    <div className='w-full flex items-center space-x-4'>
                        {filteredLogos.map((logo, index) => (
                            <div key={index} className='flex justify-start'>
                            <img src={logo.src} alt={logo.name} className='w-10 md:w-12 object-cover rounded-full' />
                            </div>
                        ))}
                    </div>
                    <div className='w-full  flex gap-6 mt-2 justify-start items-center'>
                        <a href={webLink} target="_blank" rel="noopener noreferrer">
                        <button className='px-6 py-2 cursor-pointer hover:bg-blue-600 duration-200 ease-in bg-primary rounded-full text-white font-medium uppercase font-outfit'>{primaryButtonLabel}</button>
                        </a>
                        <a href={sourceCode} target="_blank" rel="noopener noreferrer">
                        <button className='px-4 py-1.5 cursor-pointer hover:bg-secondary duration-200 ease-in hover:text-white border-2 border-secondary bg-transparent rounded-full text-secondary font-medium uppercase font-outfit'>{secondaryButtonLabel}</button>
                        </a>
                    </div>
                </div>
                <img className='w-full h-full bottom-0 left-0 absolute' src={projectBG} alt="BG" />
            </div>
        </div>
    )
}

export default Project
