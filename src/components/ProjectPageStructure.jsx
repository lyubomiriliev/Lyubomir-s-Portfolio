import React from "react";

const ProjectPageStructure = ({
  aboutTitle,
  aboutDescription,
  aboutGoalsTitle,
  aboutGoals = [],
  toolsUsedTitle,
  toolsUsed = [],
  designTitle,
  designDescription,
  designGoalsTitle,
  designGoals = [],
  developmentTitle,
  developmentDescription,
  techStackTitle,
  techStack = [],
  keyFeaturesTitle,
  keyFeatures = [],
  finishTitle,
  finishDescription,
}) => {
  return (
    <section className="w-full flex flex-col justify-start mt-8">
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex items-center py-4">
          <h1 className="text-3xl lg:text-5xl text-primary font-semibold uppercase">
            {aboutTitle}
          </h1>
        </div>
        <div className="w-full">
          <div className="w-full lg:w-2/3 text-md py-6">
            <p>{aboutDescription}</p>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="text-xl lg:text-2xl uppercase font-bold text-secondary pb-2">
              {aboutGoalsTitle}
            </h1>
            <div className="grid grid-cols-1 gap-2 pb-8">
              {aboutGoals.map((goal, index) => (
                <div key={index}>
                  <h3 className="text-gray-700 font-light">{goal}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex items-center py-4">
          <h1 className="projectHeading">{designTitle}</h1>
        </div>
        <div className="w-full lg:w-2/3 text-md py-6">
          <p>{designDescription}</p>
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className="text-xl lg:text-2xl uppercase font-bold text-secondary pb-2">
            {designGoalsTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {designGoals.map((goal, index) => (
              <div key={index}>
                <h3 className="text-gray-700 font-light">{goal}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-xl lg:text-2xl uppercase font-bold pb-2">
            {toolsUsedTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {toolsUsed.map((tool, index) => (
              <div key={index}>
                <h3 className="text-gray-700 text-lg font-light">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex items-center py-4">
          <h1 className="projectHeading">{developmentTitle}</h1>
        </div>
        <div className="w-full lg:w-2/3 text-md py-6">
          <p>{developmentDescription}</p>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-xl lg:text-2xl uppercase font-bold pb-2">
            {techStackTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {techStack.map((tool, index) => (
              <div key={index}>
                <h3 className="text-gray-700 text-lg font-light">{tool}</h3>
              </div>
            ))}
          </div>
          <h1 className="text-xl lg:text-2xl uppercase font-bold pb-2">
            {keyFeaturesTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {keyFeatures.map((tool, index) => (
              <div key={index}>
                <h3 className="text-gray-700 text-lg font-light">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <div className="w-full flex items-center py-4">
          <h1 className="projectHeading">{finishTitle}</h1>
        </div>
        <div className="w-full lg:w-2/3 text-md py-6">
          <p>{finishDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPageStructure;
