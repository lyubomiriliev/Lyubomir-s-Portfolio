import React, { useRef, useEffect } from "react";
import Project from "./Project";
import { motion, useInView, useAnimation } from "framer-motion";
import { projectsData } from "../utils/constants";
import SectionHeading from "./SectionHeading";

const Projects = ({ containerVariants, itemVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  return (
    <motion.div
      initial="hidden"
      animate={animationControls}
      variants={containerVariants}
      className="w-full flex flex-col justify-center items-center mx-auto"
      ref={ref}
    >
      <motion.div
        className="w-full md:w-2/3 flex flex-col justify-center items-center"
        variants={itemVariants}
      >
        <SectionHeading subTitle="SHOWCASE OF MY WORK" title="PROJECTS" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="w-full md:max-w-screen-xl mx-auto items-center grid md:grid-cols-2 py-10"
      >
        {projectsData.map((project, index) => (
          <motion.div variants={itemVariants} key={index}>
            <Project
              logoSrc={project.logoSrc}
              title={project.title}
              subTitle={project.subTitle}
              description={project.description}
              technologies={project.technologies}
              imgSrc={project.imgSrc}
              mobileImg={project.mobileImg}
              primaryButtonLabel={project.primaryButtonLabel}
              secondaryButtonLabel={project.secondaryButtonLabel}
              testAccEmail={project.testAccEmail}
              testAccPw={project.testAccPw}
              webLink={project.webLink}
              sourceCode={project.sourceCode}
              techStack={project.techStack}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
