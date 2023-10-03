import Feeling from "./Feeling";
import "./MiddleRing.css";

function MiddleRing() {
  const middleWords = [
    { feeling: "Playful", color: "#ffad33", isBold: false },
    { feeling: "Content", color: "#ffad33", isBold: false },
    { feeling: "Interested", color: "#ffad33", isBold: false },
    { feeling: "Proud", color: "#ffad33", isBold: false },
    { feeling: "Accepted", color: "#ffad33", isBold: false },
    { feeling: "Powerful", color: "#ffad33", isBold: false },
    { feeling: "Peaceful", color: "#ffad33", isBold: false },
    { feeling: "Trusting", color: "#ffad33", isBold: false },
    { feeling: "Optimistic", color: "#ffad33", isBold: false },
    { feeling: "Startled", color: "#ffff66", isBold: false },
    { feeling: "Confused", color: "#ffff66", isBold: false },
    { feeling: "Amazed", color: "#ffff66", isBold: false },
    { feeling: "Excited", color: "#ffff66", isBold: false },
    { feeling: "Bored", color: "#66ff66", isBold: false },
    { feeling: "Busy", color: "#66ff66", isBold: false },
    { feeling: "Stressed", color: "#66ff66", isBold: false },
    { feeling: "Tired", color: "#66ff66", isBold: false },
    { feeling: "Scared", color: "#80ccff", isBold: false },
    { feeling: "Anxious", color: "#80ccff", isBold: false },
    { feeling: "Insecure", color: "#80ccff", isBold: false },
    { feeling: "Weak", color: "#80ccff", isBold: false },
    { feeling: "Rejected", color: "#80ccff", isBold: false },
    { feeling: "Threatened", color: "#80ccff", isBold: false },
    { feeling: "Let Down", color: "#6666ff", isBold: false },
    { feeling: "Humiliated", color: "#6666ff", isBold: false },
    { feeling: "Bitter", color: "#6666ff", isBold: false },
    { feeling: "Mad", color: "#6666ff", isBold: false },
    { feeling: "Aggressive", color: "#6666ff", isBold: false },
    { feeling: "Frustrated", color: "#6666ff", isBold: false },
    { feeling: "Distant", color: "#6666ff", isBold: false },
    { feeling: "Critical", color: "#6666ff", isBold: false },
    { feeling: "Disapproving", color: "#99bbff", isBold: false },
    { feeling: "Dissappointed", color: "#99bbff", isBold: false },
    { feeling: "Awful", color: "#99bbff", isBold: false },
    { feeling: "Repelled", color: "#99bbff", isBold: false },
    { feeling: "Hurt", color: "#ff8566", isBold: false },
    { feeling: "Depressed", color: "#ff8566", isBold: false },
    { feeling: "Guilty", color: "#ff8566", isBold: false },
    { feeling: "Dispair", color: "#ff8566", isBold: false },
    { feeling: "Vulnerable", color: "#ff8566", isBold: false },
    { feeling: "Lonely", color: "#ff8566", isBold: false },
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
