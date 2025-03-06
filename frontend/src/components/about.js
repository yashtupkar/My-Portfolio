import React, { useState, useEffect } from 'react'
import axios from 'axios'

const About = () => {
  const [aboutMe, setAboutMe] = useState("");

    const fetchAboutMe = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-aboutMe"
        );
        setAboutMe(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.error("Error fetching about me data:", error);
      }
    };

    useEffect(() => {
      fetchAboutMe();
    }, []); 
   
  return (
    <div  className="relative flex flex-col mt-20 p-4 md:p-0 md:mt-0 md:flex-row h-fit md:h-screen md:border border-gray-300 md:dark:border-gray-700 rounded-3xl items-center gap-2 ">
      <div className="absolute top-10 right-10 w-20 h-20 hidden md:block">
        <img
          src="/images/star.png"
          alt=""
          className="w-20 h-20 floating-animation"
        />
      </div>
      <div data-aos="zoom-out-right" className="w-full md:w-1/2">
        <div className="w-full h-full rounded-full flex justify-center items-center relative group cursor-pointer">
          <img
            src={ `http://localhost:1000/uploads/${aboutMe?.profileImage}`}
            alt="Yash Tupkar"
            className="rounded-full transition-all  duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-12"
          />

          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400 transition-all duration-300 transform scale-0 group-hover:scale-100 group-hover:ring-4 group-hover:ring-purple-500"></div>

          {/* Hover Text Popup */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="bg-custom-gradient text-white p-2 rounded-xl shadow-md text-sm md:text-lg font-semibold">
              {aboutMe?.name} – Web Developer
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-out-left"
        className="w-full md:w-1/2 text-gray-800 dark:text-white py-3 md:p-6"
      >
        <h1 className="text-lg md:text-xl font-semibold">
          Hello
          <span
            className="text-3xl md:text-4xl animate-wave inline-block"
            role="img"
            aria-label="wave"
          >
            👋
          </span>{" "}
          I'm
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold mt-2 md:mt-4">
          <span className="gradient-text">{aboutMe?.name?.split(" ")[0]}</span>{" "}
          {aboutMe?.name?.split(" ")[1]}, <br />
          <span>Full Stack Web Developer</span>
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Based in India
        </h1>
        <p className="text-sm md:text-base mt-2 md:mt-4 text-gray-600 dark:text-gray-400">
          {aboutMe?.bio}
        </p>
        <div className="flex gap-6 items-center mt-4">
          {aboutMe?.stats?.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start md:items-center justify-center"
            >
              <h1 className="text-2xl md:text-4xl font-bold">{stat.value}</h1>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 md:mt-6 bg-custom-gradient text-white font-semibold md:text-xl px-6 py-4 text-sm rounded-md md:rounded-xl">
          Download My Resume
        </button>
      </div>
    </div>
  );
}

export default About