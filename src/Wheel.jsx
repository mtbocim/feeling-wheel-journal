import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import journalContext from "./journalContext";
import { SliderPicker } from "react-color";
import FeelingGradient from "./FeelingGradient";
import WheelRotationSelectors from "./WheelRotationSelectors";

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
    const newColor = `#${Math.round(newR).toString(16)}${Math.round(
      newG
    ).toString(16)}${Math.round(newB).toString(16)}`;

    return newColor;
  }

  function makeColors(colorSet) {
    const colors = {};
    for (let key in colorSet) {
      colors[key] = lightenColor(colorSet[key]);
    }
    return colors;
  }
  const palletData = JSON.parse(localStorage.getItem("wheelData"));
  const [outerColors, setOuterColors] = useState(
    palletData?.colorSet || {
      happy: "#ff4500",
      surprised: "#ffff00",
      bad: "#0bbb0b",
      fearful: "#0099ff",
      angry: "#b200b2",
      disgusted: "#b5b5de",
      sad: "#ff8566",
    }
  );

  const [middleColors, setMiddleColors] = useState(makeColors(outerColors));
  const [innerColors, setInnerColors] = useState(makeColors(middleColors));

  const innerWords = [
    { feeling: "Happy", color: innerColors.happy, isSelected: false },
    { feeling: "Surprised", color: innerColors.surprised, isSelected: false },
    { feeling: "Bad", color: innerColors.bad, isSelected: false },
    { feeling: "Fearful", color: innerColors.fearful, isSelected: false },
    { feeling: "Angry", color: innerColors.angry, isSelected: false },
    { feeling: "Disgusted", color: innerColors.disgusted, isSelected: false },
    { feeling: "Sad", color: innerColors.sad, isSelected: false },
  ];

  const middleWords = [
    {
      feeling: "Playful",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Content",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Interested",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Proud",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Accepted",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Powerful",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Peaceful",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Trusting",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Optimistic",
      color: middleColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Startled",
      color: middleColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Confused",
      color: middleColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Amazed",
      color: middleColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Excited",
      color: middleColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Bored",
      color: middleColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Busy",
      color: middleColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Stressed",
      color: middleColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Tired",
      color: middleColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Scared",
      color: middleColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Anxious",
      color: middleColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Insecure",
      color: middleColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Weak",
      color: middleColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Rejected",
      color: middleColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Threatened",
      color: middleColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Let Down",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Humiliated",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Bitter",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Mad",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Aggressive",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Frustrated",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Distant",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Critical",
      color: middleColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Disapproving",
      color: middleColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Dissappointed",
      color: middleColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Awful",
      color: middleColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Repelled",
      color: middleColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Hurt",
      color: middleColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Depressed",
      color: middleColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Guilty",
      color: middleColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Dispair",
      color: middleColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Vulnerable",
      color: middleColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Lonely",
      color: middleColors.sad,
      isSelected: false,
      parent: "sad",
    },
  ];

  const outerWords = [
    {
      feeling: "Aroused",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Cheeky",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Free",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Joyful",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Curious",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Inquisitive",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Successful",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Confident",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Respected",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Valued",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Courageous",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Creative",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Loving",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Thankful",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Sensitive",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Intimate",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Hopeful",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Inspired",
      color: outerColors.happy,
      isSelected: false,
      parent: "happy",
    },
    {
      feeling: "Shocked",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Dismayed",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Disillusioned",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Perplexed",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Astonished",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Awe",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Eager",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Energetic",
      color: outerColors.surprised,
      isSelected: false,
      parent: "surprised",
    },
    {
      feeling: "Indifferent",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Apathetic",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Pressured",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Rushed",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Overwhelmed",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Out of Control",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Sleepy",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Unfocused",
      color: outerColors.bad,
      isSelected: false,
      parent: "bad",
    },
    {
      feeling: "Helpless",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Frightened",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Overwhelmed",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Worried",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Inadequate",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Inferior",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Worthless",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Insignificant",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Excluded",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Persecuted",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Nervous",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Exposed",
      color: outerColors.fearful,
      isSelected: false,
      parent: "fearful",
    },
    {
      feeling: "Betrayed",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Resentful",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Disrespected",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Ridiculed",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Indignant",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Violated",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Furious",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Jealous",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Provoked",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Hostile",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Infuriated",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Annoyed",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Withdrawn",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Numb",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Skeptical",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Dismissive",
      color: outerColors.angry,
      isSelected: false,
      parent: "angry",
    },
    {
      feeling: "Judgemental",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Embarrassed",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Appalled",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Revolted",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Nauseated",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Detestable",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Horrified",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Hesitant",
      color: outerColors.disgusted,
      isSelected: false,
      parent: "disgusted",
    },
    {
      feeling: "Embarrassed",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Disappointed",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Inferior",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Empty",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Remorseful",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Ashamed",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Powerless",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Grief",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Fragile",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Victimised",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Abandoned",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
    {
      feeling: "Isolated",
      color: outerColors.sad,
      isSelected: false,
      parent: "sad",
    },
  ];

  const [currentAngle, setCurrentAngle] = useState(325);
  const [innerState, setInnerState] = useState(
    entryData.innerState || innerWords
  );
  const [middleState, setMiddleState] = useState(
    entryData.middleState || middleWords
  );
  const [outerState, setOuterState] = useState(
    entryData.outerState || outerWords
  );

  const counter = useContext(journalContext);

  useEffect(() => {
    if (Object.keys(entryData).length !== 0) {
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

  function handleChange(feeling, color) {
    const newOuterColors = { ...outerColors, [feeling]: color };
    setOuterColors(newOuterColors);

    const newMiddleColors = makeColors(newOuterColors);
    setMiddleColors(newMiddleColors);

    const newInnerColors = makeColors(newMiddleColors);
    setInnerColors(newInnerColors);

    const updatedOuterState = outerState.map((item) => ({
      ...item,
      color: item.parent === feeling ? color : item.color,
    }));
    setOuterState(updatedOuterState);

    const updatedMiddleState = middleState.map((item) => ({
      ...item,
      color: item.parent === feeling ? newMiddleColors[feeling] : item.color,
    }));
    setMiddleState(updatedMiddleState);

    const updatedInnerState = innerState.map((item) => ({
      ...item,
      color:
        item.feeling.toLowerCase() === feeling
          ? newInnerColors[feeling]
          : item.color,
    }));
    setInnerState(updatedInnerState);
  }
  function savePallet() {
    let currentData = JSON.parse(localStorage.getItem("wheelData"));
    if (!currentData) {
      localStorage.setItem(
        "wheelData",
        JSON.stringify({ colorSet: outerColors })
      );
    } else {
      currentData.colorSet = outerColors;
      localStorage.setItem("wheelData", JSON.stringify(currentData));
    }
  }

  function saveWheel() {
    const time = new Date();
    const savedState = {
      innerState,
      middleState,
      outerState,
      colorCount,
    };

    let entries = JSON.parse(localStorage.getItem("wheelEntries")) || {};

    entries[time] = savedState;

    localStorage.setItem("wheelEntries", JSON.stringify(entries));
    updateEntries();
  }

  return (
    <div className="Wheel-container">
      <div className="Wheel-actions">
        <div className="Wheel-color-pallet">
          {[
            "Happy",
            "Sad",
            "Bad",
            "Fearful",
            "Angry",
            "Disgusted",
            "Surprised",
          ].map((feeling) => {
            const lowerFeeling = feeling.toLowerCase();
            return (
              <div id={lowerFeeling} key={feeling}>
                <label htmlFor={lowerFeeling}>{feeling}</label>
                <SliderPicker
                  color={outerColors[lowerFeeling]}
                  onChange={(newColor) =>
                    handleChange(lowerFeeling, newColor.hex)
                  }
                />
              </div>
            );
          })}
          <button onClick={savePallet}>Save pallet</button>
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
        <WheelRotationSelectors
          outerColors={outerColors}
          setWheelRotation={setWheelRotation}
        />
      </div>
      <br />
      <FeelingGradient gradient={calculateGradient()} />
    </div>
  );
}

export default Wheel;
