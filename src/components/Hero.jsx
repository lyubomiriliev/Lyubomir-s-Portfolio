import React from "react";
import {
  githubSecondary,
  heroBlur,
  heroImageAnimate,
  heroImagePNG4,
  linkedinSecondary,
  lyuboLogo,
} from "../assets/logos";
import { motion } from "framer-motion";
import Button from "./Button";
import { scroller } from "react-scroll";
import TechStack from "./TechStack";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/lyubomir-iliev-cv.pdf";
    link.download = "lyubomir-iliev-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrolltoTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  const scrollToPortfolio = () => {
    scroller.scrollTo("projects", {
      smooth: true,
      duration: 600, // Adjust the duration as needed
      offset: -80, // Adjust offset based on header height
    });
  };

  const scrollAnimation = {
    animate: {
      y: [0, -20, 0],
    },
    transition: {
      duration: 4, // Total duration of the scroll (in seconds)
      ease: "easeInOut", // Smooth easing for the movement
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const titleVariant = {
    hidden: { opacity: 0, scale: 0.7 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const imageAnimation = {
    initial: { scale: 0.5, y: 170, opacity: 0 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }, // Smooth transition
    },
  };

  return (
    <>
      <div className="max-w-screen-xl 2xl:max-w-screen-xl mx-auto flex flex-col md:mt-20 md:flex-row items-center relative">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <div className="flex flex-col items-center md:items-start p-2 md:-mt-20 md:p-0 z-20">
            <motion.div variants={titleVariant} initial="hidden" animate="show">
              <div className="select-none" onClick={scrolltoTop}>
                <img
                  className="w-64 md:w-80 ml-2 mb-5"
                  src={lyuboLogo}
                  alt="Logo"
                />
              </div>
            </motion.div>

            <motion.h3
              className="font-bold flex flex-col justify-center items-start font-outfit text-[50px] lg:text-[51px] leading-tight uppercase text-center lg:text-left lg:pl-2 select-none text-secondary"
              variants={titleVariant}
            >
              <span className="pl-1">Front-End</span>
              <span className="text-[94px] font-extrabold leading-[70px] tracking-tight text-primary">
                React
              </span>
              <span className="pl-1">Developer</span>
            </motion.h3>
            <div className="hidden md:block">
              <motion.p
                variants={itemVariants}
                className="w-3/4 md:w-full ml-2 mt-8 text-primary font-outfit font-light text-lg"
              >
                Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus
                semper tortor mauris porta.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex items-center w-full py-4 pl-3 gap-4"
              >
                <Button handleClick={handleDownload} button="Download Cv" />
                <Button
                  handleClick={scrollToPortfolio}
                  button="See my work"
                  variant="outline"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-start items-center mt-3 ml-4 gap-4"
              >
                <a
                  href="https://www.linkedin.com/in/lyubomir-iliev-37ab32305/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-10 md:w-14 hover:scale-110 duration-300"
                    src={linkedinSecondary}
                    alt="linkedin logo"
                  />
                </a>
                <a
                  href="https://github.com/lyubomiriliev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-10 md:w-14 hover:scale-110 duration-300"
                    src={githubSecondary}
                    alt="github logo"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.img
          className="w-full -mt-4 md:w-2/3 z-20"
          src={heroImagePNG4}
          variants={imageAnimation}
          initial="initial"
          animate="animate"
          alt="Hero Image"
        />
        <motion.img
          className="w-full -mt-4 md:w-2/3 right-0 bottom-0 z-20 absolute"
          src={heroImageAnimate}
          initial="initial"
          animate="animate"
          alt="Hero Image"
          {...scrollAnimation}
        />
      </div>
      <img
        src={heroBlur}
        alt="Hero Background"
        className="absolute top-0 left-0 -z-20 w-full h-[70vh] lg:h-full object-cover opacity-80"
      />
      <div className="sticky">
        <TechStack />
      </div>
    </>
  );
};

export default Hero;
