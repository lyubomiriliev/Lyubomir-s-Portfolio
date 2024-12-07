import React, { useEffect, useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { heroBlur, lyuboLogo } from "../assets/logos";

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";

import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import axios from "axios";

const Contacts = ({ containerVariants, itemVariants }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName: e.target["first-name"].value,
      lastName: e.target["last-name"].value,
      company: e.target["company"].value,
      email: e.target["email"].value,
      phone: e.target["phone-number"].value,
      message: e.target["message"].value,
    };

    try {
      const response = await axios.post(
        "http://localhost:7000/send-email",
        formData
      );
      if (response.status === 200) {
        alert("Your message has been sent!");
        e.target.reset();
      }
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to send your message. Please try again.");
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start("visible");
    }
  }, [isInView, animationControls]);

  const scrolltoTop = () => {
    scroll.scrollToTop({ smooth: true });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={animationControls}
      className="w-full mx-auto flex flex-col justify-center items-center"
      ref={ref}
    >
      {/* CONTACT HEADER */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center ">
        <motion.div
          className="w-full items-center flex justify-center gap-6"
          variants={itemVariants}
        >
          <SectionHeading title="Contact me" subTitle="LET’S CONNECT" />
        </motion.div>
      </div>
      {/* LEFT COLUMN */}
      <motion.div
        initial="hidden"
        animate={animationControls}
        variants={containerVariants}
        className="max-w-screen-xl px-6 md:px-0 mt-10 w-full flex flex-col md:flex-row"
      >
        <div className="flex-1 flex flex-col justify-center bg-gradient-to-r from-sky-300/70 via-slate-50 to-fuchsia-300/70 relative overflow-hidden rounded-tl-[24px] rounded-tr-[24px] lg:rounded-tr-none px-6 py-10 lg:p-0 lg:rounded-tl-[24px] lg:rounded-bl-[24px] lg:rounded-bl-[24px">
          <motion.div
            variants={containerVariants}
            className="flex flex-col relative z-10 px-4 lg:px-20 w-[100%] mx-auto space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-outfit text-center lg:text-left lg:leading-none max-w-sm font-bold uppercase text-secondary"
            >
              Let&apos;s work together
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="w-full font-outfit font-light"
            >
              Proin volutpat consequat porttitor cras nullam gravida at. Orci
              molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              Arcu sed malesuada et magna.
            </motion.p>

            {/* CONTACT INFO */}
            <motion.div variants={itemVariants} className="gap-6 flex flex-col">
              <div className="flex gap-4 items-center">
                <CiLocationOn className="scale-150" />
                <span>Sofia, Bulgaria</span>
              </div>
              <div className="flex gap-4 items-center">
                <HiOutlinePhone className="scale-150" />
                <span>+359 877 940 083</span>
              </div>
              <div className="flex gap-4 items-center">
                <MdOutlineEmail className="scale-150" />
                <span>iliev.lyubomir98@gmail.com</span>
              </div>
              <div className="z-50 cursor-pointer" onClick={scrolltoTop}>
                <ScrollLink to="home" smooth={true} duration={400}>
                  <img
                    className="w-52 md:w-64 -ml-1"
                    src={lyuboLogo}
                    alt="Logo"
                  />
                </ScrollLink>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial="hidden"
          animate={animationControls}
          variants={containerVariants}
          className="flex-1 rounded-bl-[24px] rounded-br-[24px] lg:rounded-tl-none lg:rounded-bl-none p-4 md:p-0 rounded-tr-none lg:rounded-tr-[24px] lg:rounded-br-[24px] rounded-tl-none bg-gradient-to-r from-slate-100 via-slate-50 to-slate-200 "
        >
          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="w-full mx-auto grid grid-cols-1 md:grid-grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2">
              {/* First name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Last name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Company */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Phone number */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Your message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            {/* Submit button */}
            <div className="mt-10 mx-auto flex justify-center">
              <button
                type="submit"
                className="block w-full rounded-md mb-10 bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary duration-200 ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contacts;
