import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import journalContext from "./journalContext";
import { SliderPicker } from "react-color";
import FeelingGradient from "./FeelingGradient";

import "./Wheel.css";

import React, { useState, useContext, useEffect } from "react";


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
  
  function lightenColor(color) {
    // Parse the color value into its red, green, and blue components
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
  
    // Calculate the new color components by adding 1/3 of the difference between the current value and 255
    const newR = Math.min(r + (255 - r) / 3, 255);
    const newG = Math.min(g + (255 - g) / 3, 255);
    const newB = Math.min(b + (255 - b) / 3, 255);
  
    // Convert the new components back to a hexadecimal color code
    const newColor = `#${Math.round(newR).toString(16)}${Math.round(newG).toString(16)}${Math.round(newB).toString(16)}`;
  
    return newColor;
  }

  function makeColors(colorSet){
    const colors = {};
    for (let key in colorSet){
      colors[key] = lightenColor(colorSet[key])
    }
    return colors;
  }

  const [outerColors, setOuterColors] = useState({
    happy: "#ff4500",
    surprised: "#ffff00",
    bad: "#0bbb0b",
    fearful: "#0099ff",
    angry: "#b200b2",
    disgusted: "#b5b5de",
    sad: "#ff8566",
  })
  const [middleColors, setMiddleColors] = useState(makeColors(outerColors))
  const [innerColors, setInnerColors] = useState(makeColors(middleColors))

  const innerWords = [
    { feeling: "Happy", color: innerColors.happy, isSelected: false },
    { feeling: "Surprised", color: innerColors.surprised, isSelected: false },
    { feeling: "Bad", color: innerColors.bad, isSelected: false },
    { feeling: "Fearful", color: innerColors.fearful, isSelected: false },
    { feeling: "Angry", color: innerColors.angry, isSelected: false },
    { feeling: "Disgusted", color: innerColors.disgusted, isSelected: false },
    { feeling: "Sad", color: innerColors.sad, isSelected: false },
  ]

  const middleWords = [
    { feeling: "Playful", color: middleColors.happy, isSelected: false },
    { feeling: "Content", color: middleColors.happy, isSelected: false },
    { feeling: "Interested", color: middleColors.happy, isSelected: false },
    { feeling: "Proud", color: middleColors.happy, isSelected: false },
    { feeling: "Accepted", color: middleColors.happy, isSelected: false },
    { feeling: "Powerful", color: middleColors.happy, isSelected: false },
    { feeling: "Peaceful", color: middleColors.happy, isSelected: false },
    { feeling: "Trusting", color: middleColors.happy, isSelected: false },
    { feeling: "Optimistic", color: middleColors.happy, isSelected: false },
    { feeling: "Startled", color: middleColors.surprised, isSelected: false },
    { feeling: "Confused", color: middleColors.surprised, isSelected: false },
    { feeling: "Amazed", color: middleColors.surprised, isSelected: false },
    { feeling: "Excited", color: middleColors.surprised, isSelected: false },
    { feeling: "Bored", color: middleColors.bad, isSelected: false },
    { feeling: "Busy", color: middleColors.bad, isSelected: false },
    { feeling: "Stressed", color: middleColors.bad, isSelected: false },
    { feeling: "Tired", color: middleColors.bad, isSelected: false },
    { feeling: "Scared", color: middleColors.fearful, isSelected: false },
    { feeling: "Anxious", color: middleColors.fearful, isSelected: false },
    { feeling: "Insecure", color: middleColors.fearful, isSelected: false },
    { feeling: "Weak", color: middleColors.fearful, isSelected: false },
    { feeling: "Rejected", color: middleColors.fearful, isSelected: false },
    { feeling: "Threatened", color: middleColors.fearful, isSelected: false },
    { feeling: "Let Down", color: middleColors.angry, isSelected: false },
    { feeling: "Humiliated", color: middleColors.angry, isSelected: false },
    { feeling: "Bitter", color: middleColors.angry, isSelected: false },
    { feeling: "Mad", color: middleColors.angry, isSelected: false },
    { feeling: "Aggressive", color: middleColors.angry, isSelected: false },
    { feeling: "Frustrated", color: middleColors.angry, isSelected: false },
    { feeling: "Distant", color: middleColors.angry, isSelected: false },
    { feeling: "Critical", color: middleColors.angry, isSelected: false },
    { feeling: "Disapproving", color: middleColors.disgusted, isSelected: false },
    { feeling: "Dissappointed", color: middleColors.disgusted, isSelected: false },
    { feeling: "Awful", color: middleColors.disgusted, isSelected: false },
    { feeling: "Repelled", color: middleColors.disgusted, isSelected: false },
    { feeling: "Hurt", color: middleColors.sad, isSelected: false },
    { feeling: "Depressed", color: middleColors.sad, isSelected: false },
    { feeling: "Guilty", color: middleColors.sad, isSelected: false },
    { feeling: "Dispair", color: middleColors.sad, isSelected: false },
    { feeling: "Vulnerable", color: middleColors.sad, isSelected: false },
    { feeling: "Lonely", color: middleColors.sad, isSelected: false },
  ]

  const outerWords = [
    { feeling: "Aroused", color: outerColors.happy, isSelected: false },
    { feeling: "Cheeky", color: outerColors.happy, isSelected: false },
    { feeling: "Free", color: outerColors.happy, isSelected: false },
    { feeling: "Joyful", color: outerColors.happy, isSelected: false },
    { feeling: "Curious", color: outerColors.happy, isSelected: false },
    { feeling: "Inquisitive", color: outerColors.happy, isSelected: false },
    { feeling: "Successful", color: outerColors.happy, isSelected: false },
    { feeling: "Confident", color: outerColors.happy, isSelected: false },
    { feeling: "Respected", color: outerColors.happy, isSelected: false },
    { feeling: "Valued", color: outerColors.happy, isSelected: false },
    { feeling: "Courageous", color: outerColors.happy, isSelected: false },
    { feeling: "Creative", color: outerColors.happy, isSelected: false },
    { feeling: "Loving", color: outerColors.happy, isSelected: false },
    { feeling: "Thankful", color: outerColors.happy, isSelected: false },
    { feeling: "Sensitive", color: outerColors.happy, isSelected: false },
    { feeling: "Intimate", color: outerColors.happy, isSelected: false },
    { feeling: "Hopeful", color: outerColors.happy, isSelected: false },
    { feeling: "Inspired", color: outerColors.happy, isSelected: false },
    { feeling: "Shocked", color: outerColors.surprised, isSelected: false },
    { feeling: "Dismayed", color: outerColors.surprised, isSelected: false },
    { feeling: "Disillusioned", color: outerColors.surprised, isSelected: false },
    { feeling: "Perplexed", color: outerColors.surprised, isSelected: false },
    { feeling: "Astonished", color: outerColors.surprised, isSelected: false },
    { feeling: "Awe", color: outerColors.surprised, isSelected: false },
    { feeling: "Eager", color: outerColors.surprised, isSelected: false },
    { feeling: "Energetic", color: outerColors.surprised, isSelected: false },
    { feeling: "Indifferent", color: outerColors.bad, isSelected: false },
    { feeling: "Apathetic", color: outerColors.bad, isSelected: false },
    { feeling: "Pressured", color: outerColors.bad, isSelected: false },
    { feeling: "Rushed", color: outerColors.bad, isSelected: false },
    { feeling: "Overwhelmed", color: outerColors.bad, isSelected: false },
    { feeling: "Out of Control", color: outerColors.bad, isSelected: false },
    { feeling: "Sleepy", color: outerColors.bad, isSelected: false },
    { feeling: "Unfocused", color: outerColors.bad, isSelected: false },
    { feeling: "Helpless", color: outerColors.fearful, isSelected: false },
    { feeling: "Frightened", color: outerColors.fearful, isSelected: false },
    { feeling: "Overwhelmed", color: outerColors.fearful, isSelected: false },
    { feeling: "Worried", color: outerColors.fearful, isSelected: false },
    { feeling: "Inadequate", color: outerColors.fearful, isSelected: false },
    { feeling: "Inferior", color: outerColors.fearful, isSelected: false },
    { feeling: "Worthless", color: outerColors.fearful, isSelected: false },
    { feeling: "Insignificant", color: outerColors.fearful, isSelected: false },
    { feeling: "Excluded", color: outerColors.fearful, isSelected: false },
    { feeling: "Persecuted", color: outerColors.fearful, isSelected: false },
    { feeling: "Nervous", color: outerColors.fearful, isSelected: false },
    { feeling: "Exposed", color: outerColors.fearful, isSelected: false },
    { feeling: "Betrayed", color: outerColors.angry, isSelected: false },
    { feeling: "Resentful", color: outerColors.angry, isSelected: false },
    { feeling: "Disrespected", color: outerColors.angry, isSelected: false },
    { feeling: "Ridiculed", color: outerColors.angry, isSelected: false },
    { feeling: "Indignant", color: outerColors.angry, isSelected: false },
    { feeling: "Violated", color: outerColors.angry, isSelected: false },
    { feeling: "Furious", color: outerColors.angry, isSelected: false },
    { feeling: "Jealous", color: outerColors.angry, isSelected: false },
    { feeling: "Provoked", color: outerColors.angry, isSelected: false },
    { feeling: "Hostile", color: outerColors.angry, isSelected: false },
    { feeling: "Infuriated", color: outerColors.angry, isSelected: false },
    { feeling: "Annoyed", color: outerColors.angry, isSelected: false },
    { feeling: "Withdrawn", color: outerColors.angry, isSelected: false },
    { feeling: "Numb", color: outerColors.angry, isSelected: false },
    { feeling: "Skeptical", color: outerColors.angry, isSelected: false },
    { feeling: "Dismissive", color: outerColors.angry, isSelected: false },
    { feeling: "Judgemental", color: outerColors.disgusted, isSelected: false },
    { feeling: "Embarrassed", color: outerColors.disgusted, isSelected: false },
    { feeling: "Appalled", color: outerColors.disgusted, isSelected: false },
    { feeling: "Revolted", color: outerColors.disgusted, isSelected: false },
    { feeling: "Nauseated", color: outerColors.disgusted, isSelected: false },
    { feeling: "Detestable", color: outerColors.disgusted, isSelected: false },
    { feeling: "Horrified", color: outerColors.disgusted, isSelected: false },
    { feeling: "Hesitant", color: outerColors.disgusted, isSelected: false },
    { feeling: "Embarrassed", color: outerColors.sad, isSelected: false },
    { feeling: "Disappointed", color: outerColors.sad, isSelected: false },
    { feeling: "Inferior", color: outerColors.sad, isSelected: false },
    { feeling: "Empty", color: outerColors.sad, isSelected: false },
    { feeling: "Remorseful", color: outerColors.sad, isSelected: false },
    { feeling: "Ashamed", color: outerColors.sad, isSelected: false },
    { feeling: "Powerless", color: outerColors.sad, isSelected: false },
    { feeling: "Grief", color: outerColors.sad, isSelected: false },
    { feeling: "Fragile", color: outerColors.sad, isSelected: false },
    { feeling: "Victimised", color: outerColors.sad, isSelected: false },
    { feeling: "Abandoned", color: outerColors.sad, isSelected: false },
    { feeling: "Isolated", color: outerColors.sad, isSelected: false },
  ]
  
  const [currentAngle, setCurrentAngle] = useState(325);
  const [innerState, setInnerState] = useState(entryData.innerState || innerWords);
  const [middleState, setMiddleState] = useState(entryData.middleState || middleWords);
  const [outerState, setOuterState] = useState(entryData.outerState || outerWords);

  const counter = useContext(journalContext);

  console.log("what is innerState", innerState)
  console.log("what is entry data", entryData)
  useEffect(() => {
    if(Object.keys(entryData).length !== 0){
    setInnerState(entryData.innerState);
    setMiddleState(entryData.middleState);
    setOuterState(entryData.outerState);
    }
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
