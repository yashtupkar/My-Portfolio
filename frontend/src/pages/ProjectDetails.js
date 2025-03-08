import React, { useState, useEffect } from 'react'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import { IoLogoGithub } from 'react-icons/io';
import { LuExternalLink } from "react-icons/lu";

const ProjectDetails = () => {
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const [project, setProject] = useState();
  

  // Fetch project details from API here
const { id } = useParams(); 
  useEffect(() => { 
    const fetchProjectDetails = async () => { 
      try {
        
        const response = await axios.get(`${apiUrl}/api/v1/get-project/${id}`);
          setProject(response.data);
          console.log(response.data); // Log fetched data
        
      } catch (error) {
        console.error(error);
      }

    }
    fetchProjectDetails();
  }, [id])
    
function formatDate(inputDate) {
  if (!inputDate) return "N/A"; // Handle null/undefined cases
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) return "Invalid Date"; // Handle invalid dates

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}


  return (
    <div className="bg-white h-fit dark:bg-gray-900 px-4 sm:px-10 md:px-10 lg:px-40">
      <Navbar />
      {/* Project details */}
      <section className="w-full h-full bg-transparent">
        <div className="relative w-full h-[40vh] md:h-[60vh] bg-custom-gradient">
          <div className="absolute p-2 md:p-6 top-6 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[85%] h-[100vh]">
            <div className=" flex flex-col gap-2 md:gap-4 w-[100%]  rounded-lg ">
              {/* top section */}
              <div className="w-full h-fit bg-transparent border p-2 md:p-4 border-white rounded-xl md:rounded-3xl">
                <div className="w-full h-fit flex flex-col gap-2">
                  <div className="flex gap-4 items-center">
                    <h1 className="flex gap-1 text-sm md:text-base items-center text-orange-500 bg-white w-fit px-2 py-1 rounded-xl">
                      <GoDotFill />
                      {project?.createdAt
                        ? formatDate(project.createdAt)
                        : "N/A"}
                    </h1>
                    <h1 className="flex gap-1 items-center text-sm md:text-base text-orange-500 bg-white w-fit px-2 py-1 rounded-xl">
                      <GoDotFill />
                      {project?.companyName}
                    </h1>
                  </div>
                  <h1 className="text-white text-xl md:text-4xl font-extrabold">
                    {project?.title}
                  </h1>
                </div>
                <div className="w-full flex items-center gap-4 mt-2">
                  <a
                    href={`${project?.githubLink}`}
                    className=" flex gap-1 text-sm md:text-base items-center font-semibold shadow-lg px-4 py-2 rounded-xl text-white bg-black"
                  >
                    <IoLogoGithub className="text-lg md:text-2xl" /> Github Code
                  </a>
                  <a
                    href={`${project?.liveDemoLink}`}
                    className=" flex gap-1 items-center shadow-lg font-semibold px-4 py-2 rounded-xl text-white bg-gray-700"
                  >
                    Live Link <LuExternalLink className="text-xl" />
                  </a>
                </div>
              </div>
              {/* project Image */}
              <div className="w-full p-2 md:p-4 bg-gray-900 border border-gray-700 rounded-xl md:rounded-3xl">
                <img
                  src={`${apiUrl}/uploads/${project?.imageUrl}`}
                  className="rounded-xl"
                />
              </div>
            </div>
            {/* project details */}
            <div className="w-full h-[500px] md:max-h-[800px] md:min-h-fit overflow-y-scroll bg-gray-100 dark:bg-gray-800 rounded-xl md:rounded-3xl p-3 border border-gray-300 md:p-6 mt-2 md:mt-4">
              <h1 className="text-xl md:text-3xl font-bold text-gray-700 dark:text-white mb-2">
                Overview
              </h1>
              <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                {project?.description}
              </p>
              <h1 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-white mb-2">
                Company
              </h1>
              <p className="text-md md:text-lg flex gap-1 items-center text-gray-600 dark:text-gray-300 mb-4">
                <GoDotFill />
                {project?.companyName}
              </p>
              <h1 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-white mb-2">
                Technologies Used
              </h1>
              <div className="flex gap-2 flex-wrap w-full items-center mb-4">
                {" "}
                {project?.technologies.map((tech, id) => {
                  return (
                    <span
                      key={id}
                      className=" text-md md:text-base shadow-md cursor-pointer bg-custom-gradient text-white rounded-lg px-4 py-1"
                    >
                      {tech.trim()}
                    </span>
                  );
                })}
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-white mb-2">
                Tags
              </h1>
              <div className="flex flex-wrap w-full h-fit gap-2 mt-2">
                {project?.tags &&
                  project?.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="  text-md md:text-base cursor-pointer bg-custom-gradient text-white  shadow-md  rounded-lg px-4 py-1"
                    >
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[500px] md:h-[1000px]"></div>
      </section>

      <Footer />
    </div>
  );
}

export default ProjectDetails