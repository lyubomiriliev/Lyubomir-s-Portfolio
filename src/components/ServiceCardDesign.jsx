import React from "react";

const ServiceCardDesign = () => {
  return (
    <div className="w-full flex flex-col relative group overflow-hidden lg:w-[525px] h-[650px] justify-start bg-gradient-to-r from-grayGradientBlack via-grayGradientLight to-grayGradientBlack lg:shadow-md px-[20px] py-[20px] rounded-[24px]">
      <div className="flex flex-col items-center">
        <div className="flex justify-center pt-[10px]">
          <img
            src="/lyubomirLogoSVG.svg"
            alt="Logo"
            className="w-[85%] lg:w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center py-12">
          <h1 className="text-4xl font-outfit font-bold z-10">BRANDING</h1>
          <h1 className="text-4xl font-outfit font-bold z-10">WEB DESIGN</h1>
          <h1 className="text-[188px] font-bold font-outfit absolute text-primary opacity-30">
            &
          </h1>
        </div>
        <div className="text-left font-outfit font-light flex flex-col text-xl lg:text-2xl gap-4 lg:gap-[22px] w-full px-6">
          <h3>
            <span className="font-bold ">Responsive</span> & Mobile-First Design
          </h3>
          <h3>
            Proficient in <span className="font-bold ">UX/UI design</span>
          </h3>
          <h3>
            <span className="font-bold ">Prototyping</span> and Wireframing
          </h3>
          <h3>
            Visual <span className="font-bold ">Consistency</span>
          </h3>
          <h3>
            <span className="font-bold ">Intuitive</span> Interfaces
          </h3>
          <h3>
            Color Theory and <span className="font-bold">Typography</span>
          </h3>
        </div>
        <div className="group-hover:opacity-0 transition-all duration-500 ease-in-out">
          <div className="w-[1px] h-full bg-gray-900 absolute left-[44px] bottom-0"></div>
          <div className="w-full h-[1px] bg-gray-900 absolute left-0 top-[35px]"></div>
          <div className="w-full h-[1px] bg-gray-900 absolute left-0 top-[85px]"></div>
          <div className="w-full h-[1px] bg-gray-900 absolute left-0 bottom-[85px]"></div>
          <div className="w-[1px] h-full bg-gray-900 absolute right-[44px] bottom-0"></div>
          <img
            src="/hover2.webp"
            alt="Hover Me"
            className="w-32 absolute -bottom-8 right-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCardDesign;
