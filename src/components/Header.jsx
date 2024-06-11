import React from 'react'
import { lyuboLogo } from '../assets/logos'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Header = ({ activeSession, onSectionClick }) => {

    const scrolltoTop = () => {
        scroll.scrollToTop({ smooth: true });
    }

    return (
        <div className='w-full flex flex-col md:flex-row h-26 md:h-28 bg-white sticky top-0 z-50'>
            <div className='w-2/3 mx-auto flex items-center justify-between py-2 md:py-0 flex-col md:flex-row'>
                <div onClick={scrolltoTop}>
                    <img className='w-52 md:w-60' src={lyuboLogo} alt="Logo" />
                </div>
                <div className='mt-5 md:mt-0'>
                    <ul className='flex space-x-6 md:space-x-8 font-outfit font-light text-primary uppercase text-xl'>
                        <li className={activeSession === 'home' ? 'font-bold' : ''} onClick={() => onSectionClick('home')}>
                            <ScrollLink to="home" smooth={true} duration={500}>
                                Home
                            </ScrollLink>
                        </li>
                        <li className={activeSession === 'about' ? 'font-bold' : ''} onClick={() => onSectionClick('about')}>
                            <ScrollLink to="about" smooth={true} duration={500}>
                                About
                            </ScrollLink>
                        </li>
                        <li className={activeSession === 'projects' ? 'font-bold' : ''} onClick={() => onSectionClick('projects')}>
                            <ScrollLink to="projects" smooth={true} duration={500}>
                                Projects
                            </ScrollLink>
                        </li>
                        <li className={activeSession === 'contact' ? 'font-bold' : ''} onClick={() => onSectionClick('contact')}>
                            <ScrollLink to="contact" smooth={true} duration={500}>
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
