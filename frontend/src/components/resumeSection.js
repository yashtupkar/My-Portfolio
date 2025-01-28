import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("About Me");

  // Sections content
  const sections = {
    "About Me": (
      <div>
        <h1 className="text-2xl font-semibold dark:text-white mb-4">
          About me
        </h1>
        <h3 className="text-gray-500 text-lg font-medium">Based in German</h3>
        <p className="mt-4 dark:text-gray-300 text-lg">
          Mark Henry, <span className="font-bold">Product Designer</span>, based
          in Germany. That is where I come in. A lover of words, a wrangler of
          copy. Here to create copy that not only reflects who you are and what
          you stand for,
        </p>
        <p className="mt-4 dark:text-gray-300 text-lg">
          but words that truly land with those that read them, calling your
          audience in and making them want more.
        </p>
      </div>
    ),
    Experience: (
      <div>
        <h1 className="text-2xl font-semibold dark:text-white mb-4">
          Experience
        </h1>
        <ul className="mt-4 dark:text-gray-300 text-lg list-disc pl-5">
          <li>Senior Product Designer at ABC Corp (2015–2023)</li>
          <li>UI/UX Designer at XYZ Inc (2010–2015)</li>
        </ul>
      </div>
    ),
    Education: (
      <div>
        <h1 className="text-2xl font-semibold dark:text-white mb-4">
          Education
        </h1>
        <ul className="mt-4 dark:text-gray-300 text-lg list-disc pl-5">
          <li>Bachelor's in Design, University of Berlin</li>
          <li>Certification in UX Design, Coursera</li>
        </ul>
      </div>
    ),
    Skills: (
      <div>
        <h1 className="text-2xl font-semibold dark:text-white mb-4">Skills</h1>
        <ul className="mt-4 dark:text-gray-300 text-lg list-disc pl-5">
          <li>UI/UX Design</li>
          <li>Prototyping and Wireframing</li>
          <li>Figma, Adobe XD, Sketch</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </div>
    ),
    Awards: (
      <div>
        <h1 className="text-2xl font-semibold dark:text-white mb-4">Awards</h1>
        <ul className="mt-4 dark:text-gray-300 text-lg list-disc pl-5">
          <li>Best Designer Award - ABC Corp (2020)</li>
          <li>Innovation in Design - XYZ Inc (2018)</li>
        </ul>
      </div>
    ),
  };

  return (
    <div className=" h-fit  md:p-8 mt-20">
      <div
        data-aos="zoom-out-down"
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-12"
      >
        <div>
          <h1 className="gradient-text font-bold text-xl">Resume</h1>
          <h2 className="text-3xl md:text-5xl text-gray-500 dark:text-white font-bold">
            All over my <br /> details find here...
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          data-aos="zoom-out-up"
          className="flex flex-wrap md:space-y-4 gap-2"
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

        {/* Right Section - Content */}
        <div
          data-aos="zoom-out-left"
          className="md:col-span-2 bg-gray-100 dark:bg-gray-800 rounded-3xl p-6"
        >
          {sections[activeSection]}
        </div>
      </div>
      </div>
      
  );
};

export default Resume;
