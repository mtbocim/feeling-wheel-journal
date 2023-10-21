import "./Wheel.css";

function WheelRotationSelectors({ outerColors, setWheelRotation }) {
  return (
    <div>
      <div className="Wheel-rotation-container rotation-sad">
        <div
          className="rotation-selector-sad"
          onMouseDown={() => setWheelRotation(31)}
          style={{
            background: outerColors.sad,
          }}
        ></div>
      </div>
      <div className="Wheel-rotation-container rotation-disgusted">
        <div
          className="rotation-selector-disgusted"
          onMouseDown={() => setWheelRotation(75)}
          style={{
            background: outerColors.disgusted,
          }}
        ></div>
      </div>
      <div className="Wheel-rotation-container rotation-angry">
        <div
          className="rotation-selector-angry"
          onMouseDown={() => setWheelRotation(125)}
          style={{
            background: outerColors.angry,
          }}
        ></div>
      </div>
      <div className="Wheel-rotation-container rotation-fearful">
        <div
          className="rotation-selector-fearful"
          onMouseDown={() => setWheelRotation(189)}
          style={{
            background: outerColors.fearful,
          }}
        ></div>
      </div>
      <div className="Wheel-rotation-container rotation-bad">
        <div
          className="rotation-selector-bad"
          onMouseDown={() => setWheelRotation(232)}
          style={{
            background: outerColors.bad,
          }}
        ></div>
      </div>
      <div className="Wheel-rotation-container rotation-surprised">
        <div
          className="rotation-selector-surprised"
          onMouseDown={() => setWheelRotation(268)}
          style={{
            background: outerColors.surprised,
          }}
        ></div>
      </div>
      <div className="Wheel-rotation-container rotation-happy">
        <div
          className="rotation-selector-happy"
          onMouseDown={() => setWheelRotation(325)}
          style={{
            background: outerColors.happy,
          }}
        ></div>
      </div>
    </div>
  );
}

export default WheelRotationSelectors;
