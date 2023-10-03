import Feeling from "./Feeling";
import "./InnerRing.css";

import { useState, useRef } from "react";

function InnerRing() {
  const innerWords = [
    { feeling: "Happy", color: "orange", isBold: false },
    { feeling: "Surprised", color: "yellow", isBold: false },
    { feeling: "Bad", color: "green", isBold: false },
    { feeling: "Fearful", color: "#0099ff", isBold: false },
    { feeling: "Angry", color: "purple", isBold: false },
    { feeling: "Disgusted", color: "lavender", isBold: false },
    { feeling: "Sad", color: "red", isBold: false },
  ];

  const initialAngles = ['33deg', '90deg', '125deg', '170deg', '235deg', '285deg', '330deg']
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const initialRotation = useRef(0);
  const initialMousePosition = useRef({ x: 0, y: 0 });

  function handleMouseDown(e) {
    setIsDragging(() => true);
    initialRotation.current = rotation;
    initialMousePosition.current = { x: e.clientX, y: e.clientY };
  }

  function handleMouseMove(e) {
    /* 
    x y means clockwise
    x -y means counter
    -x y means
    -x -y
    */

    if (isDragging) {
      console.log(e.target.getBoundingClientRect());
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = e.clientX - initialMousePosition.current.x;
      const deltaY = e.clientY - initialMousePosition.current.y;
      const angle = Math.atan2(deltaY, deltaX);
      const newRotation = angle * (180 / Math.PI) + initialRotation.current;
      setRotation(() => newRotation);
    }
  }

  function handleMouseUp() {
    setIsDragging(() => false);
  }

  function handleMouseLeave() {
    setIsDragging(() => false);
  }

  function calcRotation(i) {
    return `${360 * (i / innerWords.length)}deg`;
  }

  return (
    <div
      className="InnerRing"
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseLeave}
      // style={{
      //   cursor: "grab",
      //   transform: `rotate(${rotation}deg)`,
      //   transition: "transform 0.1s ease",
      // }}
    >
      {innerWords.map((feeling, index) => (
        <Feeling
          key={feeling.feeling}
          feeling={feeling}
          rotation={initialAngles[index]}
        />
      ))}
    </div>
  );
}

export default InnerRing;
