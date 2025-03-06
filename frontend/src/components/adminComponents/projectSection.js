import { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import DragDropFileUpload from "../DragDropFileUpload";
import axios from "axios";
import toast from "react-hot-toast";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: [""],
    tags: "",
    liveDemoLink: "",
    githubLink: "",
    imageUrl: "",
    companyName: "",
  });

 
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-projects"
        );
        setProjects(response.data);
        console.log("Fetched projects:", response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]); // Set to an empty array on error
      }
  };


 
   useEffect(() => {
      fetchProjects();
     
    }, []);

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle technology field changes
  const handleTechChange = (e, index) => {
    const updatedTech = [...formData.technologies];
    updatedTech[index] = e.target.value;
    setFormData({ ...formData, technologies: updatedTech });
  };

  const addTechnologyField = () => {
    setFormData({
      ...formData,
      technologies: [...formData.technologies, ""],
    });
  };


  const removeTechnologyField = (index) => {
    const updatedTech = [...formData.technologies];
    updatedTech.splice(index, 1);
    setFormData({ ...formData, technologies: updatedTech });
  };


 const handleFileUpload = (file) => {
   setFormData((prev) => ({ ...prev, imageUrl: file }));
 };

 
 const handleSubmit = async (e) => {
    e.preventDefault();
    
    const Project = { ...formData };

    try {
      await axios.post("http://localhost:1000/api/v1/add-project", Project);
      toast.success("Project added successfully!");
      setShowForm(false);
      fetchProjects();
      setFormData({
        title: "",
        description: "",
        tags: "",
        liveDemoLink: "",
        githubLink: "",
        companyName: "",
        technologies: [""], // Ensure the technologies array has one default field
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error adding project:", error);
    }
  }; 

  //Delete confirmation modal
const [showDeleteModal, setShowDeleteModal] = useState(false);
const [showEditModal, setShowEditModal] = useState(false);
const [selectedProjectId, setSelectedProjectId] = useState(null);


 const DeleteModal = ({ setShowDeleteModal, deleteProject, projectId }) => {
   return (
     <>
       {/* Modal Container */}
       <div className="fixed inset-0 z-50 flex items-center justify-center">
         <div className="bg-gray-800 text-white p-6  rounded-lg shadow-lg w-96">
           <h1 className="text-lg font-semibold mb-4">
             Are you sure you want to delete this project?
           </h1>
           <div className="flex justify-end gap-3">
             <button
               className="bg-gray-600 text-white py-2 px-4 rounded-lg"
               onClick={() => setShowDeleteModal(false)}
             >
               Cancel
             </button>
             <button
               className="bg-red-600 text-white py-2 px-4 rounded-lg"
               onClick={() => deleteProject(projectId)}
               
             >
               Delete
             </button>
           </div>
         </div>
       </div>
       {/* Background Overlay */}
       <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
     </>
   );
 };
  
const handleDelete = async (id) => {
  try {
    if (!id) {
      console.error("Error: No project ID provided");
      return;
    }
    await axios.delete(`http://localhost:1000/api/v1/delete-project/${id}`);
    console.log(`Deleted project with ID: ${id}`);
    setShowDeleteModal(false);
    toast.success(`Project deleted successfully`);
    fetchProjects(); 
  } catch (error) {
    console.error("Error deleting project:", error);
  }
  };
  
    const handleEdit = async (id, updatedProject) => {
      try {
        if (!id) {
          console.error("Error: No project ID provided");
          return;
        }
        await axios.put(
          `http://localhost:1000/api/v1/update-project/${id}`,
          updatedProject
        );
        toast.success(`Project updated successfully`);
        fetchProjects();
        setShowEditModal(false);
      } catch (error) {
        console.error("Error editing project:", error);
      }
    };
  

 const EditModal = ({ setShowEditModal, projectId, formData, handleEdit }) => {
   const [editedFormData, setEditedFormData] = useState(formData);


  const [isFetched, setIsFetched] = useState(false);
  const [projectData, setProjectData] = useState(null); // State to store fetched project data

 useEffect(() => {
   // Check if projectId exists and fetch data
   if (projectId) {
     const fetchProjectById = async (id) => {
       try {
         const response = await axios.get(
           `http://localhost:1000/api/v1/get-project/${id}`
         );
         console.log("Project Fetched By Id:", response.data); // Log fetched data
         setProjectData(response.data); // Set the fetched data
       } catch (error) {
         console.error("Error fetching project:", error);
       }
     };

     fetchProjectById(projectId);
   }
 }, [projectId]); // Re-run when projectId changes

 // When project data is fetched, update the formData
 useEffect(() => {
   if (projectData) {
     setEditedFormData(projectData); // Update form data after fetching project
   }
 }, [projectData]); 
const handleTechChange = (e, index) => {
  setEditedFormData((prev) => {
    const updatedTech = [...prev.technologies];
    updatedTech[index] = e.target.value;
    return { ...prev, technologies: updatedTech };
  });
};

const addTechnologyField = () => {
  setEditedFormData((prev) => ({
    ...prev,
    technologies: [...prev.technologies, ""],
  }));
};

const removeTechnologyField = (index) => {
  setEditedFormData((prev) => ({
    ...prev,
    technologies: prev.technologies.filter((_, i) => i !== index),
  }));
};


   const handleFormInputChange = (e) => {
     const { name, value } = e.target;
     setEditedFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   const handleSubmitEdit = (e) => {
     e.preventDefault(); // Prevent form submission from reloading the page
     handleEdit(projectId, editedFormData); // Call handleEdit with projectId and the updated data
   };
const handleFileUpload = (fileUrl) => {
  setEditedFormData((prevData) => ({
    ...prevData,
    imageUrl: fileUrl, // Update image URL in state
  }));
};


   return (
     <>
       <div className="fixed inset-0 z-50 flex items-center justify-center">
         <div className="bg-gray-800 h-[80vh] overflow-y-scroll w-1/2 p-4 rounded-xl mt-4">
           <div className="flex justify-between">
             <h2 className="text-white text-lg font-semibold mb-2">
               Edit Project
             </h2>
             <button
               className="bg-gray-600 text-white py-2 px-4 rounded-lg"
               onClick={() => setShowEditModal(false)}
             >
               Cancel
             </button>
           </div>

          
           <form onSubmit={handleSubmitEdit} className="flex gap-3">
             <div className="w-full h-full flex flex-col gap-2 p-2">
               <DragDropFileUpload
                 onFileUpload={handleFileUpload}
                 width="100%"
                 height="30vh"
                 defaultImage={editedFormData.imageUrl}
               />
               <input
                 type="text"
                 name="title"
                 placeholder="Project Title"
                 value={editedFormData.title}
                 onChange={handleFormInputChange}
                 className="p-2 rounded-md bg-gray-700 text-white w-full"
               />
               <textarea
                 name="description"
                 placeholder="Project Description"
                 value={editedFormData.description}
                 onChange={handleFormInputChange}
                 className="p-2 rounded-md bg-gray-700 text-white w-full h-40"
               ></textarea>

               <input
                 type="text"
                 name="companyName"
                 placeholder="Company Name"
                 value={editedFormData.companyName}
                 onChange={handleFormInputChange}
                 className="p-2 rounded-md bg-gray-700 text-white w-full"
               />

               {/* Technologies */}
               <div className="mb-4 flex flex-col justify-end">
                 <h3 className="text-white mb-2">Technologies Used</h3>
                 {editedFormData.technologies.map((tech, index) => (
                   <div key={index} className="flex gap-2 mb-2">
                     <input
                       type="text"
                       value={tech}
                       onChange={(e) => handleTechChange(e, index)}
                       placeholder="Enter technology"
                       className="p-2 rounded-md bg-gray-700 text-white w-full"
                     />
                     {editedFormData.technologies.length > 1 && (
                       <button
                         type="button"
                         onClick={() => removeTechnologyField(index)}
                         className="bg-red-600 text-white px-3 rounded-md"
                       >
                         X
                       </button>
                     )}
                   </div>
                 ))}
                 <button
                   type="button"
                   onClick={addTechnologyField}
                   className="bg-blue-600 text-white px-3 py-1 rounded-md"
                 >
                   Add
                 </button>
               </div>

               {/* Tags */}
               <input
                 type="text"
                 name="tags"
                 placeholder="Tags (comma separated)"
                 value={editedFormData.tags}
                 onChange={handleFormInputChange}
                 className="p-2 rounded-md bg-gray-700 text-white w-full"
               />

               {/* Live Demo Link */}
               <input
                 type="url"
                 name="liveDemoLink"
                 placeholder="Live Demo URL"
                 value={editedFormData.liveDemoLink}
                 onChange={handleFormInputChange}
                 className="p-2 rounded-md bg-gray-700 text-white w-full"
               />

               {/* GitHub Link */}
               <input
                 type="url"
                 name="githubLink"
                 placeholder="GitHub Repository URL"
                 value={editedFormData.githubLink}
                 onChange={handleFormInputChange}
                 className="p-2 rounded-md bg-gray-700 text-white w-full"
               />

               {/* Submit Button */}
               <button
                 type="submit"
                 className="bg-green-600 text-white w-full py-2 rounded-md"
               >
                 Save changes
               </button>
             </div>
           </form>
         </div>
       </div>

       <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
     </>
   );
 };

  
  const toggleDisplay = async (projectId, currentDisplay) => {
    try {
      const updatedDisplay = !currentDisplay; // Toggle true/false

      const response = await axios.put(
        `http://localhost:1000/api/v1/update-project/${projectId}`,
        { display: updatedDisplay }
      );

      if (response.status === 200) {
        console.log("Project updated successfully:", response.data);

        // Update state immediately
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project._id === projectId
              ? { ...project, display: updatedDisplay }
              : project
          )
        );

        // Show toast notification
        toast.success(
          updatedDisplay ? "Project is now visible!" : "Project is now hidden!"
        );
      }
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Failed to update project.");
    }
  };


  
  
  



  
 
  return (
    <div className="flex flex-col w-full p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <h1 className="text-gray-600 dark:text-white font-bold text-2xl">
          Project Management
        </h1>
        <button
          className="bg-custom-gradient text-white py-2 px-3 rounded-lg"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cancel" : "Add Project"}
        </button>
      </div>

      {/* Form Section (Only Show When showForm is True) */}
      {showForm && (
        <div className="bg-gray-800 p-4 rounded-xl mt-4">
          <h2 className="text-white text-lg font-semibold mb-2">
            Add New Project
          </h2>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <div className="w-full h-full flex flex-col gap-2 p-2">
              <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-gray-700 text-white w-full"
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-gray-700 text-white w-full h-40"
              ></textarea>

              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-gray-700 text-white w-full"
              />

              {/* Technologies */}
              <div className="mb-4 flex flex-col justify-end">
                <h3 className="text-white mb-2">Technologies Used</h3>
                {formData.technologies.map((tech, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={tech}
                      onChange={(e) => handleTechChange(e, index)}
                      placeholder="Enter technology"
                      className="p-2 rounded-md bg-gray-700 text-white w-full"
                    />
                    {formData.technologies.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTechnologyField(index)}
                        className="bg-red-600 text-white px-3 rounded-md"
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addTechnologyField}
                  className="bg-blue-600 text-white px-3 py-1 rounded-md"
                >
                  Add
                </button>
              </div>

              {/* Tags */}
              <input
                type="text"
                name="tags"
                placeholder="Tags (comma separated)"
                value={formData.tags}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-gray-700 text-white w-full"
              />

              {/* Live Demo Link */}
              <input
                type="url"
                name="liveDemoLink"
                placeholder="Live Demo URL"
                value={formData.liveDemoLink}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-gray-700 text-white w-full"
              />

              {/* GitHub Link */}
              <input
                type="url"
                name="githubLink"
                placeholder="GitHub Repository URL"
                value={formData.githubLink}
                onChange={handleInputChange}
                className="p-2 rounded-md bg-gray-700 text-white w-full"
              />
            </div>

            {/* File Upload & Submit Button */}
            <div className="w-1/2 h-full p-2 flex flex-col gap-2">
              <DragDropFileUpload onFileUpload={handleFileUpload} height="63vh"/>
              <button
                type="submit"
                className="bg-green-600 text-white w-full py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List */}
      {!showForm && (
        <div className="mt-2 flex flex-col gap-4 p-4 rounded-3xl bg-gray-200 dark:bg-gray-800 w-full">
          <h1 className="text-gray-600 dark:text-white font-semibold ">
            Recent Projects ({projects.length})
          </h1>
          {projects.length > 0 ? (
            [...projects] // Creating a shallow copy to avoid mutating the original array
              .reverse()
              .map((project) => (
                <div
                  key={project._id}
                  className="w-full p-2 flex gap-4 bg-gray-100 dark:bg-gray-600 rounded-xl h-42"
                >
                  <div className="w-1/3 h-40 bg-gray-300 dark:bg-gray-700 rounded-xl">
                    <img
                      src={`http://localhost:1000/uploads/${project.imageUrl}`}
                      alt="Project Preview"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-1/2">
                    <h1 className="text-gray-600 dark:text-white font-bold text-xl">
                      {project.title}
                    </h1>
                    <div className="w-full h-20 mt-2">
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4 overflow-hidden">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-2 mt-2">
                      {/* Display tags if available */}
                      {project.tags &&
                        project.tags.split(",").map((tag, index) => (
                          <span
                            key={index}
                            className=" text-gray-600 bg-white dark:text-white dark:bg-gray-500 shadow-md text-sm rounded-lg px-2 py-1"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="w-20 flex flex-col gap-2 justify-center">
                    <button
                      onClick={() => {
                        setShowEditModal(true);

                        setSelectedProjectId(project._id);
                      }}
                      className="px-2 text-white shadow-md bg-green-500 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProjectId(project._id);
                        setShowDeleteModal(true);
                      }}
                      className="px-2 text-white shadow-md bg-red-600 rounded-lg"
                    >
                      Delete
                    </button>

                    <button
                      className={`px-2 text-white shadow-md rounded-lg ${
                        project.display ? "bg-gray-700" : "bg-custom-gradient"
                      }`}
                      onClick={() =>
                        toggleDisplay(project._id, project.display)
                      }
                    >
                      {project.display ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              ))
          ) : (
            <p className="text-white">No projects found.</p>
          )}
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteProject={handleDelete}
          projectId={selectedProjectId}
        />
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <EditModal
          setShowEditModal={setShowEditModal}
          projectId={selectedProjectId}
          formData={formData}
          handleEdit={handleEdit} // Pass handleEdit here
        />
      )}
    </div>
  );
};

export default ProjectSection;
