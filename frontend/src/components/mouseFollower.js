import React, { useState, useEffect, useRef } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const followerRef = useRef(null);
  const animationRef = useRef(null); // For requestAnimationFrame

  // Mouse move event handler
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const animateFollower = () => {
      if (followerRef.current) {
        const rect = followerRef.current.getBoundingClientRect();
        const x = rect.x + (position.x - rect.x) * 0.1;
        const y = rect.y + (position.y - rect.y) * 0.1;
        followerRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      animationRef.current = requestAnimationFrame(animateFollower);
    };

    // Start animation loop
    animationRef.current = requestAnimationFrame(animateFollower);

    return () => {
      // Cleanup animation frame on unmount
      cancelAnimationFrame(animationRef.current);
    };
  }, [position]);

  useEffect(() => {
    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed h-screen z-50 bg-transparent">
      {/* Mouse Follower */}
      <div
        ref={followerRef}
        className="absolute w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg pointer-events-none"
      ></div>
    </div>
  );
};

export default MouseFollower;
