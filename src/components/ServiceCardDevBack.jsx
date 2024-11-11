import React from "react";
import { skillsDevAfter } from "../utils/constants";

const ServiceCardDevBack = ({ title }) => {
  return (
    <div className="w-full flex flex-col relative overflow-hidden lg:w-[525px] h-[520px] lg:h-[650px] justify-start bg-gradient-to-r from-secondary via-gray-900 to-[#210C30] lg:shadow-md px-[20px] py-[20px] rounded-[24px]">
      <div className="flex flex-col text-center font-outfit py-8">
        <h1 className="text-3xl font-bold uppercase text-white">{title}</h1>
      </div>
      <div className="flex flex-col px-4 text-center gap-4">
        {skillsDevAfter.map((skill, index) => (
          <div className="flex flex-col text-left" key={index}>
            <div className="flex items-center gap-4 space-y-4">
              <img src={skill.logo} alt={skill.text} className="w-10" />
              <span className="text-white font-bold text-lg lg:text-2xl">
                {skill.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <img
        src="/test3.png"
        alt="FrontEnd"
        className="absolute w-2/3 opacity-55 -bottom-32 left-20"
      />
    </div>
  );
};

export default ServiceCardDevBack;
