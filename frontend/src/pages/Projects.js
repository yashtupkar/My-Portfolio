import React, {useState, useEffect} from 'react'
import MyRecentWork from '../components/MyRecentWork'
import Navbar from '../components/navbar'
import axios from 'axios'
import { FaArrowRight } from 'react-icons/fa'


const MyWork = () => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-projects"
        );
        // Filter projects where display is true and limit to 3
        const filteredProjects = response.data
          .filter((project) => project.display === true)
         
        setProjects(filteredProjects);
        console.log("Fetched projects:", filteredProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]); // Set to an empty array on error
      }
    };

    useEffect(() => {
      fetchProjects();
    }, []);
    return (
      <div className="bg-white dark:bg-gray-800 px-4 sm:px-10 md:px-10 lg:px-40">
        <Navbar />

        <div className=" flex h-full flex-col justify-center items-start md:items-center  md:p-10  rounded-3xl">
             <div className="flex flex-col items-start md:items-center">
               <h1 className="gradient-text font-semibold text-xl">Portfolio</h1>
               <h1 className="text-3xl md:text-6xl text-gray-500 dark:text-white font-bold">
                 My Recent Works
               </h1>
             </div>
             <div className="flex flex-col gap-4 mt-6">
               {projects.map((project, index) => (
                 <div
                   key={project._id}
                   className={`w-full bg-gray-50 dark:bg-gray-800 md:dark:bg-transparent border hover:bg-gray-200 md:hover: border-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 rounded-3xl  p-4 flex gap-4 ${
                     index % 2 === 0
                       ? "flex-col md:flex-row"
                       : "flex-col md:flex-row-reverse"
                   }`}
                 >
                   {/* Project Image */}
                   <div
                     data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                     className=" w-full h-fit flex items-center justify-center"
                   >
                     <img
                       src={
                         `http://localhost:1000/uploads/${project.imageUrl}` ||
                         "/images/pihu.jpg"
                       }
                       alt={project.title}
                       className="rounded-xl md:rounded-3xl w-full floating-animation hover:"
                     />
                   </div>
       
                   {/* Project Details */}
                   <div className="w-full md:w-1/2 p-2 md:p-4">
                     <h1 className="text-xl md:text-3xl gradient-text font-extrabold">
                       {project.title}
                     </h1>
                     <div className="w-full hidden md:block h-28">
                       <p className="text-lg  text-gray-600 dark:text-gray-300 line-clamp-4 overflow-hidden">
                         {project.description}
                       </p>
                     </div>
                     <h1 className="text-xl mt-2 font-semibold hidden md:block text-gray-600 dark:text-gray-300">
                       {project.companyName || "Company Name"}
                     </h1>
                     <div className="flex gap-2 mt-2">
                       {/* Display tags if available */}
                       {project.tags &&
                         project.tags.split(",").map((tag, index) => (
                           <span
                             key={index}
                             className=" text-gray-600 bg-white dark:text-white dark:bg-gray-700 shadow-md  rounded-lg px-2 py-1"
                           >
                             {tag.trim()}
                           </span>
                         ))}
                       <span className="text-gray-400 ml-auto block md:hidden  dark:text-gray-500 -rotate-45">
                         <FaArrowRight size="30" />
                       </span>
                     </div>
                   </div>
       
                   {/* Arrow Icon */}
                   <div className=" items-start hidden md:flex p-4 justify-center">
                     <span className="text-gray-400 dark:text-gray-500 -rotate-45">
                       <FaArrowRight size="50" />
                     </span>
                   </div>
                 </div>
               ))}
             </div>
           
           </div>
      </div>
    );
}

export default MyWork