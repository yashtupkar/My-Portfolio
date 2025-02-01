import React from 'react'
import { useParams } from "react-router-dom";
const Admin = () => {
     const { code } = useParams(); // Retrieve code from URL
  return (
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-700">
        Welcome to Admin Page
      </h1>
      <p className="text-lg text-gray-600 mt-2">Your secret code: {code}</p>
    </div>
  )
}

export default Admin