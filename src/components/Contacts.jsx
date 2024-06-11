import React from 'react'
import { splashLogo } from '../assets/logos'

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";

const Contacts = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../public/lyubomir-iliev-cv.pdf'
        link.download = "lyubomir-iliev-cv.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center'>
            <div className='w-full items-center flex justify-center mt-10 md:ml-10'>
                <h2 className='w-2/3 md:w-[30%] md:mr-5 mr-2 justify-center flex text-white font-outfit font-bold text-3xl mb-5'>Contact me:</h2>
                <img className='absolute -z-20 w-60 mb-4 ml-3 md:ml-0' src={splashLogo} alt="splash" />
            </div>
            <div className='w-full flex flex-col gap-6 md:gap-0 md:flex-row ml-40 md:ml-0 md:justify-around md:items-center mt-10 text-xl'>
                <div className='flex items-center gap-4 text-secondary font-outfit hover:text-primary duration-300'>
                    <CiLocationOn className='scale-150' />
                    <div className='flex flex-col'>
                        <span className='font-bold'>Location</span>
                        <p>Sofia, Bulgaria</p>
                    </div>
                </div>
                <div className="w-[2px] bg-secondary hidden md:flex h-12"></div>
                <div className='flex items-center gap-4 text-secondary font-outfit hover:text-primary duration-300'>
                    <MdOutlineEmail className='scale-150' />
                    <div className='flex flex-col'>
                        <span className='font-bold'>Email</span>
                        <p>iliev.lyubomir98@gmail.com</p>
                    </div>
                </div>
                <div className="w-[2px] bg-secondary hidden md:flex h-12"></div>
                <div onClick={handleDownload} className='flex items-center gap-4 text-secondary font-outfit hover:text-primary duration-300'>
                    <IoDownloadOutline className='scale-150' />
                    <div className='flex flex-col'>
                        <span className='font-bold'>Download</span>
                        <p>CV PDF</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
