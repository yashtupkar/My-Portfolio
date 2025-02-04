import React, { useState, useEffect, lazy, Suspense } from "react";

import { BiSolidQuoteLeft } from "react-icons/bi";

import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import Avatar from "react-avatar";
import { BsIntersect } from "react-icons/bs";
import { FaRegIdBadge } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

import AdminHeroSection from "../components/adminComponents/AdminHeroSection";
import ProjectSection from "../components/adminComponents/projectSection";
import AboutSection from "../components/adminComponents/AboutSection";
import TestimonialSection from "../components/adminComponents/testimonialSection";
import Navbar from "../components/navbar";






const AdminDashboard = () => {
  const savedActiveSection = localStorage.getItem("activeSection");
  const [activeSection, setActiveSection] = useState(
    savedActiveSection || "dashboard"
  );
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);






  const renderContent = () => {
    switch (activeSection) {
      case "hero":
        return <AdminHeroSection />;
      case "projects":
        return <ProjectSection/>;
      case "about":
        return <AboutSection/>;
      case "testimonials":
        return <TestimonialSection/>;
      default:
        return <AdminHeroSection/>;
    }
  };

  const navigationItems = [
    { label: "Hero Section", icon: <BsIntersect />, key: "hero" },
    {
      label: "Project Management",
      icon: <FaProjectDiagram />,
      key: "projects",
    },
    {
      label: "Testimonial Management",
      icon: <BiSolidQuoteLeft />,
      key: "testimonials",
    },
    { label: "About Section", key: "about", icon: <FaRegIdBadge /> },
  ];

  return (
    <div className="px-4 sm:px-10 md:px-10 lg:px-40 w-full h-screen bg-white dark:bg-gray-900 gap-10 font-syne overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col lg:flex-row w-full h-[90vh]  rounded-3xl border-2 border-gray-300 dark:border-gray-600 p-4 bg-white dark:bg-gray-900">
        <aside
          className={`${
            isSidebarCollapsed ? "w-22" : "w-64"
          } bg-white dark:bg-gray-800 shadow-md h-full transition-all duration-300 fixed lg:relative z-10`}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex text-center text-blue-500 font-semibold text-xl transition-opacity duration-300 ease-in-out">
              <div className="bg-custom-gradient rounded-lg p-2 flex items-center space-x-3 cursor-pointer">
                <div className="w-10 h-10 rounded overflow-hidden">
                  <Avatar
                    name={""}
                    src={"/images/about.png"}
                    size="40"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={("flex flex-col", isSidebarCollapsed && "hidden")}
                >
                  <p className="text-sm text-white capitalize font-semibold">
                    Yash Tupkar
                  </p>
                  <p className="text-xs capitalize text-gray-200 font-semibold">
                    yashtupkar6@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsSidebarCollapsed((prev) => !prev)}
              className="p-1 text-white text-xl bg-custom-gradient rounded-full absolute top-20 right-[-12px] focus:outline-none"
            >
              {isSidebarCollapsed ? (
                <IoMdArrowDropright />
              ) : (
                <IoMdArrowDropleft />
              )}
            </button>
          </div>
          <hr />
          <nav>
            <ul
              className={
                ("space-y-4 border-t-2 border-b-2 border-gray-100",
                isSidebarCollapsed ? "p-3" : "p-4")
              }
            >
              {navigationItems.map(({ label, icon, key }) => (
                <li
                  key={key}
                  role="button"
                  aria-current={activeSection === key ? "page" : undefined}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center  gap-2 mt-2 text-gray-600  rounded cursor-pointer ${
                    activeSection === key
                      ? "bg-custom-gradient text-white"
                      : "text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out transform"
                  } ${isSidebarCollapsed ? "p-3 justify-center" : "px-2 py-3"}`}
                >
                  {icon && <span className="text-lg">{icon}</span>}
                  {!isSidebarCollapsed && label}
                </li>
              ))}
            </ul>
          </nav>
          <hr />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-700 shadow-inner">
          <Suspense
            fallback={<div className="text-center p-4">Loading...</div>}
          >
            {renderContent()}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
