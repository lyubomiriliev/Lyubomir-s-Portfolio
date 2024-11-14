import React, { useState } from "react";
import { scroller } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [activeSession, setActiveSession] = useState("home");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const SCROLL_DURATION = 600;
  const HEADER_OFFSET = -80;

  const scrollToSection = (section) => {
    setActiveSession(section);

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
      variants={itemVariants}
      className="w-full flex flex-col md:flex-row h-26 md:h-20 fixed top-0 z-50"
    >
      <div className="w-full top-0 h-[4.5rem] border-white border-opacity-40 mx-auto flex items-center justify-between py-2 md:py-0 flex-col md:flex-row">
        <div className="w-[85%] md:w-1/3 h-[48px] md:h-[56px] backdrop-blur-[0.5rem] rounded-full mx-auto justify-center items-center flex bg-gradient-to-r from-purple-900/60 via-primary/60 to-purple-800/60 shadow-lg ">
          <ul className="w-full flex justify-around px-4 font-outfit font-light text-white uppercase text-base md:text-xl cursor-pointer">
            <li
              className={activeSession === "home" ? "font-bold" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </li>
            <div className="border-r-2"></div>
            <li
              className={activeSession === "about" ? "font-bold" : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </li>
            <div className="border-r-2"></div>

            <li
              className={activeSession === "projects" ? "font-bold" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <div className="border-r-2"></div>

            <li
              className={activeSession === "contact" ? "font-bold" : ""}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
