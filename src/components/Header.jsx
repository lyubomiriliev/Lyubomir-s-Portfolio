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

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="w-full flex flex-col md:flex-row h-26 md:h-20 fixed top-0 z-50"
    >
      <div className="w-full top-0 h-[4.5rem] border-white border-opacity-40 mx-auto flex items-center justify-between py-2 md:py-0">
        {/* Desktop Menu */}
        <div className="hidden md:flex w-[90%] md:w-[50%] h-[48px] md:h-[56px] backdrop-blur-[0.5rem] rounded-full mx-auto justify-center items-center bg-gradient-to-r from-purple-900/60 via-primary/60 to-purple-800/60 shadow-lg">
          <ul className="w-full flex justify-around px-4 font-outfit font-light text-white uppercase text-base cursor-pointer">
            {["home", "about", "experience", "services", "projects", "contact"].map((section) => (
              <li
                key={section}
                className={activeSession === section ? "font-bold" : ""}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end w-full px-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">
            {menuOpen ? <FiX className="text-black" /> : <FiMenu className="text-black" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white font-outfit text-xl uppercase z-40"
        >
          {["home", "about", "experience", "services", "projects", "contact"].map((section) => (
            <div
              key={section}
              className={`cursor-pointer ${activeSession === section ? "font-bold" : ""}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
