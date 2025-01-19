import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { detailedProjects, projectsData } from "../utils/constants";
import ProjectPageStructure from "./ProjectPageStructure";

const ProjectPage = () => {
  const { name } = useParams();
  const project = projectsData.find((p) => p.url === `/${name}`);
  const projectDetails = detailedProjects.find(
    (p) => p.name === project?.title
  );
  const navigate = useNavigate();

  console.log(projectDetails);

  console.log("Project Title:", project?.title);
  console.log(
    "Available Detailed Projects:",
    detailedProjects.map((p) => p.name)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="text-center text-red-500 mt-10">Project not found</div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-start bg-white relative">
      <div className="w-full flex flex-col justify-start items-center min-h-screen max-w-screen-xl mx-auto pt-8 mt-16 2xl:mt-8 px-6">
        <div className="w-full flex justify-center items-center py-4 flex-col leading-tight px-4">
          <h1 className="text-5xl lg:text-5xl 2xl:text-7xl uppercase text-secondary text-center">
            {project.title}
          </h1>
          <h2 className="text-xl lg:text-4xl text-center font-light whitespace-nowrap uppercase tracking-widest text-gray-500">
            {project.subTitle}
          </h2>
        </div>

        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-2/3 rounded-2xl"
        />
        <p className="text-md text-center lg:text-2xl lg:max-w-[1024px] uppercase">
          {project.description}
        </p>
        {projectDetails && (
          <ProjectPageStructure
            aboutTitle={projectDetails.aboutTitle}
            aboutDescription={projectDetails.aboutDescription}
            aboutGoalsTitle={projectDetails.aboutGoalsTitle}
            aboutGoals={projectDetails.aboutGoals}
            designTitle={projectDetails.designTitle}
            designDescription={projectDetails.designDescription}
            designGoalsTitle={projectDetails.designGoalsTitle}
            designGoals={projectDetails.designGoals}
            toolsUsedTitle={projectDetails.toolsUsedTitle}
            toolsUsed={projectDetails.toolsUsed}
            developmentTitle={projectDetails.developmentTitle}
            developmentDescription={projectDetails.developmentDescription}
            techStackTitle={projectDetails.techStackTitle}
            techStack={projectDetails.techStack}
            keyFeaturesTitle={projectDetails.keyFeaturesTitle}
            keyFeatures={projectDetails.keyFeatures}
            finishTitle={projectDetails.finishTitle}
            finishDescription={projectDetails.finishDescription}
          />
        )}
        <div className="w-full flex items-center gap-2 mt-6">
          <div>
            <button
              onClick={handleBack}
              className="bg-primary cursor-pointer hover:bg-secondary duration-300 ease-in text-white font-semibold py-2 px-4 rounded z-50"
            >
              ⬅ To Projects
            </button>
          </div>
          <a
            href={project.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-secondary duration-300 ease-i cursor-pointer text-white px-4 py-2 rounded-md"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
