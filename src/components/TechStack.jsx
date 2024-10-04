import { lines, techStackLogos } from "../assets/logos"

const TechStack = () => {
    return (
        <div className="relative">
            <div className="w-1/6 justify-center left-10 absolute hidden md:flex bottom-16">
                <img className="w-1/3" src={lines} alt="lines-decoration" />
            </div>
            <div className="w-full h-auto py-4 md:h-30 flex items-center justify-center space-x-4 md:space-y-0 md:space-x-8 bg-gradient-to-r from-secondary to-purple-900">
                <h1 className="font-outfit font-bold text-sm md:text-3xl text-white">Tech Stack</h1>
                <div className="w-[2px] bg-white h-12"></div>
                {
                    techStackLogos.map((logo, index) => (
                        <img key={index} className="w-5 md:w-12 rounded-sm md:rounded-lg h-auto" src={logo} alt="techStack logo" />
                    ))
                }
            </div>
        </div>
    )
}

export default TechStack
