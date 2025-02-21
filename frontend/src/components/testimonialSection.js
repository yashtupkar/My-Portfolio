import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <div className="w-full h-fit flex flex-col md:flex-row gap-2 mt-20 p-4">
      <div className="w-1/2  ">
        <div>
          <h1 className="gradient-text font-bold text-xl">Testimonial</h1>
          <h2 className="text-3xl md:text-5xl text-gray-500 dark:text-white font-bold">
            Client feedBack
          </h2>
        </div>
      </div>
      <div className="w-full flex gap-2">
        
        <div className="w-96 h-fit md:h-96 rounded-xl border flex flex-col justify-between border-gray-600 text-gray-500 dark:text-gray-300 p-4">
          <BiSolidQuoteLeft size={60} />
          <p className="text-sm md:text-xl text-semibold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            expedita dolore nisi nam officiis magni, consectetur modi nulla
            itaque illum consequuntur voluptatibus inventore quaerat quod eius
            possimus beatae harum assumenda!
          </p>
          <div className="flex gap-2 items-center mt-2 ">
            <FaUserCircle size={40} />{" "}
            <h1 className="text-xl font-bold">Yash Tupkar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection