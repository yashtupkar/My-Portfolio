// import React,{useState} from 'react'
// import DragDropFileUpload from "../DragDropFileUpload";
// import { BsInstagram, BsGithub } from "react-icons/bs";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { TbBrandFiverr } from "react-icons/tb";
// import { FaSquareXTwitter } from "react-icons/fa6";

// const AdminHeroSection = () => {
//     const [formData, setFormData] = useState({
//       name: "Yash Tupkar",
//       bio: "I'm a passionate MERN Stack Developer 💻 and an aspiring SaaS Entrepreneur 🚀",
//       phone: "7898297769",
//       email: "yash@gmail.com",
//       skills: ["React", "Node", "Express", "MongoDB", "AWS", "Redux", "Tailwind CSS"],
     
//       company: "",
//       heroImg:"",
//       location: "Bhopal",
//       website: "",
//       linkedin: "https://www.linkedin.com/in/yash-tupkar-4696",
//       displayTime: true,
//     });

//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     };

//     const handleFileUpload = (filePath) => {
//       setFormData({
//         ...formData,
//         heroImg: filePath,
//       });
//     };

//       const handleSubmit = async (e) => {
//         e.preventDefault();

//         const heroSectionDetails = {
//           name,
//           bio,
//           phone,
//           email,
//           skills,
//           company,
//           heroImg,
//           location,
//           website,
//           linkedin,
        
//         };

//         try {
//           const response = await axios.post(
//             "http://localhost:1000/api/v1/add-hero-details",
//             heroSectionDetails
//           );
//           toast.success("Appointment booked successfully!");
//           openModal(true);
//           console.log("Appointment response:", response.data);
//         } catch (error) {
//           console.error("Error booking appointment:", error);
//           alert("Failed to book the appointment.");
//         }
//       };


//   return (
//     <div>
//       <div>
//         <h1 className="text-xl font-bold mb-2 text-gray-500 dark:text-white">
//           Hero Section
//         </h1>
//         <form className="flex gap-2 ">
//           <div className="w-full bg-gray-100 dark:bg-gray-600 p-4 dark:text-white rounded-lg ">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="bio" className="block text-sm font-medium mb-2">
//                 Bio
//               </label>
//               <textarea
//                 id="bio"
//                 name="bio"
//                 value={formData.bio}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 rows="4"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Company
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Company
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="location"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <h1 className="mb-2">Social Links</h1>
//             <div className="mb-2 flex gap-2 items-center">
//               <IoLogoLinkedin size={25} />
//               <input
//                 type="url"
//                 id="linkedin"
//                 name="linkedin"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2  flex gap-2 items-center">
//               <BsGithub size={25} />
//               <input
//                 type="url"
//                 id="github"
//                 name="github"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2  flex gap-2 items-center">
//               <BsInstagram size={25} />
//               <input
//                 type="url"
//                 id="instagram"
//                 name="instagram"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2 flex gap-2 items-center">
//               <FaSquareXTwitter size={25} />
//               <input
//                 type="url"
//                 id="twitter"
//                 name="twitter"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2 flex gap-2 items-center">
//               <TbBrandFiverr size={25} />
//               <input
//                 type="url"
//                 id="fiver"
//                 name="fiver"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//           </div>
//           <div className="bg-gray-100 dark:bg-gray-600 w-fit flex flex-col items-center gap-4 p-4 rounded-lg">
//             <DragDropFileUpload onFileUpload={handleFileUpload} />
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminHeroSection

// import React, { useState, useParams } from "react";
// import DragDropFileUpload from "../DragDropFileUpload";
// import { BsInstagram, BsGithub } from "react-icons/bs";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { TbBrandFiverr } from "react-icons/tb";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import axios from "axios";
// import toast from "react-hot-toast"

