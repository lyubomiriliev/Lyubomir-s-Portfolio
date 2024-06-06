import React from 'react'
import { aboutImage, triangles } from '../assets/logos'

const AboutMe = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between mt-10'>
            <div className='w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0'>
                <img src={aboutImage} alt="about image" />
            </div>
            <div className='w-2/3 md:w-1/2 order-1 md:order-2 h-full flex flex-col justify-center items-center relative'>
                <div>
                    <img className='w-[20%] absolute -top-24 right-14' src={triangles} alt="triangles decoration" />
                </div>
                <div className='w-full items-center flex justify-center mt-10'>
                    <h2 className='py-2 bg-primary w-2/3 md:w-[30%] md:mr-5 rounded-lg justify-center flex text-white font-outfit font-bold text-2xl mb-5'>About Me:</h2>
                </div>
                <p className='w-full md:w-2/6 text-center md:text-left'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet.Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget.</p>
            </div>
        </div>
    )
}

export default AboutMe