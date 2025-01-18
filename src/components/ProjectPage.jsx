import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../utils/constants";

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

      <div className="w-full flex flex-col justify-start items-center min-h-screen max-w-screen-lg mx-auto py-10 mt-16 px-6">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <h2 className="text-lg text-gray-500">{project.subTitle}</h2>
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-2/3 rounded-lg mt-6"
        />
        <p className="mt-4">{project.description}</p>

        <div className="mt-6">
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