// const AdminHeroSection = () => {
//   const { id } = useParams();
//   console.log(id);
// const [formData, setFormData] = useState({
//   name: "",
//   bio: "",
//   phone: "",
//   email: "",
//   skills: "",
//   company: "",
//   heroImg: "",
//   location: "",
//   website: "",
//   linkedin: "",
//   twitter: "",
//   github: "",
//   fiver: "",
//   instagram: "",
// });


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileUpload = (filePath) => {
//     setFormData({
//       ...formData,
//       heroImg: filePath,
//     });
//   };




//   return (
//     <div>
//       <div>
//         <h1 className="text-xl font-bold mb-2 text-gray-500 dark:text-white">
//           Hero Section
//         </h1>
//         <form className="flex gap-2 ">
//           <div className="w-full bg-gray-100 dark:bg-gray-600 p-4 dark:text-white rounded-lg ">
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="bio" className="block text-sm font-medium mb-2">
//                 Bio
//               </label>
//               <textarea
//                 id="bio"
//                 name="bio"
//                 value={formData.bio}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 rows="4"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Company
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="phone" className="block text-sm font-medium mb-2">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium mb-2">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Company
//               </label>
//               <input
//                 type="text"
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="location"
//                 className="block text-sm font-medium mb-2"
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>

//             <h1 className="mb-2">Social Links</h1>
//             <div className="mb-2 flex gap-2 items-center">
//               <IoLogoLinkedin size={25} />
//               <input
//                 type="url"
//                 id="linkedin"
//                 name="linkedin"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2  flex gap-2 items-center">
//               <BsGithub size={25} />
//               <input
//                 type="url"
//                 id="github"
//                 name="github"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2  flex gap-2 items-center">
//               <BsInstagram size={25} />
//               <input
//                 type="url"
//                 id="instagram"
//                 name="instagram"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm  rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white  focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2 flex gap-2 items-center">
//               <FaSquareXTwitter size={25} />
//               <input
//                 type="url"
//                 id="twitter"
//                 name="twitter"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//             <div className="mb-2 flex gap-2 items-center">
//               <TbBrandFiverr size={25} />
//               <input
//                 type="url"
//                 id="fiver"
//                 name="fiver"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//                 className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
//               />
//             </div>
//           </div>
//           <div className="bg-gray-100 dark:bg-gray-600 w-fit flex flex-col items-center gap-4 p-4 rounded-lg">
//             <DragDropFileUpload onFileUpload={handleFileUpload} />
//             <div className="flex justify-end">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminHeroSection;

import React, { useState, useEffect } from "react";
import DragDropFileUpload from "../DragDropFileUpload";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareXTwitter } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";


const AdminHeroSection = () => {


  const [formData, setFormData] = useState({
    name: "yash tupkar",
    bio: "",
    phone: "7898297769",
    email: "yashtupkar6@gmail.com",
    
    company: "hello",
    heroImg: "1738654748583-yash2.jpg",
    location: "bhopal",
    website: "",
    linkedin: "xyz",
    twitter: "xyz",
    github: "xzy",
    fiver: "xzy",
    instagram: "xyz",
  });



  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileUpload = (filePath) => {
    setFormData({
      ...formData,
      heroImg: filePath,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const heroSectionDetails = { ...formData };

    try {
      const response = await axios.post(
        "http://localhost:1000/api/v1/add-hero-details",
        heroSectionDetails
      );
      toast.success("Hero details updated successfully!");
      setIsEditing(false); // Close the form after saving
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error updating hero details:", error);
      toast.error("Failed to update hero details.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold mb-2 text-gray-500 dark:text-white">
          Hero Section
        </h1>
        {!isEditing ? (
          <div className="flex gap-2">
            <div className="w-full bg-gray-100 dark:bg-gray-600 p-4 dark:text-white rounded-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bio" className="block text-sm font-medium mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the textarea if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <h1 className="mb-2">Social Links</h1>
              <div className="mb-2 flex gap-2 items-center">
                <IoLogoLinkedin size={25} />
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <BsGithub size={25} />
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <BsInstagram size={25} />
                <input
                  type="url"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <FaSquareXTwitter size={25} />
                <input
                  type="url"
                  id="twitter"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <TbBrandFiverr size={25} />
                <input
                  type="url"
                  id="fiver"
                  name="fiver"
                  value={formData.fiver}
                  onChange={handleChange}
                  disabled={!isEditing} // Disable the input if not in editing mode
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-600 w-fit flex flex-col items-center gap-4 p-4 rounded-lg">
              <div className="mt-4 w-full justify-start">
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-gray-400 dark:bg-gray-700 text-white rounded-md hover:bg-custom-gradient"
                >
                  Edit Hero Section
                </button>
              </div>

              <div className="w-96 h-[80vh] border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-500 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition p-4">
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={`http://localhost:1000/uploads/${formData.heroImg}`}
                    alt="Preview"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="flex justify-end"></div>
            </div>
          </div>
        ) : (
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <div className="w-full bg-gray-100 dark:bg-gray-600 p-4 dark:text-white rounded-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="bio" className="block text-sm font-medium mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <h1 className="mb-2">Social Links</h1>
              <div className="mb-2 flex gap-2 items-center">
                <IoLogoLinkedin size={25} />
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <BsGithub size={25} />
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <BsInstagram size={25} />
                <input
                  type="url"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <FaSquareXTwitter size={25} />
                <input
                  type="url"
                  id="twitter"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-2 flex gap-2 items-center">
                <TbBrandFiverr size={25} />
                <input
                  type="url"
                  id="fiver"
                  name="fiver"
                  value={formData.fiver}
                  onChange={handleChange}
                  className="w-full p-2 text-sm rounded-md bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-600 w-fit flex flex-col items-center gap-4 p-4 rounded-lg">
              <DragDropFileUpload onFileUpload={handleFileUpload} />
              <div className="flex gap-2 justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md "
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminHeroSection;
