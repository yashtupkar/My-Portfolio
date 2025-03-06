import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvgkpppg"); // Replace with your Formspree ID

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Show toast on successful form submission
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); // Clear form
    }
  }, [state.succeeded]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <div className="w-full h-fit md:h-screen flex  items-center mt-20 md:mt-0 ">
      <div className="md:border border-gray-700 rounded-3xl p-2 md:px-6 md:py-10 flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 flex flex-col gap-6 ">
          <div>
            <h1 className="gradient-text font-bold text-xl">Contact</h1>
            <h2 className="text-3xl md:text-6xl text-gray-500 dark:text-white font-bold">
              Let's <br /> connect
            </h2>
          </div>

          <div className=" gap-4 items-center p-2 hidden md:flex border-b border-gray-600">
            <span className="text-3xl text-white">
              <CiMail />
            </span>
            <div>
              <p className="text-lg text-gray-400">Email us</p>
              <h1 className="text-xl font-bold text-gray-300">
                yashtupkar6@gmail.com
              </h1>
            </div>
          </div>

          <div className="hidden md:flex gap-4 items-center p-2 border-b border-gray-600">
            <span className="text-3xl text-white">
              <FiPhone />
            </span>
            <div>
              <p className="text-lg text-gray-400">Call us</p>
              <h1 className="text-xl font-bold text-gray-300">+917898297769</h1>
            </div>
          </div>

          <div className="hidden md:flex gap-4 items-center p-2 border-b border-gray-600">
            <span className="text-3xl text-white">
              <GrLocation />
            </span>
            <div>
              <p className="text-lg text-gray-400">Location</p>
              <h1 className="text-xl font-bold text-gray-300">
                Bhopal, Madhya Pradesh, India
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full ml-0 md:ml-20 h-fit mt-6 md:mt-0">
          <form onSubmit={onSubmit}>
            <div className="flex gap-2 md:gap-4 items-center md:p-2 mb-2 md:mb-0">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="name"
                  className="text-white md:ml-2 text-sm md:text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border-2 text-white text-sm md:text-base border-gray-700 bg-transparent px-3 py-2 md:px-6 md:py-4 rounded md:rounded-xl"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="email"
                  className="text-white md:ml-2 text-sm md:text-base"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border md:border-2 text-sm md:text-base text-white border-gray-700 bg-transparent px-3 py-2 md:px-6 md:py-4 rounded md:rounded-xl"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 items-center md:p-2 mb-2 md:mb-0">
              <div className="flex flex-col gap-2 w-full ">
                <label
                  htmlFor="phone"
                  className="text-white md:ml-2 text-sm md:text-base"
                >
                  Phone No.
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone no."
                  className="w-full border md:border-2 text-white text-sm md:text-base border-gray-700 bg-transparent px-3 py-2 md:px-6 md:py-4 rounded md:rounded-xl"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="subject"
                  className="text-white md:ml-2 text-sm md:text-base"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full border md:border-2 text-white text-sm md:text-base border-gray-700 bg-transparent px-3 py-2 md:px-6 md:py-4 rounded md:rounded-xl"
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="flex gap-2 md:gap-4 items-center md:p-2">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="message"
                  className="text-white text-sm md:text-base md:ml-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full border md:border-2 text-sm md:text-base text-white border-gray-700 bg-transparent px-6 py-4 rounded md:rounded-xl"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="md:p-2 mt-2">
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-custom-gradient flex text-sm md:text-xl gap-2 items-center justify-center w-1/2 md:w-1/3 text-white font-semibold p-2 md:p-4 rounded md:rounded-lg"
              >
                {state.submitting ? "Sending..." : "Submit"}{" "}
                <span className="text-2xl">
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
