import React from "react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { softSkills } from "../utils/constants";
import { div } from "framer-motion/client";

const Services = () => {
  return (
    <section className="w-full max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col items-center justify-center mx-auto py-10">
      <SectionHeading title="services" subTitle="What i provide" />
      <div className="grid grid-cols-1 lg:flex w-full justify-center items-center mt-10 gap-6 px-4 lg:px-0">
        <ServiceCard
          title="Front-End development"
          skills={[
            "Component-Driven Development",
            "Web Application Development",
            "Single Page Applications (SPA)",
            "API Integration",
            "Performance Optimization",
            "Interactive UI Components",
          ]}
        />
        <ServiceCard
          title="Branding and Web design"
          skills={[
            "Responsive and Mobile-First Design",
            "Proficient in UX/UI design",
            "Prototyping and Wireframing",
            "Visual Consistency",
            "Typography and Color Theory",
            "Intuitive Interfaces",
          ]}
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
