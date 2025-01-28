import React, { useState, useEffect } from "react";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [throwSplash, setThrowSplash] = useState(false);

  useEffect(() => {
    // Hide the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setThrowSplash(true); // Trigger the animation to "throw" the splash screen up
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  // Split the text into individual letters
  const text = "YASH TUPKAR";
  const letters = text.split("");

  return (
    <div
      className={`fixed inset-0 bg-custom-gradient flex items-center justify-center z-50 transition-all duration-1000 ${
        showSplash ? "opacity-100" : "opacity-0"
      } ${throwSplash ? "transform -translate-y-full opacity-0" : ""}`}
    >
      <h1 className="text-white text-3xl md:text-6xl font-syne font-extrabold">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`inline-block opacity-0 transform ${
              showSplash ? "animate-letterIn" : ""
            }`}
            style={{ animationDelay: `${index * 100}ms` }} // Adds delay for each letter
          >
            {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default SplashScreen;
