import React from "react";

const ServiceCard = ({ title, skills }) => {
  return (
    <div className="flex flex-col justify-center bg-gray-200 h-[400px] p-6 rounded-xl">
      <div className="flex justify-center items-center text-center">
        <h1 className="text-3xl max-w-[300px] uppercase text-center font-outfit font-bold py-4 mb-8">
          {title}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
