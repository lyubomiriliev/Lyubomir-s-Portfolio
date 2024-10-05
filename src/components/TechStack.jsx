import { techStackLogos } from "../assets/logos"
import { motion } from "framer-motion";


const TechStack = () => {


    const scrollAnimation = {
        animate: {
            x: [1600, 0], // Change -1500 to the width of your container to match the logos' width
        },
        transition: {
            duration: 1.5, // Total duration of the scroll (in seconds)
            ease: "easeInOut", // Smooth easing for the movement
            bounce: 0.5, // Add a bounce effect when it reaches 0
        },
    };

    const filteredLogos = techStackLogos.filter(logo => !['Redux2', 'NextJs2', 'Stripe'].includes(logo.name))


    return (
        <>
        {/* DESKTOP */}
        <div className="relative hidden md:flex">
            <div className="w-full py-4 md:h-48 flex items-center justify-center space-x-4 md:space-y-0 md:space-x-8 bg-gradient-to-r from-secondary to-purple-900">
                <motion.div className="flex justify-center items-center mx-auto space-x-8" {...scrollAnimation} >
                <h1 className="font-outfit font-bold text-sm md:text-4xl text-white">Tech Stack</h1>
                <div className="w-[1px] md:w-[2px] bg-white h-6 md:h-12"></div>
                {
                    filteredLogos.map((logo, index) => (
                        <img 
                        key={index} 
                        className="w-5 md:w-16 rounded-md h-auto" 
                        src={logo.src}
                        alt="techStack logo"
                        
                        />
                    ))
                }
                </motion.div>
            </div>
        </div>

        {/* MOBILE */}
        <div className="w-full h-60 flex flex-col bg-gradient-to-r from-secondary to-purple-900 justify-center items-center md:hidden">
            <div className="flex">
                <h1 className="font-outfit font-bold text-3xl text-white">Tech Stack</h1>
            </div>
            <div className="w-[90%] grid grid-cols-6 mt-5 justify-center gap-4 h-40 items-center">
                {
                    filteredLogos.map((logo, index) => (
                            <motion.img key={index} className="w-16 rounded-sm" src={logo.src} alt="techStack logo" {...scrollAnimation} />
                    ))
                }
            </div>
        </div>
        </>

    )
}

export default TechStack
