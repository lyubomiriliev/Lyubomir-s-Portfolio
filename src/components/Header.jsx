import React from 'react'
import { lyuboLogo } from '../assets/logos'

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-5'>
            <div className='w-full flex items-center justify-around'>
                <div>
                    <img className='w-60' src={lyuboLogo} alt="Logo" />
                </div>
                <div>
                    <ul className='flex space-x-8 font-bold text-blue-600 uppercase text-xl'>
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
