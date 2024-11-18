import React from "react";
import ServiceCardDev from "./ServiceCardDev";
import ServiceCardDevBack from "./ServiceCardDevBack";

const FlipCard = ({ title, titleEnd, underTittle, closeTag }) => {
  return (
    <div className="group perspective w-full lg:w-[525px] h-[650px]">
      <div className="relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <ServiceCardDev
            title={title}
            titleEnd={titleEnd}
            underTittle={underTittle}
            closeTag={closeTag}
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <ServiceCardDevBack />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
