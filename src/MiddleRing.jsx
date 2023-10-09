import Feeling from "./Feeling";
import "./MiddleRing.css";

function MiddleRing() {
  const middleWords = [
    { feeling: "Playful", color: "#ffad33", isSelected: false },
    { feeling: "Content", color: "#ffad33", isSelected: false },
    { feeling: "Interested", color: "#ffad33", isSelected: false },
    { feeling: "Proud", color: "#ffad33", isSelected: false },
    { feeling: "Accepted", color: "#ffad33", isSelected: false },
    { feeling: "Powerful", color: "#ffad33", isSelected: false },
    { feeling: "Peaceful", color: "#ffad33", isSelected: false },
    { feeling: "Trusting", color: "#ffad33", isSelected: false },
    { feeling: "Optimistic", color: "#ffad33", isSelected: false },
    { feeling: "Startled", color: "#ffff66", isSelected: false },
    { feeling: "Confused", color: "#ffff66", isSelected: false },
    { feeling: "Amazed", color: "#ffff66", isSelected: false },
    { feeling: "Excited", color: "#ffff66", isSelected: false },
    { feeling: "Bored", color: "#66ff66", isSelected: false },
    { feeling: "Busy", color: "#66ff66", isSelected: false },
    { feeling: "Stressed", color: "#66ff66", isSelected: false },
    { feeling: "Tired", color: "#66ff66", isSelected: false },
    { feeling: "Scared", color: "#80ccff", isSelected: false },
    { feeling: "Anxious", color: "#80ccff", isSelected: false },
    { feeling: "Insecure", color: "#80ccff", isSelected: false },
    { feeling: "Weak", color: "#80ccff", isSelected: false },
    { feeling: "Rejected", color: "#80ccff", isSelected: false },
    { feeling: "Threatened", color: "#80ccff", isSelected: false },
    { feeling: "Let Down", color: "#6666ff", isSelected: false },
    { feeling: "Humiliated", color: "#6666ff", isSelected: false },
    { feeling: "Bitter", color: "#6666ff", isSelected: false },
    { feeling: "Mad", color: "#6666ff", isSelected: false },
    { feeling: "Aggressive", color: "#6666ff", isSelected: false },
    { feeling: "Frustrated", color: "#6666ff", isSelected: false },
    { feeling: "Distant", color: "#6666ff", isSelected: false },
    { feeling: "Critical", color: "#6666ff", isSelected: false },
    { feeling: "Disapproving", color: "#99bbff", isSelected: false },
    { feeling: "Dissappointed", color: "#99bbff", isSelected: false },
    { feeling: "Awful", color: "#99bbff", isSelected: false },
    { feeling: "Repelled", color: "#99bbff", isSelected: false },
    { feeling: "Hurt", color: "#ff8566", isSelected: false },
    { feeling: "Depressed", color: "#ff8566", isSelected: false },
    { feeling: "Guilty", color: "#ff8566", isSelected: false },
    { feeling: "Dispair", color: "#ff8566", isSelected: false },
    { feeling: "Vulnerable", color: "#ff8566", isSelected: false },
    { feeling: "Lonely", color: "#ff8566", isSelected: false },
  ];

  function calcRotation(i) {
    return `${360 * (i / middleWords.length)}deg`;
  }
  return (
    <div className="MiddleRing">
      {middleWords.map((feeling, index) => (
        <Feeling
          key={feeling.feeling}
          feeling={feeling}
          rotation={calcRotation(index)}
        />
      ))}
    </div>
  );
}

export default MiddleRing;
