"use client";
import React, { useState } from "react";

const Drag = () => {
  const [index, setIndex] = useState(1);

  const handleDragStart = () => {
    // Logic to handle drag start if needed
  };

  const handleDrag = (event) => {
    // Calculate the index based on the drag position
    const containerWidth = event.target.clientWidth;
    const newPosition =
      event.clientX - event.target.getBoundingClientRect().left;
    let newIndex = Math.ceil((newPosition / containerWidth) * 36);
    // Ensure newIndex is at least 1
    newIndex = Math.max(1, newIndex);
    // Update the index
    setIndex(newIndex);
  };

  const handleDragEnd = (event) => {
    // Logic to handle drag end if needed
    event.preventDefault(); // Prevent the default behavior
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-[100svh] p-5 w-full">
      <div
        // draggable={true}
        // onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        <img
          src={`/assets/img${index}.jpg`}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Drag;
