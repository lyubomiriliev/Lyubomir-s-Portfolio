import React from "react";
import { techStackLogos } from "../assets/logos";
import ProjectBlur from "./ProjectBlur";

const Project = ({
  logoSrc,
  title,
  subTitle,
  description,
  imgSrc,
  mobileImg,
  primaryButtonLabel,
  secondaryButtonLabel,
  testAccEmail,
  testAccPw,
  webLink,
  sourceCode,
  techStack,
}) => {
  const filteredLogos = techStackLogos.filter((logo) =>
    techStack.includes(logo.name)
  );

  return (
    <div className="w-full flex h-[450px] md:h-[540px] space-x-6 px-4 py-4 rounded-[24px] group relative">
      <div className="w-full flex flex-col justify-around rounded-[24px] bg-gradient-to-r from-slate-200 via-slate-50 to-slate-200 overflow-hidden relative select-none">
        <div className="flex justify-center items-center p-2">
          <img
            src={imgSrc}
            alt={title}
            className="w-[85%] lg:w-[75%] mt-6 select-none"
          />
        </div>
        <div>
          <img
            src={mobileImg}
            alt={title}
            className="w-[108px] lg:w-36 select-none absolute top-28 right-2"
          />
        </div>
        <div>
          <ProjectBlur
            description={description}
            primaryButtonLabel={primaryButtonLabel}
            secondaryButtonLabel={secondaryButtonLabel}
            sourceCode={sourceCode}
            title={title}
            webLink={webLink}
            logoSrc={logoSrc}
          />
        </div>
        <div className="w-full h-32 lg:h-36 gap-2 flex flex-col px-4 lg:px-10 relative z-10">
          <h3 className="w-full font-outfit font-bold text-2xl">{title}</h3>
          <p className="font-outfit font-light text-sm tracking-widest uppercase">
            {subTitle}
          </p>
          <div className="w-full justify-between flex items-center space-x-4 h-12">
            <div className="flex items-center gap-2">
              {filteredLogos.map((logo, index) => (
                <div key={index}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-10 md:w-10 object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 transition-all cursor-pointer">
              <button className="w-8 h-8 bg-primary hover:bg-primary/80 hover:border-2 hover:border-primary rounded-full flex justify-center items-center">
                <img
                  src="/arrow.svg"
                  alt="arrow"
                  className="w-3.5 h-3.5 group-hover:rotate-[43deg] duration-300 ease-in-out"
                />
              </button>
              <span className="uppercase hidden lg:block font-outfit font-light text-primary">
                discover
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
