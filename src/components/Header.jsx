import React from 'react'
import { lyuboLogo } from '../assets/logos'

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-5 px-4 md:px-0'>
            <div className='w-full flex items-center justify-between py-2 md:py-0 flex-col md:flex-row'>
                <div>
                    <img className='w-52 md:w-60' src={lyuboLogo} alt="Logo" />
                </div>
                <div className='mt-10 md:mt-0'>
                    <ul className='flex space-x-6 md:space-x-8 font-outfit font-light text-primary uppercase text-xl'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
