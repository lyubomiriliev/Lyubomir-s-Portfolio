import React from 'react'

import { blackSea, diagonalLines } from '../assets/logos'


const Projects = () => {
    return (
        <div className='w-full bg-red-100 relative'>
            <div className='max-w-screen-xl flex flex-col justify-start mx-auto bg-red-100 relative'>
                <div className='w-full mt-10 ml-60'>
                    <h2 className='py-2 bg-primary w-2/3 md:w-[10%] md:mr-5 rounded-lg justify-center flex text-white font-outfit font-bold text-2xl mb-5'>Projects</h2>
                </div>
                <div className='bg-red-200 flex flex-col w-1/3'>
                    <div className='flex gap-6'>
                        <img className='w-16' src={blackSea} alt="blackSea logo" />
                        <h2 className='text-right'>BlackSea Electromobility</h2>
                    </div>
                    <div className='w-2/3'>
                        <p className='text-right'>Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper tortor mauris porta mi viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
