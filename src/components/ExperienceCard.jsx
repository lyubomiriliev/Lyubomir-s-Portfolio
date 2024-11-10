import React from "react";

const ExperienceCard = ({
  years,
  name,
  location,
  level,
  role,
  skills,
  description,
  achievements,
  customText,
  customText2,
}) => {
  return (
    <div className="w-full flex flex-col items-start p-4 rounded-lg bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 shadow-md space-y-3 relative overflow-hidden">
      {customText && (
        <p className="uppercase text-9xl lg:text-12xl font-outfit text-primary/60 font-semibold mt- -z-0 absolute -right-[100%] -bottom-12 lg:-right-[79%] lg:-bottom-16 select-none">
          {customText}
        </p>
      )}
      {customText2 && (
        <p className="text-secondary/60 uppercase text-9xl lg:text-12xl font-outfit font-semibold mt-4 -z-0 absolute right-1 -bottom-12 lg:-right-5 lg:-bottom-16 select-none">
          {customText2}
        </p>
      )}
      <h2 className="text-lg font-semibold text-gray-700">{years}</h2>
      <div className="flex flex-col space-y-1">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        {location && <h4 className="text-md text-gray-600">{location}</h4>}
        {level && <h4 className="text-md text-gray-600">Level: {level}</h4>}
        {role && <h4 className="text-md text-gray-600">Role: {role}</h4>}
      </div>
      {description && <p className="text-gray-700">{description}</p>}
      {achievements && (
        <p className="text-gray-700 font-semibold">
          Achievements: {achievements}
        </p>
      )}
      <div className="mt-2 w-2/4 z-50">
        <h3 className="font-semibold text-gray-800">Skills Acquired:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-300 w-40 h-40 blur-3xl absolute -z-0 -right-24 -top-20"></div>
    </div>
  );
};

export default ExperienceCard;
