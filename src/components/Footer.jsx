import { lyuboLogoWhite } from "../assets/logos";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-secondary mt-20 font-outfit text-white py-10 px-6">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
        <img
          className="w-40 md:w-52 mt-2"
          src={lyuboLogoWhite}
          alt="Lyubo Logo"
        />

        <p className="text-sm md:text-base lg:w-1/2 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus
          semper tortor mauris porta mi viverra tellus. Sed mauris eget mi eget.
          Dui facilisis nunc porttitor turpis dui pharetra eget mauris laoreet.
        </p>
      </div>

      <div className="flex flex-col items-center mt-8 border-t border-white/20 w-full pt-4">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Lyubomir.Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
