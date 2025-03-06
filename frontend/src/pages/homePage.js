import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/heroSection";
import SplashScreen from "../components/splashScreen";
import MouseFollower from "../components/mouseFollower";
import Footer from "../components/footer";
import Services from "../components/services";
import About from "../components/about";
import Resume from "../components/resumeSection";
import MyRecentWork from "../components/MyRecentWork";
import TestimonialSection from "../components/testimonialSection";
import ContactForm from "../components/contactForm";
import { Element } from "react-scroll";
function HomePage() {
  return (
    <>
      <div className="hidden md:block">
        <MouseFollower />
      </div>

      <div className="px-4 sm:px-10 md:px-10 lg:px-40 bg-white h-fit  gap-10 dark:bg-gray-900 font-syne overflow-x-hidden">
        <SplashScreen />
        <Navbar />
        <Element name="home">
          <HeroSection />
        </Element>

        <Services />
        <Element name="about">
          <About />
        </Element>
        <Resume />
        <Element name="project">
          <MyRecentWork />
        </Element>
        <TestimonialSection />
        <Element name="contact">
          <ContactForm />
        </Element>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
