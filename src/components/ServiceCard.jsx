import React from "react";
import { skillsDev } from "../utils/constants";

const ServiceCard = ({ title }) => {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-gradientBlack via-gradientLight to-gradientBlack px-[20px] py-[20px] rounded-[24px]">
      <div className="w-full h-[40px] bg-primary rounded-[14px]"></div>
      <div className="flex justify-center items-center text-center">
        <h1 className="text-2xl uppercase text-center font-outfit font-bold py-4 mb-4">
          {title}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-4">
        {skillsDev.map((skill, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="flex flex-col justify-start text-left w-full">
              <div className="flex">
              <span className="text-primary">{skill.classname}</span>
              <span className="text-orange font-light font-outfit">{skill.h1}</span>
              </div>
              <span className="text-lightBlue pl-3">{skill.text}</span>
              <span className="text-orange font-light font-outfit">{skill.h2}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
