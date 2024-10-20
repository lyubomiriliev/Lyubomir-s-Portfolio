import React from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Header = ({ activeSession, onSectionClick }) => {


    return (
        <div className='w-full flex flex-col md:flex-row h-26 md:h-20 fixed top-0 z-50'>
            <div className='w-full top-0 h-[4.5rem] border-white border-opacity-40 mx-auto flex items-center justify-between py-2 md:py-0 flex-col md:flex-row'>
                <div className='w-[90%] md:w-1/3 h-[48px] backdrop-blur-[0.5rem] rounded-2xl mx-auto justify-center items-center flex bg-gradient-to-r from-purple-900/60 via-primary/60 to-purple-800/60 shadow-lg '>
                    <ul className='w-full flex justify-around px-4 font-outfit font-light text-white uppercase text-base md:text-xl cursor-pointer'>
                        <li className={activeSession === 'home' ? 'font-bold' : ''} onClick={() => onSectionClick('home')}>
                            <ScrollLink to="home" smooth={true} duration={400}>
                                Home
                            </ScrollLink>
                        </li>
                        <div className='border-r-2'></div>
                        <li className={activeSession === 'about' ? 'font-bold' : ''} onClick={() => onSectionClick('about')}>
                            <ScrollLink to="about" smooth={true} duration={400}>
                                About
                            </ScrollLink>
                        </li>
                        <div className='border-r-2'></div>

                        <li className={activeSession === 'projects' ? 'font-bold' : ''} onClick={() => onSectionClick('projects')}>
                            <ScrollLink to="projects" smooth={true} duration={400}>
                                Projects
                            </ScrollLink>
                        </li>
                        <div className='border-r-2'></div>

                        <li className={activeSession === 'contact' ? 'font-bold' : ''} onClick={() => onSectionClick('contact')}>
                            <ScrollLink to="contact" smooth={true} duration={400}>
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Header
