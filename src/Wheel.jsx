import InnerRing from "./InnerRing";
import MiddleRing from "./MiddleRing";
import OuterRing from "./OuterRing";
import "./Wheel.css";

import { useState, useRef } from "react";

function Wheel() {
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
  
  return (
    <div
      className="Wheel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "grab",
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.1s ease",
      }}
    >
      <OuterRing />
      <MiddleRing />
      <InnerRing />
    </div>
  );
}

export default Wheel;
