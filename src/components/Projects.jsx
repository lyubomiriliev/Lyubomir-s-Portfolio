import React, { useRef, useEffect } from "react";
import Project from "./Project";
import { motion, useInView, useAnimation, delay } from "framer-motion";
import { projectsData } from "../utils/constants";
import SectionHeading from "./SectionHeading";

const Projects = () => {
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
    <div
      className="w-full flex flex-col justify-center items-center mx-auto"
      ref={ref}
    >
      <motion.div
        className="w-full md:w-2/3 flex flex-col justify-center items-center"
        initial="hidden"
        animate={animationControls} // Control animation using animationControls
        variants={scrollAnimationVariants} // Use defined variants for the animation
      >
        <SectionHeading subTitle="SHOWCASE OF MY WORK" title="PROJECTS" />
      </motion.div>

      <div className="w-full md:max-w-screen-xl mx-auto items-center grid md:grid-cols-2 py-10">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            logoSrc={project.logoSrc}
            title={project.title}
            subTitle={project.subTitle}
            description={project.description}
            technologies={project.technologies}
            imgSrc={project.imgSrc}
            primaryButtonLabel={project.primaryButtonLabel}
            secondaryButtonLabel={project.secondaryButtonLabel}
            testAccEmail={project.testAccEmail}
            testAccPw={project.testAccPw}
            webLink={project.webLink}
            sourceCode={project.sourceCode}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
