import React, { useState, useEffect } from "react";
import { MdWbSunny } from "react-icons/md";
import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
import {
  FaPaperPlane,
  FaTimes,
  FaBehance,
  FaLinkedin,
  FaDribbble,
  FaGithub,
} from "react-icons/fa";
import toast from 'react-hot-toast'
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isDarkMode = localStorage.getItem("dark") === "true";
    if (isDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      toast("Hello Darkness!", {
        icon: "🌑",
        style: {
          borderRadius: "10px",
          background: "#1F2937",
          color: "#fff",
        },
      });
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      toast("Hello, Brightness!", {
        icon: "☀️",
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#000",
        },
      });
      localStorage.removeItem("dark");
    }
  };

  const NavLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Projects", url: "/projects" },
  ];

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto px-0 md:px-4 py-4 flex justify-between items-center">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="text-2xl flex gap-2 items-center cursor-pointer font-bold text-gray-600 dark:text-gray-400"
        >
          <img
            src="/images/yylogo.png"
            className="rounded-lg w-12 h-12 bg-custom-gradient border-4 border-gray-200 dark:border-gray-600"
          />
          <h1 className="text-2xl cursor-pointer font-bold text-gray-600 dark:text-gray-400">
            Yash Tupkar
          </h1>
        </div>

        {/* Nav Links for Larger Screens */}
        <ul className="hidden md:flex space-x-6">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              onClick={() => {
                navigate(`${link.url}`);
              }} // Uses the section ID
              smooth={true}
              duration={500}
              className="text-gray-600 relative  hover:tracking-widest transition-all duration-300 ease-in-out cursor-pointer dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              {link.title}
            </Link>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <MdWbSunny className="h-5 w-5 text-gray-400 transform hover:rotate-90 duration-300" />
            ) : (
              <IoMoon className="h-5 w-5 text-gray-600 transform hover:-rotate-45 duration-300" />
            )}
          </button>

          {/* Let’s Talk Button */}
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="hidden md:flex px-4 items-center gap-2 py-2 bg-custom-gradient text-white rounded-md hover:bg-blue-600"
          >
            Let’s Talk <FaPaperPlane />
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 md:hidden"
          >
            <IoMenu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu (Fixed & Smooth) */}
      <div
        className={`fixed z-50 top-0 right-0 w-3/4 md:w-1/3 h-full bg-black text-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <img
            src="/images/yylogo.png"
            className="rounded-lg w-12 h-12 bg-custom-gradient border-4 border-gray-200 dark:border-gray-600"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-gray-700 p-2 rounded-full text-white  transition-all"
            aria-label="Close Menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="p-6 space-y-6">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              onClick={() => {
                navigate(`${link.url}`);
                setMenuOpen(false);
              }} //// Uses the section ID
              smooth={true}
              duration={500}
              className="flex justify-between items-center border-b cursor-pointer text-3xl border-gray-600 pb-2 transition-all duration-300 hover:border-gray-500"
            >
              {link.title}
            </Link>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="absolute bottom-6 left-6 flex space-x-6 text-2xl">
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FaBehance />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FaDribbble />
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
