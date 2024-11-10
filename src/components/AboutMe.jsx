import React, { useEffect, useRef } from "react";
import { aboutImage } from "../assets/logos";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  const scrollAnimationVariants = {
    hidden: { x: -1500 },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        bounce: 0.5,
        delay: 0,
      },
    },
  };

  return (
    <div
      className="w-full min-h-screen mx-auto flex flex-col justify-center items-center py-10"
      ref={ref}
    >
      <div className="max-w-screen-xl mx-auto bg-gradient-to-r relative overflow-hidden h-[600px] from-gray-50 via-gray-200 to-gray-50  rounded-xl flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="w-[90%] md:w-1/2 order-1 md:order-2 h-full flex flex-col justify-center items-center">
          <motion.div
            className="w-full items-center flex justify-center gap-6"
            initial="hidden"
            animate={animationControls}
            variants={scrollAnimationVariants}
          >
            <SectionHeading title="About me" subTitle="get to know me" />
          </motion.div>
          <p className="w-full md:w-2/3 text-center md:text-justify font-outfit font-light mt-16">
            Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper
            tortor mauris porta mi viverra tellus. Quisque interdum dui etiam
            laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor
            turpis dui pharetra eget mauris laoreet.Lorem ipsum dolor sit amet
            consectetur. Tellus quisque lacus semper tortor mauris porta mi
            viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris
            eget mi eget.
          </p>
        </div>
        <div className="w-full md:w-[80%] order-2 md:order-1 mt-10 md:mt-0">
          <img
            className="object-cover w-2/3 absolute right-[39%] bottom-0"
            src={aboutImage}
            alt="about image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
