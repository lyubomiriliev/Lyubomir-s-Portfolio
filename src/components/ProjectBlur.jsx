import React from "react";

const ProjectBlur = ({
  title,
  description,
  webLink,
  primaryButtonLabel,
  logoSrc,
}) => {
  return (
    <div className="absolute inset-0 lg:mb-0 flex flex-col items-center justify-start pt-10 lg:pt-24 gap-6 bg-gray-800/20 text-white opacity-0 backdrop-blur-xl rounded-lg transition-opacity duration-500 group-hover:opacity-100">
      <div className="flex items-center gap-4 w-full justify-center">
        <img src={logoSrc} alt={title} width={48} className="object-cover" />
        <h3 className="text-base md:text-xl font-outfit font-bold uppercase">
          {title}
        </h3>
      </div>
      <p className="w-[80%] flex justify-center items-center font-outfit font-light text-base md:text-lg max-w-[400px] overflow-hidden">
        {description}
      </p>
      <div className="w-full flex gap-6 justify-center items-center">
        <a href={webLink} target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-2 cursor-pointer hover:bg-white hover:text-primary duration-200 ease-in bg-primary rounded-full text-white font-medium uppercase font-outfit">
            {primaryButtonLabel}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBlur;
