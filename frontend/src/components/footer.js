import React from 'react'
import { BsInstagram, BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="w-full flex-col h-fit md:h-[70vh] mt-20 mb-6 md:mb-20 md:p-4 flex  items-center rounded-3xl   justify-center">
      <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-end">
        <div className="w-full md:w-auto">
          <div>
            <h1 className="text-3xl md:text-6xl text-gray-500 dark:text-white font-bold mb-4 md:mb-10">
              <span className="gradient-text">Let’s</span> work <br />
              together
            </h1>
          </div>
          <div className="flex ">
            <h1 className="text-2xl flex gap-4 items-center text-gray-500 dark:text-white font-semibold">
              Based in India |
              <BsInstagram /> <BsGithub /> <IoLogoLinkedin />
            </h1>
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-96 px-3 py-6 md:px-6 md:py-10 md:h-52 h-40 rounded-3xl flex flex-col justify-between border border-1 border-gray-400 ">
          <h1 className="text-xl font-semibold text-gray-600 dark:text-white">
            Looking for a Web Developer?
          </h1>
          <h1 className="gradient-text flex justify-between items-center text-xl md:text-2xl font-semibold">
            yashtupkar6@gamil.com{" "}
            <span className="text-purple-600 -rotate-45">
              <FaArrowRight />
            </span>
          </h1>
        </div>
        <div className="px-3 py-6 md:px-6 md:py-10 w-full mt-4 md:mt-0 md:w-96 rounded-3xl md:h-52 h-40 flex flex-col justify-between border border-1 border-gray-400 ">
          <h1 className="text-xl font-semibold text-gray-600 dark:text-white">
            Want a more in-depth look <br />
            at my history?
          </h1>
          <h1 className="flex justify-between items-center gradient-text text-xl md:text-2xl font-semibold">
            +917898297769{" "}
            <span className="text-purple-600 -rotate-45">
              <FaArrowRight />
            </span>
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4 mb-4 md:mt-10 md:mb-10">
        <h1 className="gradient-text text-2xl sm:text-5xl md:text-8xl font-extrabold ">
          YASH TUPKAR
        </h1>
      </div>
      <div className="flex w-full items-center justify-between py-3 md:py-6 border-t-2 border-gray-600">
        <h1 className="text-gray-600 dark:text-white text-sm md:text-xl">
          ©2025 Yash Tupkar, All Rights Reserved
        </h1>
        <a href='#'
          className="text-sm md:text-xl flex gap-2
         text-gray-600 dark:text-white"
        >
          Back to Top{" "}
          <span className="-rotate-90 text-white p-1 rounded-full bg-custom-gradient">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer