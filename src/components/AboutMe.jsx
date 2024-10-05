import React, { useEffect, useRef } from 'react'
import { aboutImage } from '../assets/logos'
import { motion, useAnimation, useInView } from "framer-motion";


const AboutMe = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const animationControls = useAnimation(); 

    useEffect(() => {
        if (isInView) {
            animationControls.start('visible');
        }
    }, [isInView, animationControls]);


    const scrollAnimationVariants = {
        hidden: { x: -1500 },
        visible: {
            x: 0,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                bounce: 0.5,
                delay: 0,
            },
        },
    };

    
    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center py-10' ref={ref}>
            <div className='w-full flex flex-col justify-center items-center'>
                    <motion.div className='w-full items-center flex justify-center gap-6'
                        initial="hidden"
                        animate={animationControls}
                        variants={scrollAnimationVariants}
                    >
                        <span className='font-outfit font-light text-5xl text-primary'>#01</span>
                        <div className='w-[3px] h-[36px] bg-primary'></div>
                        <h2 className='text-primary font-outfit font-bold text-5xl uppercase'>About Me</h2>
                    </motion.div>
                </div>
            <div className='max-w-screen-xl mx-auto bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50  rounded-lg flex flex-col md:flex-row items-center justify-between mt-10'>
                <div className='w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0'>
                    <img className='object-cover w-full' src={aboutImage} alt="about image" />
                </div>
                <div className='w-[90%] md:w-1/2 order-1 md:order-2 h-full flex flex-col justify-center items-center'>
                
                    <p className='w-full md:w-2/5 text-center md:text-right font-outfit font-light mt-16'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet.Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe