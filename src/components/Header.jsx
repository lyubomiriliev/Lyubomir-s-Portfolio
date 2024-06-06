import React from 'react'
import { lyuboLogo } from '../assets/logos'
import { Link } from 'react-scroll'

const Header = ({ activeSession }) => {
    return (
        <div className='w-full flex flex-col md:flex-row h-26 md:h-28 bg-white sticky top-0 z-50'>
            <div className='w-2/3 mx-auto flex items-center justify-between py-2 md:py-0 flex-col md:flex-row'>
                <div>
                    <img className='w-52 md:w-60' src={lyuboLogo} alt="Logo" />
                </div>
                <div className='mt-5 md:mt-0'>
                    <ul className='flex space-x-6 md:space-x-8 font-outfit font-light text-primary uppercase text-xl'>
                        <li className={activeSession === 'top' ? 'font-bold' : ''}>
                            <Link to="top" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className={activeSession === 'about' ? 'font-bold' : ''}>
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className={activeSession === 'projects' ? 'font-bold' : ''}>
                            <Link to="projects" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li className={activeSession === 'contact' ? 'font-bold' : ''}>
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
