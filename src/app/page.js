import React from "react";
import Slider from "../components/Slider";
import Auto from "../components/Auto";
import Drag from "../components/Drag";
import CappasityViewer from "../components/3D";

export default function Page() {
  return (
    <div>
      {/* <div className="h-80 w-80" style={styling}></div> */}
      <Slider />
      <hr />
      <Auto />
      <hr />
      <Drag />
      <hr />
      <CappasityViewer />
    </div>
  );
}
