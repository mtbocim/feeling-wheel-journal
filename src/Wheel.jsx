import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import journalContext from "./journalContext";

import "./Wheel.css";

import React, { useState, useContext } from "react";

import { innerWords, middleWords, outerWords } from "./feelingsData";

/**
 * Wheel
 * 
 * State
 * 
 * Props
 * 
 * Wheel -> InnerRing
 *       -> MiddleRing
 *       -> OuterRing
 */

function Wheel({updateEntries, colorCount, entryData}) {
  console.log("what is entryData", entryData)
  const [currentAngle, setCurrentAngle] = useState(325);
  const [innerState, setInnerState] = useState(entryData.innerState||innerWords);
  const [middleState, setMiddleState] = useState(entryData.middleState||middleWords);
  const [outerState, setOuterState] = useState(entryData.outerState||outerWords);
  const counter = useContext(journalContext);
 
  console.log("what is innerState", innerState)
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
    counter("reset");
  }
  
  // function loadWheel() {
  //   setInnerState(() => entryData.innerState);
  //   setMiddleState(() => entryData.middleState);
  //   setOuterState(() => entryData.outerState);
  // }

  function updateFeeling(feeling, state, setState) {
    const updatedFeelings = state.map((f) => {
      if (f.feeling === feeling) {
        const updatedF = { ...f, isSelected: !f.isSelected };
        counter(updatedF);
        return updatedF;
      }
      return f;
    });
    setState([...updatedFeelings]);
  }

  function updateInner(feeling) {
    updateFeeling(feeling, innerState, setInnerState);
  }

  function updateMiddle(feeling) {
    updateFeeling(feeling, middleState, setMiddleState);
  }

  function updateOuter(feeling) {
    updateFeeling(feeling, outerState, setOuterState);
  }

  function saveWheel() {
    const time = new Date();
    const savedState = {
      innerState,
      middleState,
      outerState,
      colorCount
    };
    localStorage.setItem(time.toISOString(), JSON.stringify(savedState));
    updateEntries()
  }

  return (
    <div className="Wheel-container">
      <div className="Wheel-actions">
        <button onClick={resetWheel}>Reset</button>
        <button onClick={saveWheel}>Save</button>
      </div>
      <div
        className="Wheel"
        style={{
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
