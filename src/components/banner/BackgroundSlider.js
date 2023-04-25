import React from "react";
import "./BackgroundSlider.css";
import imageSlide from "./data";
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";

const BackgroundSlider = () => {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  return (
    <div className="App">
      <div className="countiner-style">
        <div style={bgImageStyle}></div>
        <div className="transparent-background">
          <Navbar />
        </div>
        <div className="description"></div>
      </div>
    </div>
  );
};

export default BackgroundSlider;
