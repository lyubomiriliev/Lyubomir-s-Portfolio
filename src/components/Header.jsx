import React, { useState } from 'react'
import { lyuboLogo } from '../assets/logos'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'

const Header = ({ activeSession, onSectionClick }) => {

    const scrolltoTop = () => {
        scroll.scrollToTop({ smooth: true });
    }

    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const handleLinkClick = (section) => {
        onSectionClick(section);
        setShowBurgerMenu(false);
    };


    return (
        <div className='w-full flex flex-col md:flex-row h-26 md:h-20 sticky top-0 z-50'>

            {/* DESKTOP  */}
            <div className='w-full fixed top-0 h-[4.5rem] border-white border-opacity-40 mx-auto flex items-center justify-between py-2 md:py-0 flex-col md:flex-row'>
                <div className='w-1/3 h-[48px] backdrop-blur-[0.5rem] rounded-2xl mx-auto justify-center items-center hidden md:flex bg-gradient-to-r from-purple-900 via-primary/60 to-purple-800 '>
                    <ul className='w-full flex justify-around px-4 font-outfit font-light text-white uppercase text-xl cursor-pointer'>
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

                {/* MOBILE MENU */}
                <div className='md:hidden flex justify-between w-full px-6 items-center'>
                <div onClick={scrolltoTop}>
                        <img className='w-56' src={lyuboLogo} alt="Logo" />
                    </div>
                    <img src="/menu.svg" alt="burgerMenu" className='cursor-pointer w-8' onClick={() => setShowBurgerMenu(!showBurgerMenu)} />
                </div>


                {/* Mobile Dropdown */}
                {showBurgerMenu && (
                    <div className='absolute top-16 left-0 w-full flex bg-gradient-to-r from-purple-900 via-primary to-purple-800 z-50 shadow-md md:hidden'>
                        <ul className='w-full flex flex-col justify-between items-center px-6 py-4 text-white font-outfit font-regular uppercase'>
                            {['home', 'about', 'projects', 'contact'].map((section) => (
                                <li
                                key={section}
                                className={`py-2 ${activeSession === section ? 'font-bold' : ''}`}
                                >
                                    <ScrollLink to={section} smooth={true} duration={400} onSetActive={() => handleLinkClick(section)}>
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Header
