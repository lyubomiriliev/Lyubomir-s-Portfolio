import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData, projectsMoreDetails } from "../utils/constants";
import ProjectPageStructure from "./ProjectPageStructure";

const ProjectPage = () => {
  const { name } = useParams();
  const project = projectsData.find((p) => p.url === `/${name}`);
  const navigate = useNavigate();

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
      {/* 🔙 Back Button */}
      <button
        onClick={handleBack}
        className="bg-primary cursor-pointer hidden hover:bg-secondary duration-300 ease-in text-white font-semibold py-2 px-4 rounded mt-6 ml-6 z-50 absolute top-16 left-0"
      >
        ⬅ Back
      </button>

      <div className="w-full flex flex-col justify-start items-center min-h-screen max-w-screen-lg mx-auto pt-8 mt-16 px-6">
        <div className="w-full flex flex-col gap-1 leading-loose lg:gap-4">
          <h1
            className={`"text-4xl text-center ${
              project.title === "BlackSea Electromobility"
                ? "text-primary text-4xl lg:text-7xl"
                : "text-secondary"
            } lg:text-7xl uppercase font-bold"`}
          >
            {project.title}
          </h1>
          <h2 className="text-2xl lg:text-4xl text-center font-thin uppercase tracking-widest text-gray-500">
            {project.subTitle}
          </h2>
        </div>

        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-2/3 rounded-2xl"
        />
        <p className="mt-4">{project.description}</p>
        {projectsMoreDetails.map((proj, id) => (
          <div key={id}>
            <ProjectPageStructure
              sectionTitle={proj.sectionTitle}
              sectionDescription={proj.sectionDescription}
              sectionGoalsTitle={proj.sectionGoalsTitle}
              sectionGoals={proj.sectionGoals}
              toolsUsedTitle={proj.toolsUsedTitle}
              toolsUsed={proj.toolsUsed}
              keyFeatures={proj.keyFeatures}
            />
          </div>
        ))}
        <div className="flex items-center gap-2 mt-6">
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
