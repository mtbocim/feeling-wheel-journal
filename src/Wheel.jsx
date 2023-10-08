import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import "./Wheel.css";

import React, { useState } from "react";

function Wheel() {
  const [currentAngle, setCurrentAngle] = useState(325);
  console.log("What is rotationAngle", currentAngle);
  function setWheelRotation(newAngle) {

    const clockwise = (newAngle - currentAngle + 72000) % 360;
    const counterClockwise = (currentAngle - newAngle + 72000) % 360;

    if (clockwise < counterClockwise) {
      setCurrentAngle(() => currentAngle + clockwise);
    } else {
      setCurrentAngle(() => currentAngle - counterClockwise);
    }
  }

  return (
    <div className="Wheel-container">
      <div
        className="Wheel"
        style={{
          cursor: "grab",
          transform: `rotate(${currentAngle}deg)`,
          transition: "transform 0.5s ease",
        }}
      >
        <OuterRing />
        <MiddleRing />
        <InnerRing />
        <div className="Wheel-center" />
        <div
          className="Wheel-sad"
          onMouseDown={() => setWheelRotation(31)}
        ></div>
        <div
          className="Wheel-disgusted"
          onMouseDown={() => setWheelRotation(75)}
        ></div>
        <div
          className="Wheel-angry"
          onMouseDown={() => setWheelRotation(125)}
        ></div>
        <div
          className="Wheel-fearful"
          onMouseDown={() => setWheelRotation(189)}
        ></div>
        <div
          className="Wheel-bad"
          onMouseDown={() => setWheelRotation(232)}
        ></div>
        <div
          className="Wheel-surprised"
          onMouseDown={() => setWheelRotation(268)}
        ></div>
        <div
          className="Wheel-happy"
          onMouseDown={() => setWheelRotation(325)}
        ></div>
      </div>
    </div>
  );
}

export default Wheel;
