"use client";
import React, { useState } from "react";

const View = () => {
  const [index, setIndex] = useState(1);

  const handleSliderChange = (event) => {
    setIndex(parseInt(event.target.value, 10));
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
      <input
        type="range"
        min="1"
        max="36"
        value={index}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default View;
