import { techStackLogos } from "../assets/logos";
import { motion } from "framer-motion";

const TechStack = () => {
  const filteredLogos = techStackLogos.filter(
    (logo) => !["Redux2", "NextJs2", "Stripe"].includes(logo.name)
  );

  return (
    <>
      {/* DESKTOP */}
      <div className="relative hidden md:flex">
        <div className="w-full py-4 md:h-48 2xl:h-56 flex items-center justify-center space-x-4 md:space-y-0 md:space-x-8 bg-gradient-to-r from-secondary to-purple-900">
          <div className="flex justify-center items-center mx-auto space-x-8">
            <h1 className="font-outfit font-bold text-sm md:text-4xl text-white">
              Tech Stack
            </h1>
            <div className="w-[1px] md:w-[2px] bg-white h-6 md:h-12"></div>
            {filteredLogos.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col h-20 justify-end items-center space-x-2"
              >
                <motion.img
                  className="w-5 md:w-16 rounded-md h-auto"
                  src={logo.src}
                  alt="techStack logo"
                  whileHover={{ scale: 1.3 }}
                />
                <p className="text-white text-sm md:text-base whitespace-nowrap">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="w-full py-4 flex flex-col bg-gradient-to-r from-secondary to-purple-900 justify-center items-center md:hidden">
        <div className="w-full grid grid-cols-6 px-4 justify-center gap-4 items-center">
          {filteredLogos.map((logo, index) => (
            <img
              key={index}
              className="w-16 rounded-sm"
              src={logo.src}
              alt="techStack logo"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
