import React from 'react'
import { githubSecondary, heroBlur, heroImagePNG2, heroTitle, linkedinSecondary, lyuboLogo } from '../assets/logos'

const Hero = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/lyubomir-iliev-cv.pdf'
        link.download = "lyubomir-iliev-cv.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrolltoTop = () => {
        scroll.scrollToTop({ smooth: true });
    }

    return (
        <>
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center relative'>
            <div className='flex flex-col items-center md:items-start p-4 mt-16 md:-mt-20 md:p-0 z-20'>
                <div onClick={scrolltoTop}>
                            <img className='w-52 md:w-60 ml-2 mb-5' src={lyuboLogo} alt="Logo" />
                </div>
                <img className='w-full hidden md:flex' src={heroTitle} alt="Hero Title" />
                <h3 className='font-bold md:hidden font-outfit text-5xl text-center text-secondary'>Front-End React Developer</h3>
                <div className='hidden md:block'>
                    <div className='w-1/4 md:w-1/3 hidden ml-4 mt-2 h-[2px] bg-secondary'></div>
                    <p className='w-3/4 md:w-2/3 ml-4 mt-8 text-primary font-outfit font-light text-lg'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta.</p>
                    <div className='flex items-center w-2/3 text-primary hover:text-secondary duration-300'>
                        <span onClick={handleDownload} className='w-3/4 md:w-2/3 ml-4 mt-4  font-medium font-outfit text-xl uppercase'>Download CV</span>
                    </div>
                    <div className='flex justify-start items-center mt-3 ml-4 gap-4'>
                        <a href="https://www.linkedin.com/in/lyubomir-iliev-37ab32305/" target="_blank" rel="noopener noreferrer">
                        <img className='w-10 md:w-14 hover:scale-110 duration-300' src={linkedinSecondary} alt="linkedin logo" />
                        </a>
                        <a href="https://github.com/lyubomiriliev" target="_blank" rel="noopener noreferrer">
                        <img className='w-10 md:w-14 hover:scale-110 duration-300' src={githubSecondary} alt="github logo" />
                        </a>

                    </div>
                </div>
            </div>
            <img className='w-full -mt-4 md:w-2/3 z-20' src={heroImagePNG2} alt="Hero Image" />
        </div>
        <img src={heroBlur} alt="Hero Background" className='absolute top-0 left-0 -z-20 w-full h-full object-cover opacity-80' />
        </>
    )
}

export default Hero
