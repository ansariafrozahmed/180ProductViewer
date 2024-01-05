"use client";
import React, { useState } from "react";
import "./Slider.css";

const Drag = () => {
  const [index, setIndex] = useState(1);

  const handleDragStart = (event) => {
    // Set data to be transferred during the drag
    if (event.dataTransfer) {
      event.dataTransfer.setData("text/plain", index.toString());
    }
  };

  const handleDrag = (event) => {
    if (event.touches && event.touches.length > 0) {
      // Handle touch events for mobile devices
      const containerWidth = event.target.clientWidth;
      const newPosition =
        event.touches[0].clientX - event.target.getBoundingClientRect().left;
      let newIndex = Math.ceil((newPosition / containerWidth) * 36);
      newIndex = Math.max(1, newIndex);
      setIndex(newIndex);
    } else if (event.clientX !== undefined) {
      // Handle mouse events
      const containerWidth = event.target.clientWidth;
      const newPosition =
        event.clientX - event.target.getBoundingClientRect().left;
      let newIndex = Math.ceil((newPosition / containerWidth) * 36);
      newIndex = Math.max(1, newIndex);
      setIndex(newIndex);
    }
  };

  const handleDragEnd = (event) => {
    // Logic to handle drag end if needed
    event.preventDefault(); // Prevent the default behavior
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100svh] p-5 w-full">
      <div
        draggable={true}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
      >
        <img
          src={`/assets/img${index}.jpg`}
          alt=""
          className="w-[100%] h-[100%] cursor-grab"
        />
      </div>
    </div>
  );
};

export default Drag;
