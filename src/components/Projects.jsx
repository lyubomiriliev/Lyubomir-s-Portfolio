import React, { useRef, useEffect } from "react";
import Project from "./Project";
import { motion, useInView, useAnimation } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        staggerChildren: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 200, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <section className="w-full max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center justify-center mx-auto py-10">
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center">
        <SectionHeading subTitle="SHOWCASE OF MY WORK" title="PROJECTS" />
      </div>
      <motion.div
        initial="hidden"
        animate={animationControls}
        variants={containerVariants}
        className="w-full flex flex-col justify-center items-center mx-auto"
        ref={ref}
      >
        <div className="w-full md:max-w-screen-xl mx-auto items-center grid grid-cols-1 lg:grid-cols-2 py-10">
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
                techStack={project.techStack}
                projectLink={project.url}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
