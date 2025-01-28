import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const words = [
      "Web Developer",
      "Frontend Developer",
      
      "UI/UX Designer",
      "Backend Developer",
     
      "Full Stack Developer",
     
     
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000); // Adjust to match typing and pausing speed

    return () => {
      clearInterval(wordChangeInterval);
    };
  }, [words.length]);

  return (
    <div className="  font-semibold  p-2 bg-gray-200 dark:bg-gray-800 rounded-xl">
      <h2 className="relative inline-block text-xl md:text-4xl font-bold">
        I'm <span className="gradient-text typing-effect">{words[currentWord]}</span>
      </h2>
    </div>
  );
};

export default AnimatedText;
