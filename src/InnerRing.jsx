import Feeling from "./Feeling";
import "./InnerRing.css";

function InnerRing() {
  const innerWords = [
    { feeling: "Happy", color: "orange", isSelected: false },
    { feeling: "Surprised", color: "yellow", isSelected: false },
    { feeling: "Bad", color: "#0bbb0b", isSelected: false },
    { feeling: "Fearful", color: "#0099ff", isSelected: false },
    { feeling: "Angry", color: "purple", isSelected: false },
    { feeling: "Disgusted", color: "lavender", isSelected: false },
    { feeling: "Sad", color: "red", isSelected: false },
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
