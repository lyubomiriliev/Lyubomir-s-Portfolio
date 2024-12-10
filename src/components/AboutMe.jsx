import React, { useEffect, useRef } from "react";
import { aboutImage } from "../assets/logos";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AboutMe = ({ containerVariants, itemVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  const aboutVariant = {
    hidden: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div
      className="w-full mx-auto flex flex-col justify-center items-center py-4 lg:py-10"
      ref={ref}
    >
      <motion.div
        className="max-w-screen-xl mx-auto bg-gradient-to-r relative lg:overflow-hidden h-[600px] rounded-[24px] lg:bg-gradient-to-bl lg:from-slate-100 lg:via-slate-50 lg:to-slate-200 lg:shadow-sm flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={animationControls}
      >
        {/* Text and Heading Section */}
        <div className="w-[90%] md:w-1/2 order-1 md:order-2 h-full flex flex-col justify-start py-10 items-center">
          <SectionHeading title="About me" subTitle="get to know me" />
          <motion.p
            className="w-full md:w-2/3 text-center md:text-justify font-outfit font-light mt-8"
            variants={aboutVariant}
          >
            Lorem ipsum dolor sit amet consectetur. Tellus quisque lacus semper
            tortor mauris porta mi viverra tellus. Quisque interdum dui etiam
            laoreet sed. Sed mauris eget mi eget. Dui facilisis nunc porttitor
            turpis dui pharetra eget mauris laoreet. Lorem ipsum dolor sit amet
            consectetur. Tellus quisque lacus semper tortor mauris porta mi
            viverra tellus. Quisque interdum dui etiam laoreet sed. Sed mauris
            eget mi eget.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-[80%] order-2 md:order-1 mt-10 md:mt-0"
          variants={itemVariants}
        >
          <motion.img
            className="object-cover w-full absolute left-0 lg:-left-24 -bottom-4 lg:-bottom-80"
            src={aboutImage}
            alt="about image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
