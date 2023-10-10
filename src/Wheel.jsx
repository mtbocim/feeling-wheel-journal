import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";

import "./Wheel.css";

import React, { useState } from "react";

function Wheel() {
  const [currentAngle, setCurrentAngle] = useState(325);

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
          <div className="Wheel-rotation-container rotation-sad">
            <div
              className="rotation-selector-sad"
              onMouseDown={() => setWheelRotation(31)}
            ></div>
          </div>
          <div className="Wheel-rotation-container rotation-disgusted">
            <div
              className="rotation-selector-disgusted"
              onMouseDown={() => setWheelRotation(75)}
            ></div>
          </div>
          <div className="Wheel-rotation-container rotation-angry">
            <div
              className="rotation-selector-angry"
              onMouseDown={() => setWheelRotation(125)}
            ></div>
          </div>
          <div className="Wheel-rotation-container rotation-fearful">
            <div
              className="rotation-selector-fearful"
              onMouseDown={() => setWheelRotation(189)}
            ></div>
          </div>
          <div className="Wheel-rotation-container rotation-bad">
            <div
              className="rotation-selector-bad"
              onMouseDown={() => setWheelRotation(232)}
            ></div>
          </div>
          <div className="Wheel-rotation-container rotation-surprised">
            <div
              className="rotation-selector-surprised"
              onMouseDown={() => setWheelRotation(268)}
            ></div>
          </div>
          <div className="Wheel-rotation-container rotation-happy">
            <div
              className="rotation-selector-happy"
              onMouseDown={() => setWheelRotation(325)}
            ></div>
          </div>
        </div>
      </div>
  );
}

export default Wheel;
