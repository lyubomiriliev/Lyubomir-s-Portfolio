import React, { useEffect, useRef } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { heroBlur, lyuboLogo } from '../assets/logos'

import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";

import {easeOut, motion, useAnimation, useInView} from "framer-motion";


const Contacts = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
        animationControls.start('visible');
    }
}, [isInView, animationControls]);

  const scrollAnimationVariants = {
    hidden: { x: 1500 },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        bounce: 0.5,
        delay: 0,
      },
    },
  }


	const scrolltoTop = () => {
        scroll.scrollToTop({ smooth: true });
    }


    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center' ref={ref}>
			{/* CONTACT HEADER */}
			<div className='w-full md:w-2/3 flex flex-col justify-center items-center '>
                    <motion.div
                      className='w-full items-center flex justify-center gap-6'
                      initial="hidden"
                      animate={animationControls}
                      variants={scrollAnimationVariants}
                    >
                        <span className='font-outfit font-light text-4xl md:text-5xl text-primary'>#03</span>
                        <div className='w-[3px] h-[36px] bg-primary'></div>
                        <h2 className='text-primary font-outfit font-bold text-4xl md:text-5xl uppercase'>Contact Me</h2>
                    </motion.div>
                </div>
			{/* LEFT COLUMN */}
            <div className='max-w-screen-xl px-6 md:px-0 mt-20 w-full flex flex-col md:flex-row '>
                <div className='flex-1 flex flex-col justify-center relative overflow-hidden md:rounded-tl-2xl md:rounded-bl-2xl'
				>
				<img src={heroBlur} className='absolute hidden md:block inset-0 w-full h-full object-cover z-0 opacity-80' alt="" />

                    <div className='flex flex-col relative z-10 w-[90%] mx-auto space-y-8'>

                    <h3 className='text-5xl font-outfit font-bold max-w-[400px] text-secondary'>Get in touch</h3>
                    <p className='w-2/3 font-outfit font-light'>Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.</p>


					{/* CONTACT INFO */}
					<div className='gap-6 flex flex-col'>
						<div className='flex gap-4 items-center'>
							<CiLocationOn className='scale-150' />
							<span>Sofia, Bulgaria</span>
						</div>
						<div className='flex gap-4 items-center'>
							<HiOutlinePhone className='scale-150' />
							<span>+359 877 940 083</span>
						</div>
						<div className='flex gap-4 items-center'>
							<MdOutlineEmail className='scale-150' />
							<span>iliev.lyubomir98@gmail.com</span>
						</div>
						<div className='z-50 cursor-pointer' onClick={scrolltoTop}>
							<ScrollLink to="home" smooth={true} duration={400}>
								<img className='w-52 md:w-60 -ml-1' src={lyuboLogo} alt="Logo" />
                            </ScrollLink>
						</div>
					</div>

                </div>

            	</div>

				{/* RIGHT COLUMN */}
                <div className='flex-1 rounded-xl  md:bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50 '>
                <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
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
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Your message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 mx-auto flex justify-center">
          <button
            type="submit"
            className="block w-full rounded-md mb-10 bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary duration-200 ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
                </div>
            </div>

        </div>
    )
}

export default Contacts
