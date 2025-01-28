// import React, { useState, useEffect } from "react";
// import { MdWbSunny } from "react-icons/md";
// import { IoMoon } from "react-icons/io5";
// import { FaPaperPlane } from "react-icons/fa";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Retrieve dark mode state from localStorage on component mount
//   useEffect(() => {
//     const isDarkMode = localStorage.getItem("dark") === "true";
//     if (isDarkMode) {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("dark", "true"); // Save dark mode state
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.removeItem("dark"); // Remove dark mode state
//     }
//   };

//   const NavLinks = [
//     { title: "Home", url: "#home" },
//     { title: "About", url: "#about" },
//     { title: "Contact", url: "#contact" },
//     { title: "Projects", url: "#project" },
//   ];

//   return (
//     <nav className="bg-transparent">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
//           MyLogo
//         </div>

//         {/* Nav Links */}
//         <ul className="hidden md:flex space-x-6">
//           {NavLinks.map((link, index) => (
//             <li key={index}>
//               <a
//                 href={link.url}
//                 className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
//               >
//                 {link.title}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Buttons */}
//         <div className="flex items-center space-x-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
//           >
//             {darkMode ? (
//               <MdWbSunny className="h-5 w-5 text-gray-400 transform hover:rotate-90 duration-300 cursor-pointer" />
//             ) : (
//               <IoMoon className="h-5 w-5 text-gray-600 transform hover:-rotate-45 duration-300 cursor-pointer" />
//             )}
//           </button>

//           {/* Let’s Talk Button */}
//           <button className="px-4 flex items-center gap-2 py-2 bg-custom-gradient text-white rounded-md hover:bg-blue-600">
//             Let’s Talk <FaPaperPlane />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { MdWbSunny } from "react-icons/md";
// import { IoMoon, IoMenu, IoClose } from "react-icons/io5";
// import { FaPaperPlane } from "react-icons/fa";
// import { FaTimes } from "react-icons/fa";
// import { FiArrowUpRight } from "react-icons/fi";
// import { FaBehance, FaLinkedin, FaDribbble, FaGithub } from "react-icons/fa";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Retrieve dark mode state from localStorage on component mount
//   useEffect(() => {
//     const isDarkMode = localStorage.getItem("dark") === "true";
//     if (isDarkMode) {
//       setDarkMode(true);
//       document.documentElement.classList.add("dark");
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("dark", "true");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.removeItem("dark");
//     }
//   };

//   const NavLinks = [
//     { title: "Home", url: "#home" },
//     { title: "About", url: "#about" },
//     { title: "Contact", url: "#contact" },
//     { title: "Projects", url: "#project" },
//   ];

//   return (
//     <nav className="bg-transparent">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
//           MyLogo
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
//           >
//             {menuOpen ? (
//               <IoClose className="h-6 w-6 text-gray-600 dark:text-gray-400" />
//             ) : (
//               <IoMenu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
//             )}
//           </button>
//         </div>

//         {/* Nav Links for Larger Screens */}
//         <ul
//           className={`md:flex space-x-6 hidden ${
//             menuOpen ? "block" : "hidden"
//           }`}
//         >
//           {NavLinks.map((link, index) => (
//             <li key={index} className="my-2 md:my-0">
//               <a
//                 href={link.url}
//                 className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
//               >
//                 {link.title}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Buttons */}
//         <div className="flex items-center space-x-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
//           >
//             {darkMode ? (
//               <MdWbSunny className="h-5 w-5 text-gray-400 transform hover:rotate-90 duration-300 cursor-pointer" />
//             ) : (
//               <IoMoon className="h-5 w-5 text-gray-600 transform hover:-rotate-45 duration-300 cursor-pointer" />
//             )}
//           </button>

//           {/* Let’s Talk Button */}
//           <button className="hidden md:flex px-4 items-center gap-2 py-2 bg-custom-gradient text-white rounded-md hover:bg-blue-600">
//             Let’s Talk <FaPaperPlane />
//           </button>
//         </div>
//       </div>
//       {/* Mobile Nav Links */}
//       {menuOpen && (
//         <div
//           className={`fixed z-50 top-0 right-0 w-3/4 md:w-1/3 h-full bg-black text-white shadow-lg transform transition-transform duration-700 ease-in-out ${
//             menuOpen ? "translate-x-0" : "translate-x-[100%]"
//           }`}
//           aria-hidden={!menuOpen}
//         >
//           {/* Header with Logo & Close Button */}
//           <div className="flex justify-between items-center p-6 border-b border-gray-700">
//             <span className="text-2xl font-bold tracking-wide">YASH</span>
//             <button
//               onClick={() => setMenuOpen(false)}
//               className="bg-yellow-500 p-3 rounded-full text-black hover:bg-yellow-400 transition-all"
//               aria-label="Close Menu"
//             >
//               <FaTimes size={20} />
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <ul className="p-6 space-y-6">
//             {NavLinks.map((link, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center border-b border-gray-700 pb-2 transition-all duration-300 hover:border-gray-500"
//               >
//                 <a
//                   href={link.url}
//                   className="text-lg font-medium hover:text-gray-400 transition-colors"
//                 >
//                   {link.title}
//                 </a>
//                 <FiArrowUpRight size={18} className="hover:text-gray-400" />
//               </li>
//             ))}
//           </ul>

//           {/* Social Media Icons */}
//           <div className="absolute bottom-6 left-6 flex space-x-6 text-2xl">
//             <a href="#" className="hover:text-gray-400 transition-colors">
//               <FaBehance />
//             </a>
//             <a href="#" className="hover:text-gray-400 transition-colors">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="hover:text-gray-400 transition-colors">
//               <FaDribbble />
//             </a>
//             <a href="#" className="hover:text-gray-400 transition-colors">
//               <FaGithub />
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("dark");
    }
  };

  const NavLinks = [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Contact", url: "#contact" },
    { title: "Projects", url: "#project" },
  ];

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto px-0 md:px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-600 dark:text-gray-400">
          MyLogo
        </div>

        {/* Nav Links for Larger Screens */}
        <ul className="hidden md:flex space-x-6">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                {link.title}
              </a>
            </li>
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
          <button className="hidden md:flex px-4 items-center gap-2 py-2 bg-custom-gradient text-white rounded-md hover:bg-blue-600">
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
          <span className="text-2xl font-bold tracking-wide">YASH</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="bg-custom-gradient p-2 rounded-xl text-white  transition-all"
            aria-label="Close Menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="p-6 space-y-6">
          {NavLinks.map((link, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-700 pb-2 transition-all duration-300 hover:border-gray-500"
            >
              <a
                href={link.url}
                className="text-lg font-medium hover:text-gray-400 transition-colors"
              >
                {link.title}
              </a>
              <FiArrowUpRight size={18} className="hover:text-gray-400" />
            </li>
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
