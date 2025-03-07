
import React, { useEffect, useRef, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur expedita dolore nisi nam officiis magni.",
    author: "Yash Tupkar",
  },
  {
    id: 2,
    text: "Modi nulla itaque illum consequuntur voluptatibus inventore quaerat quod eius possimus beatae harum assumenda!",
    author: "Bhumika Singh",
  },
  {
    id: 3,
    text: "Amet consectetur adipisicing elit. Consequatur expedita dolore nisi nam officiis magni.",
    author: "Rahul Verma",
  },
  {
    id: 4,
    text: "Modi nulla itaque illum consequuntur voluptatibus inventore quaerat quod eius possimus beatae harum assumenda!",
    author: "Bhumika Singh",
  },
  {
    id: 5,
    text: "Amet consectetur adipisicing elit. Consequatur expedita dolore nisi nam officiis magni.",
    author: "Rahul Verma",
  },
];

const TestimonialSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = activeIndex * 320; // Adjust for centering
      scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <div className="w-full flex flex-col items-start md:items-center h-fit md:h-[80vh] gap-4 md:gap-6 mt-10 md:mt-20 md:p-6">
      {/* Heading Section */}
      <div className="text-start md:text-center mb-6">
        <h1 className="text-xl font-semibold gradient-text">Testimonial</h1>
    
        <h2 className="text-3xl md:text-6xl font-bold text-gray-700 dark:text-white">
           Client's Feedback 
        </h2>
   
      </div>

      {/* Testimonials Container */}
      <div
        ref={scrollRef}
        className="w-full flex overflow-hidden gap-4 relative"
      >
        <div
          className="flex flex-nowrap gap-6 transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${activeIndex * 320}px)` }}
        >
          {[...testimonials, ...testimonials].map(
            ({ id, text, author }, index) => (
              <div
                key={index}
                className="relative min-w-[300px] md:min-w-[400px] h-56 md:h-80 rounded-xl border flex flex-col justify-between border-gray-400 dark:border-gray-600 p-6 transition-all duration-500"
              >
                <BiSolidQuoteLeft size={50} className="text-indigo-400" />
                <p className="text-sm md:text-lg font-medium text-gray-600 dark:text-gray-300">
                  {text}
                </p>
                <div className="flex gap-2 items-center mt-2">
                  <FaUserCircle
                    size={40}
                    className="text-gray-500 dark:text-gray-300"
                  />
                  <h1 className="text-xl font-bold text-gray-500 dark:text-white">
                    {author}
                  </h1>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;