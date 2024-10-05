import React from 'react'
import { githubSecondary, heroBG, heroBG2, projectBG } from '../assets/logos'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Project = ({ logoSrc, title, subTitle, description, imgSrc, primaryButtonlabel, secondaryButtonLabel, testAccEmail, testAccPw, webLink, sourceCode }) => {
    return (
        <div className='w-full flex h-[720px] md:h-[768px] space-x-6  px-4 py-4 rounded-xl'>
            <div className='w-full h-full bg-gray-200 rounded-xl overflow-hidden relative'>
                <div className='h-1/3 md:h-1/2 bg-white w-[90%] mx-auto my-8 rounded-xl relative z-10'>
                    <div className='flex w-full justify-end items-center'>
                        <img src={logoSrc} className='w-16 mx-2 my-2' alt="Project Logo" />
                    </div>

                </div>
                <div className='w-full h-1/3 gap-2 flex flex-col justify-start px-10 relative z-10'>
                    <h3 className='font-outfit font-bold mt-2 text-3xl'>{title}</h3>
                    <p className='font-outfit font-light text-lg tracking-widest'>{subTitle}</p>
                    <p className='w-2/3 text-sm font-outfit font-light'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet.</p>
                    <span>#react #firebase #tailwind #javascript</span>
                    <div className='w-full  flex gap-6 mt-2 justify-start items-center'>
                        <button className='px-6 py-2 cursor-pointer hover:bg-blue-600 duration-200 ease-in bg-primary rounded-full text-white font-medium uppercase font-outfit'>Live Demo</button>
                        <button className='px-4 py-1.5 cursor-pointer hover:bg-secondary duration-200 ease-in hover:text-white border-2 border-secondary bg-transparent rounded-full text-secondary font-medium uppercase font-outfit'>Source Code</button>
                    </div>
                </div>
                <img className='w-full h-full bottom-0 left-0 absolute' src={projectBG} alt="BG" />
            </div>

            {/* <div className='w-full flex flex-col justify-center items-center py-6 '>
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
            <div className='w-full flex flex-col items-center '>
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
            </div> */}
        </div>
    )
}

export default Project
