import React, { useEffect, useState } from 'react'
import AnimatedText from './animatedText';
import Avatar from 'react-avatar';
import { BsInstagram, BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLink, FaReact, FaJsSquare, FaHtml5 } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { SiTailwindcss,  SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { IoPaperPlane } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthStar from './AuthStar';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




const HeroSection = () => {

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const downloadPDF = () => {
    const pdfUrl = `${apiUrl}/uploads/Yashtupkar-resume.pdf`; // Backend URL
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Yashtupkar-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

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
  
    const SocialLinks = [
      {
        title: "Instagram",
        icon: <BsInstagram size={20} />,
        url: heroData?.instagram || "", // Using optional chaining and default to empty string
      },
      {
        title: "Linkedin",
        icon: <IoLogoLinkedin size={20} />,
        url: heroData?.linkedin || "",
      },
      {
        title: "Github",
        icon: <BsGithub size={20} />,
        url: heroData?.github || "",
      },
      {
        title: "Fiver",
        icon: <TbBrandFiverr size={20} />,
        url: heroData?.fiver || "https://medium.com/@example", // Default if no fiver URL
      },
      {
        title: "Twitter",
        icon: <FaSquareXTwitter size={20} />,
        url: heroData?.twitter || "https://twitter.com/example", // Default if no twitter URL
      },
    ];
  const Technologies = [
    {
      title: "Html",
      icon: <FaHtml5 />,
      color: "#E4522D",
    },
    {
      title: "React Js",
      icon: <FaReact />,
      color: "#57D3F5",
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#57D3F5",
    },
    {
      title: "JavaScript",
      icon: <FaJsSquare />,
      color: "#F7CF00",
    },
    {
      title: "Node js",
      icon: <RiNodejsLine />,
      color: "#3A8338",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
      color: "#559134",
    },
    {
      title: "Github",
      icon: <BsGithub className="dark:text-white text-black" />,
      
    },
  ];

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Set size to 40 for small screens, 50 for medium and above
    const avatarSize = screenSize < 768 ? 40 : 50;
  
  return (
    <div className="flex flex-col md:flex-row w-full h-fit md:h-[90vh] gap-3 bg-transparent">
      {/* Left Div */}
      <div className="flex w-full md:w-1/2 flex-col dark:text-gray-300 bg-transparent gap-4 rounded-3xl ">
        {/*section1*/}
        <div
          data-aos="fade-right"
          className=" relative h-fit md:h-[60vh] flex flex-col gap-2 bg-white shadow-xl dark:bg-gray-900 rounded-xl md:rounded-3xl dark:shadow-lg px-3 py-2 md:px-6 md:py-4 border border-gray-300 dark:border-gray-500 "
        >
          <div className="absolute top-4 right-6 md:right-10">
            <AuthStar />
          </div>
          <div className="absolute top-14 md:top-20 right-2 md:right-5 ">
            <img
              src="/images/star.png"
              alt=""
              className="w-8 h-8 floating-animation md:w-10 md:h-10"
            />
          </div>
          <div className="flex gap-4 p-3 bg-custom-gradient border-4 border-gray-200 dark:border-gray-600 cursor-pointer text-white rounded-lg md:rounded-xl w-fit items-center mb-2 mt-2 shadow-md">
            <div className="relative md:w-12 md:h-12">
              <Avatar
                src="/images/hero.png"
                size={avatarSize}
                className="w-full h-full rounded object-cover"
              />

              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            <p className="font-semibold text-sm md:text-base">
              Available for work <br />
              Contact me
            </p>
          </div>

          <h1 className="text-lg md:text-2xl  font-semibold">
            Hii{" "}
            <span
              className="text-4xl animate-wave inline-block"
              role="img"
              aria-label="wave"
            >
              👋
            </span>
            , It's me
          </h1>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            <span className="gradient-text mr-2">
              {heroData?.name?.split(" ")[0]}
            </span>
            {heroData?.name?.split(" ")[1]}
          </h1>

          <AnimatedText />
          <p className="text-sm md:text-base h-20 text-gray-500 dark:text-gray-400">
            {heroData?.bio}
          </p>
          <div className="flex w-full gap-4 mt-4 mb-4 md:mb-0 ">
            <button
              onClick={downloadPDF}
              className="bg-custom-gradient text-sm md:text-base font-semibold py-3 transition-all duration-300 ease-in-out transform hover:scale-105 px-6 rounded-lg text-white shadow-md"
            >
              Download CV
            </button>
            <button
              onClick={() => {
                navigate("/projects");
              }}
              className="text-sm md:text-base bg-white dark:bg-gray-700 font-semibold  flex gap-2 items-center shadow-md py-3 px-6 rounded-lg text-gray-600 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105  focus:outline-none focus:ring-2 focus:ring-custom-gradient active:bg-custom-gradient-dark"
            >
              {" "}
              My Work <IoPaperPlane />
            </button>
          </div>
        </div>
        {/*section2*/}
        <div
          data-aos="fade-right"
          className=" flex-1 flex flex-col h-fit md:h-[40vh] items-center md:items-start bg-white shadow-xl dark:bg-gray-900 text-white rounded-xl md:rounded-3xl dark:shadow-lg md:px-6 px-4 md:py-4 py-2 border border-gray-300 dark:border-gray-500"
        >
          <div className="flex gap-2">
            {" "}
            <h1 className=" font-semibold text-xl text-gray-600 dark:text-gray-400 flex items-center gap-2 md:mb-2">
              <span>
                <FaLink />
              </span>
              Connect with Me{" "}
            </h1>
          </div>
          <div className="flex gap-3 mt-2 flex-wrap">
            {SocialLinks.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="flex gap-2 text-md px-3 py-2 w-fit sm:w-40 bg-custom-gradient items-center   rounded-xl dark:text-white hover:bg-custom-gradient hover:text-white transition-all ease-in-out"
              >
                {link.icon}
                <span className="hidden sm:block font-semibold text-lg">
                  {link.title}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-3">
            <h1 className="flex items-center text-sm mb-2 sm:text-xl font-semibold gap-2 text-gray-700 dark:text-gray-400">
              <TfiEmail /> Email -
              <span className="underline">{heroData?.email}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Center Div */}
      <div
        data-aos="fade-up"
        className="h-full w-fit hidden  md:flex shadow-xl relative group items-center justify-center rounded-3xl overflow-hidden border border-gray-500"
      >
        <img
          src={`${apiUrl}/uploads/${heroData?.heroImg}` || "/images/hero.png"}
          alt=""
          className=" h-full rounded-3xl w-full  object-cover  shadow-lg transform transition-transform duration-500 group-hover:scale-110"
        />
        <div
          onClick={() => {
            navigate("/about");
          }}
          className="absolute cursor-pointer inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500"
        >
          <p className="text-white font-bold text-xl">Know more about me</p>
        </div>
      </div>

      {/* Right Div */}
      <div
        data-aos="fade-left"
        className="flex-1 flex flex-col items-center bg-white shadow-xl dark:bg-gray-900 rounded-xl md:rounded-3xl dark:shadow-lg px-4 py-4 border border-gray-300 dark:border-gray-500 "
      >
        <h1 className="text-xl font-semibold dark:text-gray-400 text-gray-700 mb-2">
          Techonologies
        </h1>
        <div className="flex flex-wrap gap-2 mt-2 md:flex-col h-full justify-center">
          {Technologies.map((tech) => (
            <div
              key={tech.title}
              className="group relative flex gap-2 p-3 shaking-animation  text-4xl md:text-5xl border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 shadow-xl rounded-lg mb-2 scale-100 transition-transform duration-500 hover:scale-110"
              style={{ color: tech.color }}
            >
              {tech.icon}
              {/* Tooltip (Hidden by default, shown on hover) */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-custom-gradient text-white  text-sm px-4 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                {tech.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection