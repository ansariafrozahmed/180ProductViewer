"use client";
import React, { useState, useEffect } from "react";

const Auto = () => {
  const [index, setIndex] = useState(1);
  const [isAutoRotating, setIsAutoRotating] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isAutoRotating) {
      // Start automatic rotation when isAutoRotating is true
      intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex % 36) + 1);
      }, 100); // Adjust the interval time (in milliseconds) to make it faster or slower
    }

    // Clear the interval when the component is unmounted or when isAutoRotating becomes false
    return () => clearInterval(intervalId);
  }, [isAutoRotating]);

  const toggleAutoRotation = () => {
    setIsAutoRotating((prevIsAutoRotating) => !prevIsAutoRotating);
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100svh] p-5 w-full">
      <div>
        <img
          src={`/assets/img${index}.jpg`}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="">
        <button
          onClick={toggleAutoRotation}
          className=" bg-gray-300 px-10 py-3 rounded-xl"
        >
          {isAutoRotating ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Auto;
