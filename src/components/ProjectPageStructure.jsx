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
      <div className="w-full flex flex-col justify-start items-start relative">
        <div className="w-full flex items-center pb-3 pt-5">
          <h1 className="projectHeading">{aboutTitle}</h1>
        </div>
        <div className="w-full">
          <div className="w-full lg:w-2/4 text-md pb-6">
            <p>{aboutDescription}</p>
          </div>
          <img
            src="/projectPage/about.png"
            alt="About Client"
            className="flex lg:hidden w-full opacity-75"
          />
          <div className="w-full lg:w-2/3">
            <h1 className="text-2xl lg:text-3xl uppercase font-bold text-secondary py-4">
              {aboutGoalsTitle}
            </h1>
            <div className="grid grid-cols-1 gap-2 pb-8">
              {aboutGoals.map((goal, index) => (
                <ul className="list-disc px-6" key={index}>
                  <li className="text-gray-700 text-lg">{goal}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <img
          src="/projectPage/about.png"
          alt="About Client"
          className="hidden lg:block opacity-75 absolute top-0 right-20 w-[35%]"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start relative">
        <div className="w-full flex items-center pb-3 pt-5">
          <h1 className="projectHeading">{designTitle}</h1>
        </div>
        <div className="w-full lg:w-2/4 text-md pb-6">
          <p>{designDescription}</p>
        </div>
        <img
          src="/projectPage/wireframe.png"
          alt="About Client"
          className="flex lg:hidden w-full opacity-75"
        />
        <div className="w-full lg:w-2/3">
          <h1 className="text-xl lg:text-2xl uppercase font-bold text-secondary pb-2">
            {designGoalsTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {designGoals.map((goal, index) => (
              <ul className="list-disc px-6" key={index}>
                <li className="text-gray-700 text-lg">{goal}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="text-xl lg:text-2xl uppercase font-bold pb-2">
            {toolsUsedTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {toolsUsed.map((tool, index) => (
              <ul className="list-disc px-6" key={index}>
                <li className="text-gray-700 text-lg">{tool}</li>
              </ul>
            ))}
          </div>
        </div>
        <img
          src="/projectPage/wireframe.png"
          alt="DesignWireframe"
          className="hidden lg:block opacity-75 absolute top-24 right-20 w-[35%]"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start relative">
        <div className="w-full flex items-center py-4">
          <h1 className="projectHeading">{developmentTitle}</h1>
        </div>
        <div className="w-full lg:w-2/4 text-md py-6">
          <p>{developmentDescription}</p>
        </div>
        <img
          src="/projectPage/development.png"
          alt="About Client"
          className="flex lg:hidden w-full opacity-75"
        />
        <div className="w-full flex flex-col">
          <h1 className="text-xl lg:text-2xl uppercase font-bold pb-2">
            {techStackTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {techStack.map((tool, index) => (
              <ul className="list-disc px-6" key={index}>
                <li className="text-gray-700 text-lg">{tool}</li>
              </ul>
            ))}
          </div>
          <h1 className="text-xl lg:text-2xl uppercase font-bold pb-2">
            {keyFeaturesTitle}
          </h1>
          <div className="grid grid-cols-1 gap-2 pb-8">
            {keyFeatures.map((tool, index) => (
              <ul className="list-disc px-6" key={index}>
                <li className="text-gray-700 text-lg">{tool}</li>
              </ul>
            ))}
          </div>
        </div>
        <img
          src="/projectPage/development.png"
          alt="Development"
          className="hidden lg:block opacity-75 absolute top-10 right-20 w-[35%]"
        />
      </div>
      <div className="w-full flex flex-col justify-start items-start relative">
        <div className="w-full flex items-center py-4">
          <h1 className="projectHeading">{finishTitle}</h1>
        </div>
        <div className="w-full lg:w-2/4 text-md py-6">
          <p>{finishDescription}</p>
        </div>
        <img
          src="/projectPage/finished.png"
          alt="About Client"
          className="flex lg:hidden w-full opacity-75"
        />
        <img
          src="/projectPage/finished.png"
          alt="FinishedProduct"
          className="hidden lg:block opacity-75 absolute -top-32 right-20 w-[35%]"
        />
      </div>
    </section>
  );
};

export default ProjectPageStructure;
