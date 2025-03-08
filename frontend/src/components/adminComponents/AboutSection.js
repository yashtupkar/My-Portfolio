import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import DragDropFileUpload from "../DragDropFileUpload";

const AboutMeForm = () => {

  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  const [formData, setFormData] = useState({
    _id:"",
    name: "",
    bio: "",
    profileImage: "",
    experience: [
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    education: [
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [""],
    awards: [{ title: "", organization: "", year: "", description: "" }],
    stats: [{ value: "", label: "" }],
  });
  const [isEdited, setIsEdited] = useState(false);
  const [toastId, setToastId] = useState(null);

const handleChange = (e) => {
  const { name, value, dataset } = e.target;

  // Update formData for dynamic inputs
  if (dataset.index !== undefined) {
    const index = dataset.index;
    const section = dataset.section;
    const updatedData = { ...formData };
    updatedData[section][index][name] = value;
    setFormData(updatedData);
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Check if the form is edited, and show the toast
if (!isEdited) {
  const id = toast("You have unsaved changes. Please Save", {
    duration: Infinity, // Keep the toast visible indefinitely
    icon: "⚠️", // Optional icon
    style: { background: "white", color: "black" }, // Optional styling
  });
  setToastId(id); // Save the toast ID to state
  setIsEdited(true); // Mark as edited after showing the toast
}
};


  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          institution: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  const handleAddAward = () => {
    setFormData({
      ...formData,
      awards: [
        ...formData.awards,
        { title: "", organization: "", year: "", description: "" },
      ],
    });
  };

  const handleAddStat = () => {
    setFormData({
      ...formData,
      stats: [...formData.stats, { value: "", label: "" }],
    });
  };

  const fetchAboutMe = async() => { 
    try {
      const response = await axios.get(`${apiUrl}/api/v1/get-aboutMe`);
      setFormData(response.data[0]);
      console.log(response.data[0]);
      
    } catch (error) {
      console.error("Error fetching about me data:", error);
      
    }
  }

  useEffect(() => {
    fetchAboutMe();
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so we add 1
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // Return in yyyy-MM-dd format
  };

  const handleRemoveField = (section, index) => {
    const updatedData = { ...formData };
    updatedData[section].splice(index, 1);
    setFormData(updatedData);
  };

  //handel edit update the aboutme
 const handleEdit = async (e) => {
   e.preventDefault();

   // Make sure formData has valid values before sending
   if (!formData.name || !formData.bio) {
     console.error("Please fill in all required fields");
     return;
   }

   try {
     const response = await axios.put(
       `${apiUrl}/api/v1/update-aboutMe/${formData._id}`,
       formData
     );
     if (response.status === 200) {
       console.log("About me updated successfully");
       // Optionally reset formData or show a success notification
       toast.success("About me updated successfully!");
     }
      if (toastId) {
        toast.dismiss(toastId); // Dismiss the unsaved changes toast
      }
      setIsEdited(false);
   } catch (error) {
     console.error("Error updating about me data:", error);
     alert("There was an error updating your data. Please try again.");
   }
  };
  
  const handleFileUpload = (fileUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImage: fileUrl, // Update image URL in state
    }));
  };


  
 

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-300">About Me</h1>
      <form onSubmit={handleEdit} className="space-y-4 p-6">
        <div className="flex gap-4 ">
          <DragDropFileUpload
            width="40%"
            height="40vh"
            onFileUpload={handleFileUpload}
            defaultImage={formData.profileImage}
          />
          <div className="flex flex-col gap-2 w-full">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full p-2 text-white bg-gray-800  rounded-md"
              />
            </div>

            <textarea
              name="bio"
              value={formData.bio}
              placeholder="Enter your Bio"
              onChange={handleChange}
              className="w-full p-2 bg-gray-800 h-64 text-white  rounded-md"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-300">Experience</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="flex flex-col gap-2 mt-2">
              <div className="flex gap-2">
                {" "}
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={handleChange}
                  data-index={index}
                  data-section="experience"
                  className="w-full p-2 text-white bg-gray-800  rounded-md"
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={exp.position}
                  onChange={handleChange}
                  data-index={index}
                  data-section="experience"
                  className="w-full p-2 text-white bg-gray-800  rounded-md"
                />
              </div>

              <div className="flex gap-2">
                <input
                  type="date"
                  name="startDate"
                  placeholder="Start Date"
                  value={exp.startDate ? formatDate(exp.startDate) : ""}
                  onChange={handleChange}
                  data-index={index}
                  data-section="experience"
                  className="w-full p-2 text-gray-600 dark:text-white bg-gray-800  rounded-md"
                />
                <input
                  type="date"
                  name="endDate"
                  placeholder="End Date"
                  value={exp.endDate ? formatDate(exp.endDate) : ""}
                  onChange={handleChange}
                  data-index={index}
                  data-section="experience"
                  className="w-full p-2 text-gray-600 dark:text-white bg-gray-800  rounded-md"
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                value={exp.description}
                onChange={handleChange}
                data-index={index}
                data-section="experience"
                className="w-full p-2  bg-gray-800  text-white rounded-md"
              />
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveField("experience", index)}
                  className="bg-red-500 w-fit  text-white p-1 rounded-md self-end"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddExperience}
            className="mt-2 bg-custom-gradient text-white p-2 rounded-md"
          >
            Add Experience
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="flex flex-col gap-2 mt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="institution"
                  placeholder="Institution"
                  value={edu.institution}
                  onChange={handleChange}
                  data-index={index}
                  data-section="education"
                  className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
                />
                <input
                  type="text"
                  name="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  onChange={handleChange}
                  data-index={index}
                  data-section="education"
                  className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="fieldOfStudy"
                  placeholder="Field of Study"
                  value={edu.fieldOfStudy}
                  onChange={handleChange}
                  data-index={index}
                  data-section="education"
                  className="w-full p-2 bg-gray-200 text-gray-600 dark:text-white dark:bg-gray-800 rounded-md"
                />
                <input
                  type="date"
                  name="startDate"
                  value={edu.startDate ? formatDate(edu.startDate) : ""}
                  onChange={handleChange}
                  data-index={index}
                  data-section="education"
                  className="w-full p-2 bg-gray-200 text-gray-600 dark:text-white dark:bg-gray-800 rounded-md"
                />
                <input
                  type="date"
                  name="endDate"
                  value={edu.endDate ? formatDate(edu.endDate) : ""}
                  onChange={handleChange}
                  data-index={index}
                  data-section="education"
                  className="w-full p-2 bg-gray-200 text-gray-600 dark:text-white dark:bg-gray-800 rounded-md"
                />
              </div>
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveField("education", index)}
                  className="bg-red-500 w-fit  text-white p-1 rounded-md self-end"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddEducation}
            className="mt-2 bg-custom-gradient text-white p-2 rounded-md"
          >
            Add Education
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Skills</h3>
          {formData.skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                name="skills"
                placeholder="Enter skill"
                value={skill}
                onChange={(e) => {
                  const updatedSkills = [...formData.skills];
                  updatedSkills[index] = e.target.value;
                  setFormData({ ...formData, skills: updatedSkills });
                }}
                className="w-full p-2 bg-gray-200 text-black dark:text-white dark:bg-gray-800 rounded-md"
              />
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveField("skills", index)}
                  className="bg-red-500 text-white p-1 rounded-md"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                skills: [...formData.skills, ""], // Add a new empty field for skills
              })
            }
            className="mt-2 bg-custom-gradient text-white p-2 rounded-md"
          >
            Add Skill
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Awards</h3>
          {formData.awards.map((award, index) => (
            <div key={index} className="flex flex-col gap-3 mt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Award Title"
                  value={award.title}
                  onChange={handleChange}
                  data-index={index}
                  data-section="awards"
                  className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
                />
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={award.organization}
                  onChange={handleChange}
                  data-index={index}
                  data-section="awards"
                  className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
                />
                <input
                  type="number"
                  name="year"
                  placeholder="Year"
                  value={award.year}
                  onChange={handleChange}
                  data-index={index}
                  data-section="awards"
                  className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
                />
              </div>
              <textarea
                name="description"
                placeholder="Award Description"
                value={award.description}
                onChange={handleChange}
                data-index={index}
                data-section="awards"
                className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
              />
              {index !== 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveField("awards", index)}
                  className="bg-red-500 w-fit  text-white p-1 rounded-md self-end"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAward}
            className="mt-2 bg-custom-gradient text-white p-2 rounded-md"
          >
            Add Award
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-300">Stats</h3>
          {formData.stats.map((stat, index) => (
            <div key={index} className="flex flex-col mt-2">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  name="value"
                  placeholder="Value"
                  value={stat.value}
                  onChange={handleChange}
                  data-index={index}
                  data-section="stats"
                  className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
                />
                <input
                  type="text"
                  name="label"
                  placeholder="Label"
                  value={stat.label}
                  onChange={handleChange}
                  data-index={index}
                  data-section="stats"
                  className="w-full p-2 bg-gray-200 text-white dark:bg-gray-800 rounded-md"
                />

                {index !== 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveField("stats", index)}
                    className="bg-red-500 w-fit  text-white p-1 rounded-md "
                  >
                    Remove
                  </button>
                )}
              </div>{" "}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddStat}
            className="mt-2 bg-custom-gradient text-white p-2 rounded-md"
          >
            Add Stat
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AboutMeForm;
