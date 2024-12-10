import React, { useState } from "react";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the menu
import { lyuboLogo } from "../assets/logos";

const Header = () => {
  const [activeSession, setActiveSession] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  const SCROLL_DURATION = 600;
  const HEADER_OFFSET = -80;

  const scrollToSection = (section) => {
    setActiveSession(section);
    setMenuOpen(false); // Close mobile menu after selecting a link

    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: SCROLL_DURATION,
        offset: HEADER_OFFSET,
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -200, scale: 0 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-full flex flex-col md:flex-row h-26 md:h-20 fixed top-0 z-50"
    >
      <div className="w-full top-0 h-[4.5rem] border-white border-opacity-40 mx-auto flex items-center justify-between py-2 md:py-0">
        {/* Desktop Menu */}
        <div className="hidden md:flex w-[90%] px-4 md:w-[40%] h-[48px] md:h-[56px] backdrop-blur-[0.5rem] rounded-full mx-auto justify-center items-center bg-gradient-to-r from-purple-900/60 via-primary/60 to-purple-800/60 shadow-lg">
          <ul className="w-full flex justify-around font-outfit font-light text-white uppercase text-base cursor-pointer">
            {[
              "home",
              "about",
              "experience",
              "services",
              "projects",
              "contact",
            ].map((section, index, array) => (
              <React.Fragment key={section}>
                <li
                  className={activeSession === section ? "font-bold" : ""}
                  onClick={() => scrollToSection(section)}
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
        <div className="md:hidden flex items-center justify-end w-full px-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-primary z-50"
          >
            {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
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
