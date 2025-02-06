import React, { useEffect, useRef } from "react";
import TimelineItem from "./TimelineItem";
import { educationData } from "../utils/constants";
import SectionHeading from "./SectionHeading";
import { useAnimation, useInView, motion } from "framer-motion";

const Timeline = ({ containerVariants, itemVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  return (
    <div
      ref={ref}
      className="w-full lg:w-2/3 flex flex-col gap-8 mx-auto h-full justify-start px-6 lg:px-2 py-10"
    >
      <div animate={animationControls}>
        <SectionHeading
          title="Experience & Education"
          subTitle="Journey Roadmap"
        />
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={animationControls}
          className="w-full flex border-primary mt-8 bg-white "
        >
          {educationData.slice(0, 1).map((item, index) => (
            <TimelineItem
              key={index}
              years={item.years}
              title={item.name}
              location={item.location}
              level={item.level}
              role={item.role}
              skills={item.skills || item.skillsLearned}
              achievements={item.achievements}
              workExperience={item.workExperience}
            />
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={animationControls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-5 border-primary bg-white py-6"
        >
          {educationData.slice(1, 5).map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TimelineItem
                years={item.years}
                title={item.name}
                location={item.location}
                level={item.level}
                role={item.role}
                skills={item.skills || item.skillsLearned}
                achievements={item.achievements}
                workExperience={item.workExperience}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
