import React, { useEffect, useRef } from "react";
import { aboutImage } from "../assets/logos";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AboutMe = ({ containerVariants, itemVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  const aboutVariant = {
    hidden: { opacity: 0, x: 400 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div
      className="w-full mx-auto h-full flex flex-col justify-center items-center py-4 lg:py-10"
      ref={ref}
    >
      <motion.div
        className="max-w-screen-xl mx-auto h-full bg-gradient-to-r relative lg:overflow-hidden rounded-[24px] lg:bg-gradient-to-bl lg:from-slate-100 lg:via-slate-50 lg:to-slate-200 lg:shadow-sm flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate={animationControls}
      >
        {/* Text and Heading Section */}
        <div className="w-[90%] md:w-full order-1 md:order-2 h-full flex flex-col justify-start pt-10 lg:py-10 pr-6 items-center">
          <SectionHeading title="About me" subTitle="get to know me" />
          <motion.p
            className="w-full text-base lg:text-right md:text-justify font-outfit lg:text-md font-light mt-4"
            variants={aboutVariant}
          >
            I'm a junior front-end developer with nearly two years of work
            experience, primarily working with{" "}
            <span className="font-medium">JavaScript</span>,{" "}
            <span className="font-medium">TypeScript</span>,{" "}
            <span className="font-medium">React</span>, and{" "}
            <span className="font-medium">Next.js</span>.
            <br />
            <br />I have hands-on experience with{" "}
            <span className="font-medium">React</span>,{" "}
            <span className="font-medium">Redux</span>,{" "}
            <span className="font-medium">Node.js</span>,{" "}
            <span className="font-medium">Express</span>, and{" "}
            <span className="font-medium">Next.Js</span>. I’m comfortable
            working with front-end and a little bit of back-end technologies. I
            have a solid understanding of{" "}
            <span className="font-medium">HTTP Requests</span>,{" "}
            <span className="font-medium">REST APIs</span>, and{" "}
            <span className="font-medium">Git/GitFlow</span>, and I’ve used
            <span className="font-medium"> Docker</span> for containerizing my
            projects. I have base knowledge of the differences between Git Flow
            and trunk based development. Frequently in my work I use{" "}
            <span className="font-medium">Agile/Scrum </span>
            environment, using <span className="font-medium">Jira</span> for
            ticket management and{" "}
            <span className="font-medium">Confluence</span> for documentation,
            also I have good understanding of{" "}
            <span className="font-medium">Agile Manifesto.</span>
            <br />
            <br />
            I’ve also worked with <span className="font-medium">
              Firebase
            </span>{" "}
            and <span className="font-medium">Supabase</span> for back-end
            solutions and used tools like{" "}
            <span className="font-medium">Postman</span> and{" "}
            <span className="font-medium">Reqbin</span> for API testing. I have
            base experience with <span className="font-medium">OAuth</span>, and{" "}
            <span className="font-medium">JWT</span> for authentication. One of
            my biggest learning experiences came from a full-stack project I
            built using React, JavaScript, SASS, Node, Express, MongoDB, and
            Docker. It helped me solidify my understanding of the development
            workflow, debugging, and best practices. I’m comfortable working
            across <span className="font-medium">Windows and Mac</span>, and my
            daily tools include <span className="font-medium">VSCode</span>,{" "}
            <span className="font-medium">Chrome DevTools</span>,{" "}
            <span className="font-medium">React Developer Tools</span>,{" "}
            <span className="font-medium">Redux Toolkit</span>, Slack, Discord,
            and <span className="font-medium">ChatGPT</span>. I have experience
            with hosting on platforms like{" "}
            <span className="font-medium">Firebase</span> and
            <span className="font-medium"> Vercel</span>.
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full order-2 md:order-1 mt-10 md:mt-0"
          variants={itemVariants}
        >
          <motion.img
            className="object-cover hidden lg:block w-full absolute left-0 lg:-left-24 -bottom-4 lg:-bottom-80"
            src={aboutImage}
            alt="about image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
