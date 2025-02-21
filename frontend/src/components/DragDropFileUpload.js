// import { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import { AiOutlineCloudDownload } from "react-icons/ai";

// const DragDropFileUpload = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);

//   const onDrop = useCallback(async (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     setSelectedFile(file); // Store the selected file in state

//     // Generate preview URL for the selected image
//     const filePreviewUrl = URL.createObjectURL(file);
//     setPreviewUrl(filePreviewUrl);

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const res = await axios.post("http://localhost:1000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       console.log("File uploaded:", res.data);

//       // Pass the uploaded file path to parent component
//       if (res.data.filePath) {
//         onFileUpload(res.data.filePath); // Update parent component with the file path
//       }
//     } catch (err) {
//       console.error("Upload error", err);
//     }
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div
//       {...getRootProps()}
//       className="w-96 h-[80vh] border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-500 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition p-4"
//     >
//       <input {...getInputProps()} />
//       {previewUrl ? (
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={previewUrl}
//             alt="Preview"
//             className="object-contain w-full h-full"
//           />
//         </div>
//       ) : isDragActive ? (
//         <p className="text-gray-600 dark:text-gray-400">
//           Drop the file here...
//         </p>
//       ) : (
//         <p className="text-gray-500 dark:text-gray-400 flex flex-col items-center">
//           <AiOutlineCloudDownload size={80} />
//           Drag & drop{" "}
//           <span>
//             or <span className="gradient-text"> Browse</span>
//           </span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default DragDropFileUpload;



// import { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import { AiOutlineCloudDownload } from "react-icons/ai";

// const DragDropFileUpload = ({
//   onFileUpload,
//   height = "80vh",
//   width = "24rem",
//   defaultImage, // Accept default image as prop
// }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(defaultImage || null); // Initialize with defaultImage

//   // Update previewUrl manually when defaultImage is passed
//   const updatePreviewUrl = (newImageUrl) => {
//     setPreviewUrl(newImageUrl);
//   };

//   const onDrop = useCallback(
//     async (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       setSelectedFile(file);

//       // Generate preview URL for the selected image
//       const filePreviewUrl = URL.createObjectURL(file);
//       setPreviewUrl(filePreviewUrl);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const res = await axios.post("http://localhost:1000/upload", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         console.log("File uploaded:", res.data);

//         if (res.data.filePath) {
//           onFileUpload(res.data.filePath);
//         }
//       } catch (err) {
//         console.error("Upload error", err);
//       }
//     },
//     [onFileUpload]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   // Whenever defaultImage changes, manually update the previewUrl
//   if (defaultImage && previewUrl !== defaultImage) {
//     updatePreviewUrl(defaultImage);
//   }
// console.log(previewUrl);
//   return (
//     <div
//       {...getRootProps()}
//       style={{ width, height }}
//       className="border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-500 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition p-4"
//     >
//       <input {...getInputProps()} />
//       {previewUrl ? (
     
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={
//               previewUrl && previewUrl.startsWith("http")
//                 ? previewUrl // If it's already a full URL, use it
//                 : `http://localhost:1000/uploads/${previewUrl}`
//             } // Otherwise, prepend the base URL
//             alt="Preview"
//             className="object-contain w-full h-full"
//             onError={() => setPreviewUrl(null)} // Handle broken images
//           />
//         </div>
//       ) : isDragActive ? (
//         <p className="text-gray-600 dark:text-gray-400">
//           Drop the file here...
//         </p>
//       ) : (
//         <p className="text-gray-500 dark:text-gray-400 flex flex-col items-center">
//           <AiOutlineCloudDownload size={80} />
//           Drag & drop{" "}
//           <span>
//             or <span className="gradient-text"> Browse</span>
//           </span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default DragDropFileUpload;

// import { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import { AiOutlineCloudDownload } from "react-icons/ai";

// const DragDropFileUpload = ({
//   onFileUpload,
//   height = "80vh",
//   width = "24rem",
//   defaultImage, // Accept default image as prop
// }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(defaultImage || null); // Initialize with defaultImage

//   // Update previewUrl manually when defaultImage is passed
//   const updatePreviewUrl = (newImageUrl) => {
//     setPreviewUrl(newImageUrl);
//   };

//   const onDrop = useCallback(
//     async (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       setSelectedFile(file);

//       // Generate preview URL for the selected image
//       const filePreviewUrl = URL.createObjectURL(file);
//       setPreviewUrl(filePreviewUrl);

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const res = await axios.post("http://localhost:1000/upload", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         console.log("File uploaded:", res.data);

//         if (res.data.filePath) {
//           onFileUpload(res.data.filePath); // Pass the uploaded file path to parent component
//         }
//       } catch (err) {
//         console.error("Upload error", err);
//       }
//     },
//     [onFileUpload]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   // Whenever defaultImage changes, manually update the previewUrl
//   if (defaultImage && previewUrl !== defaultImage) {
//     updatePreviewUrl(defaultImage);
//   }

//   return (
//     <div
//       {...getRootProps()}
//       style={{ width, height }}
//       className="border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-500 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition p-4"
//     >
//       <input {...getInputProps()} />
//       {previewUrl ? (
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={
//               previewUrl && previewUrl.startsWith("http")
//                 ? previewUrl // If it's already a full URL, use it
//                 : `http://localhost:1000/uploads/${previewUrl}` // Otherwise, prepend the base URL
//             }
//             alt="Preview"
//             className="object-contain w-full h-full"
//             onError={() => setPreviewUrl(null)} // Handle broken images
//           />
//         </div>
//       ) : isDragActive ? (
//         <p className="text-gray-600 dark:text-gray-400">
//           Drop the file here...
//         </p>
//       ) : (
//         <p className="text-gray-500 dark:text-gray-400 flex flex-col items-center">
//           <AiOutlineCloudDownload size={80} />
//           Drag & drop{" "}
//           <span>
//             or <span className="gradient-text">Browse</span>
//           </span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default DragDropFileUpload;

// import { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import axios from "axios";
// import { AiOutlineCloudDownload } from "react-icons/ai";

// const DragDropFileUpload = ({
//   onFileUpload,
//   height = "80vh",
//   width = "24rem",
//   defaultImage, // Accept default image as prop
// }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(defaultImage || null); // Initialize with defaultImage

//   const updatePreviewUrl = (newImageUrl) => {
//     setPreviewUrl(newImageUrl);
//   };

//   const onDrop = useCallback(
//     async (acceptedFiles) => {
//       const file = acceptedFiles[0];
//       setSelectedFile(file);

//       // Generate preview URL for the selected image
//       const filePreviewUrl = URL.createObjectURL(file);
//       setPreviewUrl(filePreviewUrl); // Update previewUrl with the new selected file

//       const formData = new FormData();
//       formData.append("file", file);

//       try {
//         const res = await axios.post("http://localhost:1000/upload", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         console.log("File uploaded:", res.data);

//         if (res.data.filePath) {
//           onFileUpload(res.data.filePath); // Pass the uploaded file path to parent component
//         }
//       } catch (err) {
//         console.error("Upload error", err);
//       }
//     },
//     [onFileUpload]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   // Whenever defaultImage changes, manually update the previewUrl
//   if (defaultImage && previewUrl !== defaultImage) {
//     updatePreviewUrl(defaultImage);
//   }

//   return (
//     <div
//       {...getRootProps()}
//       style={{ width, height }}
//       className="border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-500 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition p-4"
//     >
//       <input {...getInputProps()} />
//       {previewUrl ? (
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={previewUrl}
//             alt="Preview"
//             className="object-contain w-full h-full"
//             onError={() => setPreviewUrl(null)} // Handle broken images
//           />
//         </div>
//       ) : isDragActive ? (
//         <p className="text-gray-600 dark:text-gray-400">
//           Drop the file here...
//         </p>
//       ) : (
//         <p className="text-gray-500 dark:text-gray-400 flex flex-col items-center">
//           <AiOutlineCloudDownload size={80} />
//           Drag & drop{" "}
//           <span>
//             or <span className="gradient-text">Browse</span>
//           </span>
//         </p>
//       )}
//     </div>
//   );
// };

// export default DragDropFileUpload;

import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { AiOutlineCloudDownload } from "react-icons/ai";

const DragDropFileUpload = ({
  onFileUpload,
  height = "80vh",
  width = "24rem",
  defaultImage, // Accept default image as prop
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(defaultImage || null); // Initialize with defaultImage

  // Update previewUrl when defaultImage changes
  useEffect(() => {
    if (defaultImage) {
      setPreviewUrl(defaultImage);
    }
  }, [defaultImage]);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const file = acceptedFiles[0];
      setSelectedFile(file);

      // Generate preview URL for the selected image
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(filePreviewUrl);

      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await axios.post("http://localhost:1000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
       

        if (res.data.filePath) {
          onFileUpload(res.data.filePath);
        }
      } catch (err) {
        console.error("Upload error", err);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{ width, height }}
      className="border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-500 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition p-4"
    >
      <input {...getInputProps()} />
      {previewUrl ? (
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={
              previewUrl.startsWith("blob") || previewUrl.startsWith("http")
                ? previewUrl // If it's a local blob or a full URL, use it
                : `http://localhost:1000/uploads/${previewUrl}` // Otherwise, prepend the base URL
            }
            alt="Preview"
            className="object-contain w-full h-full"
            onError={() => setPreviewUrl(null)} // Handle broken images
          />
        </div>
      ) : isDragActive ? (
        <p className="text-gray-600 dark:text-gray-400">
          Drop the file here...
        </p>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 flex flex-col items-center">
          <AiOutlineCloudDownload size={80} />
          Drag & drop{" "}
          <span>
            or <span className="gradient-text"> Browse</span>
          </span>
        </p>
      )}
    </div>
  );
};

export default DragDropFileUpload;

