import React from "react";
import { skillsDev } from "../utils/constants";

const ServiceCardDev = ({ title, titleEnd, underTittle, closeTag }) => {
  return (
    <div className="w-full flex flex-col relative overflow-hidden lg:w-[525px] justify-center bg-gradient-to-r from-secondary via-gray-900 to-[#210C30] lg:shadow-md px-[20px] py-[20px] rounded-[24px]">
      <div className="w-full h-[40px] flex items-center gap-3 px-4 bg-[#0C0C0C] rounded-[14px]">
        <div className="w-6 h-6 rounded-full bg-orange"></div>
        <div className="w-6 h-6 rounded-full bg-primary"></div>
        <div className="w-6 h-6 rounded-full bg-primary"></div>
        <div className="w-6 h-6 rounded-full bg-primary"></div>
      </div>
      <div className="flex flex-col text-left font-outfit py-4">
        <h1 className="text-lg text-primary">{title}</h1>
        <div className="flex justify-center items-center">
          <h1 className="text-orange text-2xl lg:text-4xl">"{underTittle}"</h1>
          <h1 className="text-primary text-lg">{closeTag}</h1>
        </div>
      </div>
      <div className="flex flex-col px-4 text-center gap-4">
        {skillsDev.map((skill, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="flex flex-col justify-start text-left w-full">
              <div className="flex">
                <span className="text-primary">{skill.h1}</span>
                <span className="text-lightBlue">{skill.classname}</span>
                <span className="text-orange text-sm lg:text-base font-light font-outfit">
                  {skill.class}
                </span>
                <span className="text-primary">{skill.classEnd}</span>
              </div>
              <span className="text-lightBlue text-xl pl-3">{skill.text}</span>
              <span className="text-primary font-light font-outfit">
                {skill.h2}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[2px] h-[78%] bg-gray-600 absolute bottom-11"></div>
      <img
        src="/hover3.png"
        alt="Hover Me"
        className="w-32 absolute -bottom-8 right-6"
      />
      <h1 className="text-lg text-left font-outfit text-primary">{titleEnd}</h1>
    </div>
  );
};

export default ServiceCardDev;
