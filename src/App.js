import React from "react";
import Navbar from "./components/navbar/Navbar";
import BackgroundSlider from "./components/banner/BackgroundSlider";

function App() {
  return (
    <div className=" h-auto">
      <h1
        className=" px-44 w-full h-20 flex items-center 
    font-titleFont bg-bodyColor text-designColor"
      >
        (951)-795-3173
      </h1>
      <BackgroundSlider />
    </div>
  );
}

export default App;
