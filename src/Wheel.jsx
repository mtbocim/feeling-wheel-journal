import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import journalContext from "./journalContext";
import { SliderPicker } from "react-color";
import FeelingGradient from "./FeelingGradient";

import "./Wheel.css";

import React, { useState, useContext, useEffect } from "react";

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

function Wheel({ updateEntries, colorCount, entryData }) {
  console.log("what is entryData", entryData)
  const [currentAngle, setCurrentAngle] = useState(325);
  const [innerState, setInnerState] = useState(entryData.innerState || innerWords);
  const [middleState, setMiddleState] = useState(entryData.middleState || middleWords);
  const [outerState, setOuterState] = useState(entryData.outerState || outerWords);
  const counter = useContext(journalContext);

  console.log("what is innerState", innerState)

  useEffect(() => {
    setInnerState(entryData.innerState || innerWords);
    setMiddleState(entryData.middleState || middleWords);
    setOuterState(entryData.outerState || outerWords);
  }, [entryData]);

  function setWheelRotation(newAngle) {
    const clockwise = (newAngle - currentAngle + 72000) % 360;
    const counterClockwise = (currentAngle - newAngle + 72000) % 360;

    if (clockwise < counterClockwise) {
      setCurrentAngle(() => currentAngle + clockwise);
    } else {
      setCurrentAngle(() => currentAngle - counterClockwise);
    }
  }

  function calculateGradient() {
    let total = 0;
    for (let key in colorCount) {
      total += colorCount[key];
    }
    if (total === 0) {
      return "white"; // Return white if total is 0
    }
    if (Object.keys(colorCount).length === 1) {
      return Object.keys(colorCount)[0];
    }

    let gradientStops = [];
    let current = 0;

    for (let color in colorCount) {
      const value = colorCount[color] / total;
      if (value > 0) {
        current += value;
        gradientStops.push(`${color} ${current * 100}%`);
      }
    }
    return `linear-gradient(to right, ${gradientStops.join(", ")})`;
  }

  function resetWheel() {
    setInnerState(() => innerWords);
    setMiddleState(() => middleWords);
    setOuterState(() => outerWords);
    counter("reset");
  }

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
       
        <div className="Wheel-color-pallet">
          <label for="happySliderPicker">Happy</label>
          <SliderPicker id="happySliderPicker" />
          
          <label for="sadSliderPicker">Sad</label>
          <SliderPicker id="sadSliderPicker" />
          
          <label for="happySliderPicker">Bad</label>
          <SliderPicker id="happySliderPicker" />
          
          <label for="happySliderPicker">Fearful</label>
          <SliderPicker id="happySliderPicker" />
          
          <label for="happySliderPicker">Angry</label>
          <SliderPicker id="happySliderPicker" />
          
          <label for="happySliderPicker">Disgusted</label>
          <SliderPicker id="happySliderPicker" />
          
          <label for="happySliderPicker">Surprised</label>
          <SliderPicker id="happySliderPicker" />
        </div>
        <div className="Wheel-actions-buttons">
        <button onClick={resetWheel}>Reset</button>
        <button onClick={saveWheel}>Save</button>
        </div>
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
      <br/>
      <FeelingGradient gradient={calculateGradient()}/>
    </div>
  );
}

export default Wheel;
