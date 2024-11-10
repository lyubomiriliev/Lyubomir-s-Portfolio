import React from "react";
import SectionHeading from "./SectionHeading";
import { educationData } from "../utils/constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className="w-full max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center justify-center mx-auto py-10 px-4 lg:px-0">
      <SectionHeading
        title="EDUCATION & EXPERIENCE"
        subTitle="journey roadmap"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8">
        {educationData.map((item, index) => (
          <ExperienceCard
            key={index}
            years={item.years}
            name={item.name}
            location={item.location}
            level={item.level}
            role={item.role}
            skills={item.skills || item.skillsLearned}
            description={item.description}
            achievements={item.achievements}
            customText={
              index === 0 ? "Education" : index === 2 ? "Experience" : null
            }
            customText2={index === 1 ? "cation" : index === 3 ? "rience" : null}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
