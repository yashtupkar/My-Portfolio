// import React, { useState, useEffect } from "react";
// import SecretCodeVerification from "./secreteCodeVerification";

// const AuthStar = () => {
//   const [tapCount, setTapCount] = useState(0);
//   const [timer, setTimer] = useState(null);
//   const [popup, setPopup] = useState(false);

//   const handleTap = () => {
//     if (timer) clearTimeout(timer);

//     setTapCount((prevCount) => prevCount + 1);

//     setTimer(
//       setTimeout(() => {
//         setTapCount(0);
//       }, 3000)
//     );

//     if (tapCount + 1 === 3) {
//       setPopup(true);
//       setTimeout(() => setPopup(false), 10000);
//       setTapCount(0); // Reset tap count
//     }
//   };

//   // Prevent scrolling when popup is open
//   useEffect(() => {
//     if (popup) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//   }, [popup]);

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center">
//         <div onClick={handleTap} className="relative">
//           <img
//             src="/images/star.png"
//             alt="Star"
//             className={`w-14 h-14 md:w-20 md:h-20 cursor-pointer transition-transform ${
//               tapCount > 0 ? "scale-110 animate-pulse" : "scale-100"
//             }`}
//           />

//           {/* Layered Glow Effect */}
//           {tapCount > 0 && (
//             <>
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 blur-xl animate-ping"></div>
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-50 blur-lg animate-ping"></div>
//               <div className="absolute inset-0 rounded-full bg-purple-500 opacity-40 animate-[ping_1s_ease-out_infinite]"></div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Full-Screen Popup */}
//       {popup && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300">
//           <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
//             <h1 className="text-xl font-bold text-gray-800 dark:text-white">
//               ✨ Secret Access! ✨
//             </h1>
            
//             <SecretCodeVerification/>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default AuthStar;
import React, { useState, useEffect } from "react";
import SecretCodeVerification from "./secreteCodeVerification";
import { FaXmark } from "react-icons/fa6";

const AuthStar = () => {
  const [tapCount, setTapCount] = useState(0);
  const [popup, setPopup] = useState(false);

  const handleTap = () => {
    setTapCount((prevCount) => prevCount + 1);

    if (tapCount + 1 === 3) {
      setPopup(true);
      setTapCount(0); // Reset tap count
    }
  };

  // Prevent scrolling when popup is open
  React.useEffect(() => {
    if (popup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popup]);

    const [currentTime, setCurrentTime] = useState("");

    // Function to get current time in HH:MM:SS format
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    // Update time every second
    useEffect(() => {
      updateTime(); // Initial time set
      const interval = setInterval(updateTime, 1000); // Update every second

      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div onClick={handleTap} className="relative">
          <img
            src="/images/star.png"
            alt="Star"
            className={`w-14 h-14 md:w-20 md:h-20 cursor-pointer transition-transform ${
              tapCount > 0 ? "scale-110 animate-pulse" : "scale-100"
            }`}
          />

          {/* Layered Glow Effect */}
          {tapCount > 0 && (
            <>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 blur-xl animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-50 blur-lg animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-purple-500 opacity-40 animate-[ping_1s_ease-out_infinite]"></div>
            </>
          )}
        </div>
      </div>

      {/* Full-Screen Popup */}
      {popup && (
        <div className=" fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300">
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              ✨ Secret Access! ✨
            </h1>
            <SecretCodeVerification />
            <button
              onClick={() => setPopup(false)}
              className="absolute top-5 right-5  p-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-800"
            >
              <FaXmark />
            </button>
            <p className="text-xl font-mono text-gray-500 ">
              Time:{currentTime}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthStar;
