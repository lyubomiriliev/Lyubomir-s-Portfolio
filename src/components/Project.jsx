import React from 'react'
import { githubSecondary } from '../assets/logos'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Project = ({ logoSrc, title, description, imgSrc, primaryButtonlabel, secondaryButtonLabel, testAccEmail, testAccPw, webLink, sourceCode }) => {
    return (
        <div className='w-full  flex flex-col md:flex-row'>
            <div className='w-full flex flex-col justify-center items-center py-6'>
                <div className='w-full flex flex-col md:flex-row items-center justify-center md:items-start md:justify-end md:mr-10 md:space-x-4 '>
                    <img className='w-16 mb-4 md:mb-0 md:mr-4' src={logoSrc} alt="Project logo" />
                    <h2 className='text-secondary font-outfit font-bold text-xl md:text-3xl mb-2'>{title}</h2>
                </div>
                <div className='flex justify-center items-center md:justify-end md:mr-5'>
                    <p className='w-2/3 md:w-[55%] mt-2 md:text-right text-gray-600'>{description}</p>
                </div>
                <div className='flex flex-col text-center md:text-right md:w-full md:mr-10 mt-2'>
                    <h3 className='font-outfit font-bold text-primary'>Test Account:</h3>
                    <div className='bg-primary h-[2px] w-24 mx-auto md:ml-auto md:mr-0 mb-2'></div>
                    <p className='font-outfit text-secondary'>Email: {testAccEmail}</p>
                    <p className='font-outfit text-secondary'>Password: {testAccPw}</p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full'>
                    <img className='w-2/3 mx-auto md:mt-20' src={imgSrc} alt="" />
                </div>
                <div className='w-full md:w-2/3 mt-4 flex flex-col justify-between md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center'>
                    <Link to={webLink} target="_blank" rel="noopener noreferrer">
                        <div className='flex items-center gap-2'>
                            <span className='font-outfit font-bold text-xl text-primary'>{primaryButtonlabel}</span>
                            <FaExternalLinkAlt className='scale-110 text-primary' />
                        </div>
                    </Link>
                    <Link to={sourceCode} target="_blank" rel="noopener noreferrer">
                        <div className='flex items-center gap-2'>
                            <span className='font-outfit font-bold text-xl text-secondary'>{secondaryButtonLabel}</span>
                            <img className='w-8 md:w-10' src={githubSecondary} alt="githubLogo" />

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project
