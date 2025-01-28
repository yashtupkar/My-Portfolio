import React from 'react'

const About = () => {
     const statsData = [
       { value: "10", label: "Projects" },
       { value: "1.2k+", label: "Happy clients" },
       { value: "4+", label: "Years of experience" },
     ];
  return (
    <div className="relative flex flex-col md:flex-row h-fit md:h-[90vh] md:border-2 md:border-gray-700 rounded-3xl items-center gap-2 mt-10">
      <div className="absolute top-10 right-10 w-20 h-20 hidden md:block">
        <img src="/images/star.png" alt="" className="w-20 h-20" />
      </div>

      {/* <div data-aos="zoom-out-right" className="w-full md:w-1/2">
        <div className="w-full h-full rounded-full flex justify-center items-center">
          <img
            src="/images/about.png"
            alt="Yash Tupkar"
            className="rounded-full"
          />
        </div>
      </div> */}
      <div data-aos="zoom-out-right" className="w-full md:w-1/2">
        <div
          className="w-full h-full rounded-full flex justify-center items-center relative group cursor-pointer"
         
        >
          <img
            src="/images/about.png"
            alt="Yash Tupkar"
            className="rounded-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-12"
          />

          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-400 transition-all duration-300 transform scale-0 group-hover:scale-100 group-hover:ring-4 group-hover:ring-purple-500"></div>

          {/* Hover Text Popup */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="bg-custom-gradient text-white p-2 rounded-xl shadow-md text-sm md:text-lg font-semibold">
              Yash Tupkar – Web Developer
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
          <span className="gradient-text">Yash</span> Tupkar, <br />
          <span>Full Stack Web Developer</span>
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-4">
          Based in India
        </h1>
        <p className="text-sm md:text-base mt-2 md:mt-4 text-gray-600 dark:text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit cum
          quidem reprehenderit officiis, doloremque sed. Fugit quod, quo, dolor
          harum laborum beatae a voluptatibus velit similique quasi saepe
          dolorum quisquam?
        </p>
        <div className="flex gap-6 items-center mt-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl font-bold">{stat.value}</h1>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 md:mt-6 bg-custom-gradient text-white font-semibold md:text-xl px-6 py-4 text-sm rounded-xl">
          Download My Resume
        </button>
      </div>
    </div>
  );
}

export default About