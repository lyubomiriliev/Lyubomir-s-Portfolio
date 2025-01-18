import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { softSkills } from "../utils/constants";
import { motion, useInView, useAnimation } from "framer-motion";
import ServiceCardDesign from "./ServiceCardDesign";
import FlipCard from "./FlipCard";

const Services = ({ containerVariants, itemVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  return (
    <section
      ref={ref}
      className="w-full max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center justify-center mx-auto"
    >
      <div
        className="w-full md:w-2/3 flex flex-col justify-center items-center"
        initial="hidden"
        animate={animationControls} // Control animation using animationControls
        variants={containerVariants}
      >
        <SectionHeading title="services" subTitle="What i provide" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={animationControls}
        className="grid grid-cols-1 lg:flex w-full justify-center items-center mt-10 gap-6 px-4 lg:px-0"
      >
        <motion.div variants={itemVariants}>
          <FlipCard
            title="<div className="
            underTittle="Front-End-Development"
            closeTag=">"
            titleEnd="</div>"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ServiceCardDesign />
        </motion.div>
      </motion.div>
      <h1 className="text-4xl text-secondary font-outfit font-bold py-6 uppercase">
        Personal Skills
      </h1>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={animationControls}
        className="w-full max-w-screen-lg grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 lg:rounded-xl px-4 justify-start items-center"
      >
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:justify-center items-center text-secondary py-4 space-y-2 group"
          >
            <img
              className="w-14 h-14 object-cover duration-300 ease-out"
              src={skill.logo}
              alt={skill.name}
            />
            <span className="w-full text-center font-outfit font-light text-base lg:text-lg uppercase ">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
