import React from 'react'
import { githubSecondary, heroBG, heroBG2, heroImagePNG2, heroTitle, linkedinSecondary, lyuboLogo } from '../assets/logos'

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
        <div className='max-w-screen-xl mx-auto mt-6 flex flex-col md:flex-row items-center relative'>
            <div className='flex flex-col p-4 md:p-0 z-20'>
            <div onClick={scrolltoTop}>
                        <img className='w-52 md:w-60 ml-2 mb-5 hidden md:flex' src={lyuboLogo} alt="Logo" />
                    </div>
                <img className='w-3/4 md:w-full' src={heroTitle} alt="Hero Title" />
                {/* <h2 className='w-full bg-gray-300 font-bold font-outfit text-6xl max-w-[350px] text-secondary'>Front-End React Developer</h2> */}
                <div className='w-1/4 md:w-1/3 ml-4 mt-2 h-[2px] bg-secondary'></div>
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
            <img className='w-full md:w-2/3 z-20 ' src={heroImagePNG2} alt="Hero Image" />
        </div>
        <img src={heroBG} alt="Hero Background" className='absolute -top-[100px] -z-20 -left-[600px] w-full mx-auto' />
        <img src={heroBG2} alt="Hero Background" className='absolute -top-[350px] -z-30 -right-[100px] w-full mx-auto'/>
        </>
    )
}

export default Hero
