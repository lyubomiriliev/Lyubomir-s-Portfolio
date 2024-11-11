import React from "react";
import TimelineItem from "./TimelineItem";
import { educationData } from "../utils/constants";
import SectionHeading from "./SectionHeading";

const Timeline = () => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-8 mx-auto h-full justify-start px-10 lg:px-2 py-10">
      <SectionHeading
        title="Education & Experience"
        subTitle="Journey Roadmap"
      />
      <div className="space-y-4 border-l-2 border-primary border-1">
        {educationData.map((item, index) => (
          <TimelineItem
            key={index}
            years={item.years}
            title={item.name}
            location={item.location}
            level={item.level}
            role={item.role}
            skills={item.skills || item.skillsLearned}
            achievements={item.achievements}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
