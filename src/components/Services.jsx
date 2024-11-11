import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCardDev";
import { skillsDev, softSkills } from "../utils/constants";
import { motion, useInView, useAnimation, delay } from "framer-motion";
import ServiceCardDev from "./ServiceCardDev";
import ServiceCardDesign from "./ServiceCardDesign";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  const scrollAnimationVariants = {
    hidden: { x: 1500 },
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
    <section
      ref={ref}
      className="w-full max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center justify-center mx-auto py-10"
    >
      <motion.div
        className="w-full md:w-2/3 flex flex-col justify-center items-center"
        initial="hidden"
        animate={animationControls} // Control animation using animationControls
        variants={scrollAnimationVariants} // Use defined variants for the animation
      >
        <SectionHeading title="services" subTitle="What i provide" />
      </motion.div>
      <div className="grid grid-cols-1 lg:flex w-full justify-center items-center mt-10 gap-6 px-4 lg:px-0">
        <ServiceCardDev
          title="<div className="
          underTittle="Front-End-Development"
          closeTag=">"
          titleEnd="</div>"
        />
        <ServiceCardDesign
          title="<div className="
          underTittle="Front-End-Development"
          closeTag=">"
          titleEnd="</div>"
        />
      </div>
      <h1 className="text-3xl text-secondary font-outfit font-bold py-6 uppercase">
        Personal Skills
      </h1>
      <div className="w-full max-w-screen-lg text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center gap-4 px-4 lg:px-0">
        {softSkills.map((skill, index) => (
          <div className="w-full flex items-center bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40 rounded-xl text-white px-2 py-4 gap-2">
            <img
              className="w-10 h-10 p-1 object-cover"
              src={skill.logo}
              alt={skill.name}
            />
            <span
              className="font-outfit font-light text-xl  uppercase "
              key={index}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
