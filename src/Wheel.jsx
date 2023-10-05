import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import "./Wheel.css";

import React, { useState } from "react";

function Wheel() {
  const [rotationAngle, setRotationAngle] = useState(0);
  console.log("What is rotationAngle", rotationAngle);
  function setWheelRotation(val) {
    // TODO: fix rotationAngle snap taking 'long' path
    // 30 -> 325 = change of 295 or 65
    // UPDATE: Better snapping, need to test
    /*
    rotation angle = current orientation
    val = desired orientation
    scenario: 359 - 1
    moving backward to 1 is 358 degrees
    moving forward to 361 is 2 degrees


    */

    const shortest =
      360 + val - rotationAngle < rotationAngle - val ? 360 + val : val;
    setRotationAngle(() => shortest);
  }

  return (
    <div className="Wheel-container">
      <div
        className="Wheel"
        style={{
          cursor: "grab",
          transform: `rotate(${rotationAngle}deg)`,
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
