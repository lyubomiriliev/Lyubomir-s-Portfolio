import React from 'react'

const Project = ({ logoSrc, title, description, imgSrc }) => {
    return (
        <div className='w-full flex flex-col md:flex-row'>
            <div className='w-full flex flex-col justify-center items-center py-6'>
                <div className='flex justify-center items-center md:items-start md:justify-end w-full md:mr-10 space-x-6 '>
                    <img className='w-16 mb-4 md:mb-0 md:mr-4' src={logoSrc} alt="Project logo" />
                    <h2 className='text-secondary font-outfit font-bold text-xl md:text-3xl mb-2'>{title}</h2>
                </div>
                <div className='flex justify-center items-center md:justify-end md:mr-5'>
                    <p className='w-2/3 md:w-[55%] mt-2 md:text-right text-gray-600'>{description}</p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full'>
                    <img className='w-2/3 mx-auto md:mt-24' src={imgSrc} alt="" />
                </div>
                <div className='w-full md:w-2/3 mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center'>
                    <button className='w-40 md:w-full bg-primary py-2 text-white font-outfit font-bold text-2xl rounded-full'>Live Demo</button>
                    <button className='w-40 md:w-full bg-transparent py-2 text-secondary border-[2px] border-secondary font-outfit font-bold text-2xl rounded-full'>Source Code</button>
                </div>
            </div>
        </div>
    )
}

export default Project
