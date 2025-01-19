import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { headerLinks } from "../utils/constants";
import { lyuboLogo } from "../assets/logos";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [activeSession, setActiveSession] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const SCROLL_DURATION = 600;
  const HEADER_OFFSET = -80;

  useEffect(() => {
    const sections = headerLinks.map((link) =>
      document.getElementById(link.toLowerCase())
    );
    const observerOptions = {
      root: null,
      threshold: 0.6, // 60% of the section must be visible to trigger
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSession(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (section) => {
    setActiveSession(section);
    setMenuOpen(false); // Close mobile menu

    if (location.pathname !== "/") {
      // If on a different page, navigate home first
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: SCROLL_DURATION,
          offset: HEADER_OFFSET,
        });
      }, 300); // Delay scrolling to ensure navigation completes
    } else {
      // If already on home page, scroll immediately
      scroller.scrollTo(section, {
        smooth: true,
        duration: SCROLL_DURATION,
        offset: HEADER_OFFSET,
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="w-full flex flex-col md:flex-row h-26 md:h-20 fixed top-0 z-50"
    >
      <div className="w-full top-0 h-[4.5rem] border-white border-opacity-40 mx-auto flex items-center justify-between py-2 md:py-0">
        {/* Desktop Menu */}
        <div className="hidden md:flex w-[90%] px-4 md:w-[40%] h-[48px] md:h-[56px] backdrop-blur-[0.5rem] rounded-full mx-auto justify-center items-center bg-gradient-to-r from-purple-900/60 via-primary/60 to-purple-800/60 shadow-lg">
          <ul className="w-full flex justify-around font-outfit font-light text-white uppercase text-base cursor-pointer select-none">
            {headerLinks.map((section, index, array) => (
              <React.Fragment key={section}>
                <li
                  className={activeSession === section ? "font-bold" : ""}
                  onClick={() => scrollToSection(section.toLowerCase())}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
                {index < array.length - 1 && (
                  <div className="border-l border-white h-6"></div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden h-20 flex items-center justify-center backdrop-blur-md bg-white/50 w-full px-4 relative">
          <img
            onClick={() => scrollToSection}
            src={lyuboLogo}
            alt="Logo"
            className="w-64"
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-primary z-50 absolute top-6 left-6"
          >
            <FiMenu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed inset-0 bg-secondary backdrop-blur-sm bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white font-outfit text-2xl uppercase z-40"
        >
          <div className="absolute top-6 left-6 z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-white"
            >
              <FiX size={32} />
            </button>
          </div>
          {[
            "home",
            "about",
            "experience",
            "services",
            "projects",
            "contact",
          ].map((section, index, array) => (
            <React.Fragment key={section}>
              <div
                key={index}
                className={`cursor-pointer ${
                  activeSession === section ? "font-bold" : ""
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
