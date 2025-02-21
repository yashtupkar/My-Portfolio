import React, { useEffect, useRef } from "react";

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      // Get the top position of the container relative to the viewport
      const containerOffsetTop = scrollContainer.offsetTop;
      const containerHeight = scrollContainer.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Start scrolling horizontally when the section is in view
      if (
        scrollY + windowHeight > containerOffsetTop &&
        scrollY < containerOffsetTop + containerHeight
      ) {
        const scrollSpeed = 0.5;
        const scrollAmount =
          (scrollY + windowHeight - containerOffsetTop) * scrollSpeed;
        scrollContainer.querySelector(
          ".horizontal-scroll-content"
        ).style.transform = `translateX(-${scrollAmount}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Adjust the container height to enable vertical scrolling for horizontal content
    const scrollContainer = scrollContainerRef.current;
    const scrollWidth = scrollContainer.querySelector(
      ".horizontal-scroll-content"
    ).scrollWidth;
    scrollContainer.style.height = `${scrollWidth}px`;
  }, []);

  return (
    <section className="my-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Horizontal Scroll Section
      </h2>
      <div ref={scrollContainerRef} className="overflow-hidden w-full">
        <div className="horizontal-scroll-content flex space-x-10 transition-transform duration-300">
          <div className="w-screen h-[500px] bg-blue-300 flex items-center justify-center text-4xl font-bold">
            Item 1
          </div>
          <div className="w-screen h-[500px] bg-red-300 flex items-center justify-center text-4xl font-bold">
            Item 2
          </div>
          <div className="w-screen h-[500px] bg-green-300 flex items-center justify-center text-4xl font-bold">
            Item 3
          </div>
          <div className="w-screen h-[500px] bg-yellow-300 flex items-center justify-center text-4xl font-bold">
            Item 4
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
