import React from "react";

const TimelineItem = ({
  years,
  title,
  location,
  level,
  role,
  skills,
  achievements,
}) => {
  return (
    <div className="relative w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="absolute -top-0 z-10 -ml-3.5 h-8 w-7 rounded-full text-primary bg-white"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-primary uppercase text-xl">{title}</h4>
        <p className="text-gray-600 text-sm md:text-base font-light">
          {location} {level && <span className="font-semibold">, {level}</span>}
        </p>
        {role && <p className="text-gray-600 font-normal">{role}</p>}
        {achievements && (
          <p className="text-gray-700 font-semibold mt-2">
            Achievements: {achievements}
          </p>
        )}
        <ul className="list-disc list-inside mt-2 max-w-[400px]">
          {skills &&
            skills.map((skill, index) => (
              <li key={index} className="text-gray-600 font-light">
                {skill}
              </li>
            ))}
        </ul>
        <span className="mt-1 block text-base font-bold text-primary">
          {years}
        </span>
      </div>
    </div>
  );
};

export default TimelineItem;
