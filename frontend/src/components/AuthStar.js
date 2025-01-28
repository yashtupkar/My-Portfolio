import React, { useState } from "react";

const AuthStar = () => {
  const [tapCount, setTapCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [popup, setPopup] = useState(false);

  const handleTap = () => {
    if (timer) clearTimeout(timer);

    setTapCount((prevCount) => prevCount + 1);

    setTimer(
      setTimeout(() => {
        setTapCount(0);
      }, 3000)
    );

    if (tapCount + 1 === 3) {
      setPopup(true);
      setTimeout(() => setPopup(false),10000); 
      setTapCount(0); // Reset tap count
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
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
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 blur-xl animate-ping"></div>

      {/* Inner Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-50 blur-lg animate-ping"></div>

      {/* Burst Effect */}
      <div className="absolute inset-0 rounded-full bg-purple-500 opacity-40 animate-[ping_1s_ease-out_infinite]"></div>
    </>
  )}
</div>

      {popup && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              ✨ Secrete Access! ✨
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Enter secrete code
            </p>

          </div>
        </div>
      )}
    </div>
  );
};

export default AuthStar;
