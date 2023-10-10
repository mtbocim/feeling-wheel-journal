import Feeling from "./Feeling";
import "./MiddleRing.css";

function MiddleRing() {
  const colors = {
    bad:"#66ff66",
    fearful:"#80ccff",
    angry:"#6666ff",
    sad:"#ff8566",
    disgusted:"#99bbff",
    surprised:"#ffff66",
    happy:"#ffad33"
  } 
  const middleWords = [
    { feeling: "Playful", color: colors.happy, isSelected: false },
    { feeling: "Content", color: colors.happy, isSelected: false },
    { feeling: "Interested", color: colors.happy, isSelected: false },
    { feeling: "Proud", color: colors.happy, isSelected: false },
    { feeling: "Accepted", color: colors.happy, isSelected: false },
    { feeling: "Powerful", color: colors.happy, isSelected: false },
    { feeling: "Peaceful", color: colors.happy, isSelected: false },
    { feeling: "Trusting", color: colors.happy, isSelected: false },
    { feeling: "Optimistic", color: colors.happy, isSelected: false },
    { feeling: "Startled", color: colors.surprised, isSelected: false },
    { feeling: "Confused", color: colors.surprised, isSelected: false },
    { feeling: "Amazed", color: colors.surprised, isSelected: false },
    { feeling: "Excited", color: colors.surprised, isSelected: false },
    { feeling: "Bored", color: colors.bad, isSelected: false },
    { feeling: "Busy", color: colors.bad, isSelected: false },
    { feeling: "Stressed", color: colors.bad, isSelected: false },
    { feeling: "Tired", color: colors.bad, isSelected: false },
    { feeling: "Scared", color: colors.fearful, isSelected: false },
    { feeling: "Anxious", color: colors.fearful, isSelected: false },
    { feeling: "Insecure", color: colors.fearful, isSelected: false },
    { feeling: "Weak", color: colors.fearful, isSelected: false },
    { feeling: "Rejected", color: colors.fearful, isSelected: false },
    { feeling: "Threatened", color: colors.fearful, isSelected: false },
    { feeling: "Let Down", color: colors.angry, isSelected: false },
    { feeling: "Humiliated", color: colors.angry, isSelected: false },
    { feeling: "Bitter", color: colors.angry, isSelected: false },
    { feeling: "Mad", color: colors.angry, isSelected: false },
    { feeling: "Aggressive", color: colors.angry, isSelected: false },
    { feeling: "Frustrated", color: colors.angry, isSelected: false },
    { feeling: "Distant", color: colors.angry, isSelected: false },
    { feeling: "Critical", color: colors.angry, isSelected: false },
    { feeling: "Disapproving", color: colors.disgusted, isSelected: false },
    { feeling: "Dissappointed", color: colors.disgusted, isSelected: false },
    { feeling: "Awful", color: colors.disgusted, isSelected: false },
    { feeling: "Repelled", color: colors.disgusted, isSelected: false },
    { feeling: "Hurt", color: colors.sad, isSelected: false },
    { feeling: "Depressed", color: colors.sad, isSelected: false },
    { feeling: "Guilty", color: colors.sad, isSelected: false },
    { feeling: "Dispair", color: colors.sad, isSelected: false },
    { feeling: "Vulnerable", color: colors.sad, isSelected: false },
    { feeling: "Lonely", color: colors.sad, isSelected: false },
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
