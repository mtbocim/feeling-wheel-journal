import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import feelingContext from "./feelingContext";

import "./Wheel.css";

import React, { useState, useContext } from "react";

import { innerWords, middleWords, outerWords } from "./feelingsData";

function Wheel() {
  const [currentAngle, setCurrentAngle] = useState(325);
  const [innerState, setInnerState] = useState(innerWords);
  const [middleState, setMiddleState] = useState(middleWords);
  const [outerState, setOuterState] = useState(outerWords);
  const counter = useContext(feelingContext);

  function setWheelRotation(newAngle) {
    const clockwise = (newAngle - currentAngle + 72000) % 360;
    const counterClockwise = (currentAngle - newAngle + 72000) % 360;

    if (clockwise < counterClockwise) {
      setCurrentAngle(() => currentAngle + clockwise);
    } else {
      setCurrentAngle(() => currentAngle - counterClockwise);
    }
  }

  function resetWheel() {
    setInnerState(() => innerWords);
    setMiddleState(() => middleWords);
    setOuterState(() => outerWords);
    counter('reset')
  }

  function updateInner(feeling) {
    const updatedFeelings = innerState.map((f) => {
      if (f.feeling === feeling) {
        const updatedF = { ...f, isSelected: !f.isSelected };
        counter(updatedF);
        return updatedF;
      }
      return f;
    });
    setInnerState([...updatedFeelings]);
  }
  function updateMiddle(feeling) {
    const updatedFeelings = middleState.map((f) => {
      if (f.feeling === feeling) {
        const updatedF = { ...f, isSelected: !f.isSelected };
        counter(updatedF);
        return updatedF;
      }
      return f;
    });
    setMiddleState([...updatedFeelings]);
  }

  function updateOuter(feeling) {
    const updatedFeelings = outerState.map((f) => {
      if (f.feeling === feeling) {
        const updatedF = { ...f, isSelected: !f.isSelected };
        counter(updatedF);
        return updatedF;
      }
      return f;
    });
    setOuterState([...updatedFeelings]);
  }

  return (
    <div className="Wheel-container">
      <div className="Wheel-reset">
        <button onClick={resetWheel}>Reset</button>
      </div>
      <div
        className="Wheel"
        style={{
          cursor: "grab",
          transform: `rotate(${currentAngle}deg)`,
          transition: "transform 0.5s ease",
        }}
      >
        <OuterRing words={outerState} update={updateOuter} />
        <MiddleRing words={middleState} update={updateMiddle} />
        <InnerRing words={innerState} update={updateInner} />
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
