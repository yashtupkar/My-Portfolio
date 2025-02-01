import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import toast from "react-hot-toast";

export default function SecretCodeVerification() {
  const [secretCode, setSecretCode] = useState(["", "", "", ""]);
  const [currentCode, setCurrentCode] = useState("");
  const navigate = useNavigate();

  const generateCurrentCode = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return hours + minutes; 
  };

  useEffect(() => {
    setCurrentCode(generateCurrentCode()); // Initial code set
    const interval = setInterval(() => {
      setCurrentCode(generateCurrentCode());
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newSecretCode = [...secretCode];
    newSecretCode[index] = value;
    setSecretCode(newSecretCode);

    if (value && index < secretCode.length - 1) {
      document.getElementById(`secret-input-${index + 1}`).focus();
    }
  };

const handleVerify = () => {
  const enteredCode = secretCode.join(""); 
  if (enteredCode === currentCode) {
    navigate(`/admin/${enteredCode}`); 
    toast.success("Access Granted!");
  } else {
    toast.error("Incorrect Code. Try Again!");
    setSecretCode(["", "", "", ""]); 
  }
};



  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg w-80">
        <h2 className="text-xl text-gray-700 dark:text-gray-300 font-bold text-center mb-4">
          Enter Secret Code
        </h2>
        <div className="flex justify-center space-x-2 mb-4">
          {secretCode.map((digit, index) => (
            <input
              key={index}
              id={`secret-input-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-lg border dark:bg-gray-800 bg-gray-300 border-gray-400 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
      
        <button
          onClick={handleVerify}
          className="w-full bg-custom-gradient text-white py-2 rounded hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          Verify Secret Code
        </button>
        {/* <button
          onClick={handleResend}
          className="w-full mt-2 text-purple-500 py-2 rounded hover:underline"
        >
          Reset Secret Code
        </button> */}
      </div>
    </div>
  );
}
