import React from "react";
import ServiceCardDev from "./ServiceCardDev";
import ServiceCardDevBack from "./ServiceCardDevBack";

const FlipCard = ({ title, titleEnd, underTittle, closeTag }) => {
  return (
    <div className="group perspective w-full lg:w-[525px] h-[650px]">
      <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <ServiceCardDev 
            title={title} 
            titleEnd={titleEnd} 
            underTittle={underTittle} 
            closeTag={closeTag} 
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <ServiceCardDevBack title={title} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
