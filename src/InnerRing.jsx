import Feeling from "./Feeling";
import "./InnerRing.css";

function InnerRing() {
  const innerWords = [
    { feeling: "Happy", color: "orange", isBold: false },
    { feeling: "Surprised", color: "yellow", isBold: false },
    { feeling: "Bad", color: "#0bbb0b", isBold: false },
    { feeling: "Fearful", color: "#0099ff", isBold: false },
    { feeling: "Angry", color: "purple", isBold: false },
    { feeling: "Disgusted", color: "lavender", isBold: false },
    { feeling: "Sad", color: "red", isBold: false },
  ];

  const initialAngles = ['33deg', '90deg', '125deg', '170deg', '235deg', '285deg', '330deg']


  return (
    <div
      className="InnerRing"
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
