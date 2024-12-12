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
      className="w-full max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center justify-center mx-auto py-10"
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
      <h1 className="text-3xl text-secondary font-outfit font-bold py-6 uppercase">
        Personal Skills
      </h1>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={animationControls}
        className="w-full max-w-screen-xl text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-4 px-4 lg:px-20"
      >
        {softSkills.map((skill, index) => (
          <div className="p-[2px] bg-gradient-to-r from-primary to-white rounded-[28px]">
            <div
              key={index}
              className="w-full flex lg:justify-center items-center bg-gradient-to-tr from-primary/90 via-primary/60 to-primary/50 hover:bg-primary rounded-[24px] text-white px-2 py-2 gap-2 group"
            >
              <img
                className="w-10 h-10 p-1 object-cover group-hover:scale-125 duration-300 ease-out"
                src={skill.logo}
                alt={skill.name}
              />
              <span className="font-outfit font-light text-xl uppercase ">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
