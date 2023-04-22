import React from "react";
import "./BackgroundSlider.css";
import imageSlide from "./data";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  return (
    <div className="App">
      <div className="countiner-style">
        <div style={bgImageStyle}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
