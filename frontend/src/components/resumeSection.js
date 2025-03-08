import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";

const Resume = () => {

  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const [activeSection, setActiveSection] = useState("About Me");
  const [aboutMe, setAboutMe] = useState("");

    const [heroData, setHeroData] = useState();

    useEffect(() => {
      let isMounted = true;

      const fetchHero = async () => {
        try {
          const response = await axios.get(`${apiUrl}/api/v1/get-hero`);
          if (isMounted) {
            if (response.data && response.data.length > 0) {
              setHeroData(response.data[0]);
              console.log(response.data[0]);
            }
          }
        } catch (err) {
          console.error("Error getting hero:", err);
        }
      };

      fetchHero();

      return () => {
        isMounted = false;
      };
    }, []);
  
function formatDateToMonthYear(inputDate) {
  // Ensure the input is a Date object
  const date = new Date(inputDate);
  if (isNaN(date)) {
    throw new Error("Invalid Date");
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}


  const fetchAboutMe = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/get-aboutMe`);
      setAboutMe(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.error("Error fetching about me data:", error);
    }
  };

  useEffect(() => {
    fetchAboutMe();
  }, []); 


  const sections = {
    "About Me": (
      <div>
        <h1 className="text-lg md:text-3xl font-bold dark:text-white mb-4">
          About me
        </h1>
        <div className="h-[50vh] md:h-[70vh] bg-gray-200 dark:bg-gray-900 rounded-xl overflow-y-scroll  p-2 md:p-4">
          <h3 className="text-gray-600 dark:text-gray-400 text-lg font-medium">
            Based in India
          </h3>
          <p className="md:mt-4 mt-2 text-black dark:text-white text-sm md:text-lg">
            {aboutMe.bio}
          </p>
          <div className="mt-6 ">
            <ul className="flex flex-col gap-3 list-none p-0">
              <li className="flex gap-10 items-center">
                <span className="w-[110px] text-gray-600 dark:text-gray-400 text-sm md:text-lg font-normal leading-none">
                  Name
                </span>
                <span className="gradient-text  text-sm md:text-2xl font-bold leading-8 font-[Syne]">
                  {aboutMe?.name}
                </span>
              </li>
              <li className="flex gap-10 items-center">
                <span className="w-[110px] text-gray-600 dark:text-gray-400 text-sm md:text-lg font-normal leading-none">
                  Nationality
                </span>
                <span className="gradient-text  text-sm md:text-2xl font-bold leading-8 font-[Syne]">
                  India
                </span>
              </li>
              <li className="flex gap-10 items-center">
                <span className="w-[110px] text-gray-600 dark:text-gray-400 text-sm md:text-lg font-normal leading-none">
                  Phone
                </span>
                <span className="gradient-text  text-sm md:text-2xl font-bold leading-8 font-[Syne]">
                  {heroData?.phone}
                </span>
              </li>
              <li className="flex gap-10 items-center">
                <span className="w-[110px] text-gray-600 dark:text-gray-400 text-sm md:text-lg font-normal leading-none">
                  Email
                </span>
                <span className="gradient-text  text-sm md:text-2xl font-bold leading-8 font-[Syne]">
                  {heroData?.email}
                </span>
              </li>
              <li className="flex gap-10 items-center">
                <span className="w-[110px] text-gray-600 dark:text-gray-400 text-sm md:text-lg font-normal leading-none">
                  Experience
                </span>
                <span className="gradient-text  text-sm md:text-2xl font-bold leading-8 font-[Syne]">
                  3+ years
                </span>
              </li>
              <li className="flex gap-10 items-center">
                <span className="w-[110px] text-gray-600 dark:text-gray-400 text-sm md:text-lg font-normal leading-none">
                  Freelance
                </span>
                <span className="gradient-text  text-sm md:text-2xl font-bold leading-8 font-[Syne]">
                  Available
                </span>
              </li>

              <li className="flex gap-10 items-center">
                <span className="w-[110px] text-gray-600 dark:text-gray-400 text-sm md:text-lg font-normal leading-none">
                  Language
                </span>
                <span className="gradient-text  text-sm md:text-2xl font-bold leading-8 font-[Syne]">
                  Hindi, English, Marathi
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    Experience: (
      <div>
        <h1 className="text-lg md:text-3xl font-bold dark:text-white mb-4">
          Experience
        </h1>
        <div className="flex flex-col h-[50vh] md:h-[70vh]  gap-2 bg-gray-200 dark:bg-gray-900 rounded-xl overflow-y-scroll p-2">
          {aboutMe?.experience?.length > 0 ? (
            aboutMe.experience.map((experience, index) => (
              <div
                key={index}
                className="w-full  h-fit hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform duration-300 hover:scale-95 bg-gray-50 dark:bg-gray-800  p-2 md:p-4 dark:text-white rounded-xl"
              >
                <span className="text-gray-600 dark:text-gray-400 text-sm md:text-lg ">
                  {formatDateToMonthYear(experience.startDate)}-
                  {formatDateToMonthYear(experience.endDate)}
                </span>

                <div className="flex items-center gap-2 mt-4">
                  <div className="bg-custom-gradient rounded-full w-2 h-2"></div>
                  <h1 className="font-bold text-black dark:text-white text-lg md:text-2xl">
                    {experience.company}
                  </h1>
                </div>
                <p className="dark:text-gray-400 text-gray-600 text-sm md:text-lg font-bold">
                  {experience.position}
                </p>
                <p className="text-sm md:text-lg  text-gray-500 dark:text-gray-400 mt-4">
                  {experience.description}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No experience data available.</p>
          )}
        </div>
      </div>
    ),

    Education: (
      <div>
        <h1 className="text-lg md:text-3xl font-bold dark:text-white mb-4">
          Education
        </h1>
        <div className="flex flex-col gap-2 md:gap-4 h-[50vh] md:h-[70vh] bg-gray-200 dark:bg-gray-900 rounded-xl overflow-y-scroll p-2 md:p-4">
          {aboutMe?.education?.length > 0 ? (
            aboutMe.education.map((education, index) => {
              return (
                <div
                  key={index}
                  className="p-2 md:p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform duration-300 hover:scale-95 text-white rounded-xl"
                >
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-lg ">
                    {formatDateToMonthYear(education.startDate)}-
                    {formatDateToMonthYear(education.endDate)}
                  </span>
                  <div className="flex gap-2 items-center mt-4 mb-4">
                    <div className="bg-custom-gradient rounded-full w-2 h-2"></div>
                    <p className="font-semibold text-lg md:text-xl text-black dark:text-white">
                      {education.institution}
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
                      {education.degree}
                    </p>
                    <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400">
                      {education.fieldOfStudy}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No education data available.</p>
          )}
        </div>
      </div>
    ),
    Skills: (
      <div>
        <h1 className="text-lg md:text-3xl font-bold dark:text-white mb-4">
          Skills
        </h1>
        <div className="h-[50vh] md:h-[70vh] grid grid-cols-2 gap-2 bg-gray-200 dark:bg-gray-900 rounded-xl overflow-y-scroll p-2">
          {aboutMe?.skills?.length > 0 ? (
            aboutMe.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-800  cursor-pointer dark:text-gray-400 flex items-center justify-center  hover:bg-custom-gradient hover:text-white dark:hover:text-white
 transition-transform duration-300 hover:scale-95  rounded-xl"
              >
                <h1 className="font-bold md:font-extrabold    text-lg md:text-2xl ">
                  {skill}
                </h1>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No skills data available.</p>
          )}
        </div>
      </div>
    ),

    Awards: (
      <div>
        <h1 className="text-lg md:text-3xl font-bold dark:text-white mb-4">
          Awards
        </h1>
        <div className="flex flex-col gap-2 md:gap-4 h-[50vh] md:h-[70vh] bg-gray-200 dark:bg-gray-900 rounded-xl overflow-y-scroll p-2 md:p-4">
          {aboutMe?.awards?.length > 0 ? (
            [...aboutMe.awards].reverse().map((award, index) => (
              <a href={`${award?.linkedin || "http://linkedin.com"}`}>
                <div
                  key={index}
                  className="p-2 md:p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-transform duration-300 hover:scale-95 text-white rounded-xl"
                >
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-lg block">
                    Year: {award?.year}
                  </span>
                  <div className="flex gap-2 items-center mt-2 mb-2 md:mb-4">
                    <div className="bg-custom-gradient rounded-full w-2 h-2"></div>
                    <p className="font-bold test-lg md:text-xl text-black dark:text-white">
                      {award?.title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="test-sm md:text-lg text-gray-600 font-semibold dark:text-gray-400">
                      {" "}
                      Organization:{" "}
                      <span className="text-gray-900 dark:text-gray-300">
                        {award?.organization}
                      </span>
                    </p>
                    <p className="text-sm md:text-lg text-gray-900 dark:text-gray-300">
                      {award?.description}
                    </p>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="text-gray-500">No award data available.</p>
          )}
        </div>
      </div>
    ),
  };

  return (
    <div className=" h-fit md:h-screen flex flex-col md:flex-row gap-4  md:py-16 mt-20 md:mt-0">
      <div
        data-aos="zoom-out-down"
        className="flex flex-col w-full md:w-1/2 justify-between items-start md:items-center "
      >
        <div>
          <h1 className="gradient-text font-bold text-xl">Resume</h1>
          <h2 className="text-3xl md:text-6xl text-gray-700 dark:text-white font-bold">
            All over my <br /> details find here...
          </h2>
        </div>
        <div
          data-aos="zoom-out-up"
          className="flex flex-wrap md:space-y-4 gap-2 mt-6"
        >
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-fit md:w-full  text-left text-sm md:text-lg font-semibold ${
                activeSection === section
                  ? " bg-custom-gradient text-white "
                  : "text-gray-600  bg-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform"
              } py-2 px-3 md:py-4 md:px-6 rounded-md flex justify-between items-center `}
            >
              {section}{" "}
              <span className=" -rotate-45">
                <FaArrowRight size="20" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full ">
        {/* Right Section - Content */}
        <div
          data-aos="zoom-out-left"
          className="md:col-span-2 bg-gray-100 h-[60vh] md:h-[85vh] dark:bg-gray-800 rounded-xl px-3 py-2 md:p-6"
        >
          {sections[activeSection]}
        </div>
      </div>
    </div>
  );
};

export default Resume;
