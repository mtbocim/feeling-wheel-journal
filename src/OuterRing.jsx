import Feeling from "./Feeling";
import "./OuterRing.css";

function OuterRing(){
    const outerWords = [
        { feeling: "Aroused", color: "orange", isBold: false },
        { feeling: "Cheeky", color: "orange", isBold: false },
        { feeling: "Free", color: "orange", isBold: false },
        { feeling: "Joyful", color: "orange", isBold: false },
        { feeling: "Curious", color: "orange", isBold: false },
        { feeling: "Inquisitive", color: "orange", isBold: false },
        { feeling: "Successful", color: "orange", isBold: false },
        { feeling: "Confident", color: "orange", isBold: false },
        { feeling: "Respected", color: "orange", isBold: false },
        { feeling: "Valued", color: "orange", isBold: false },
        { feeling: "Courageous", color: "orange", isBold: false },
        { feeling: "Creative", color: "orange", isBold: false },
        { feeling: "Loving", color: "orange", isBold: false },
        { feeling: "Thankful", color: "orange", isBold: false },
        { feeling: "Sensitive", color: "orange", isBold: false },
        { feeling: "Intimate", color: "orange", isBold: false },
        { feeling: "Hopeful", color: "orange", isBold: false },
        { feeling: "Inspired", color: "orange", isBold: false },
        { feeling: "Shocked", color: "yellow", isBold: false },
        { feeling: "Dismayed", color: "yellow", isBold: false },
        { feeling: "Disillusioned", color: "yellow", isBold: false },
        { feeling: "Perplexed", color: "yellow", isBold: false },
        { feeling: "Astonished", color: "yellow", isBold: false },
        { feeling: "Awe", color: "yellow", isBold: false },
        { feeling: "Eager", color: "yellow", isBold: false },
        { feeling: "Energetic", color: "yellow", isBold: false },
        { feeling: "Indifferent", color: "green", isBold: false },
        { feeling: "Apathetic", color: "green", isBold: false },
        { feeling: "Pressured", color: "green", isBold: false },
        { feeling: "Rushed", color: "green", isBold: false },
        { feeling: "Overwhelmed", color: "green", isBold: false },
        { feeling: "Out of Control", color: "green", isBold: false },
        { feeling: "Sleepy", color: "green", isBold: false },
        { feeling: "Unfocused", color: "green", isBold: false },
        { feeling: "Helpless", color: "#0099ff", isBold: false },
        { feeling: "Frightened", color: "#0099ff", isBold: false },
        { feeling: "Overwhelmed", color: "#0099ff", isBold: false },
        { feeling: "Worried", color: "#0099ff", isBold: false },
        { feeling: "Inadequate", color: "#0099ff", isBold: false },
        { feeling: "Inferior", color: "#0099ff", isBold: false },
        { feeling: "Worthless", color: "#0099ff", isBold: false },
        { feeling: "Insignificant", color: "#0099ff", isBold: false },
        { feeling: "Excluded", color: "#0099ff", isBold: false },
        { feeling: "Persecuted", color: "#0099ff", isBold: false },
        { feeling: "Nervous", color: "#0099ff", isBold: false },
        { feeling: "Exposed", color: "#0099ff", isBold: false },
        { feeling: "Betrayed", color: "purple", isBold: false },
        { feeling: "Disrespected", color: "purple", isBold: false },
        { feeling: "Disrespected", color: "purple", isBold: false },
        { feeling: "Ridiculed", color: "purple", isBold: false },
        { feeling: "Indignant", color: "purple", isBold: false },
        { feeling: "Violated", color: "purple", isBold: false },
        { feeling: "Furious", color: "purple", isBold: false },
        { feeling: "Jealous", color: "purple", isBold: false },
        { feeling: "Provoked", color: "purple", isBold: false },
        { feeling: "Hostile", color: "purple", isBold: false },
        { feeling: "Infuriated", color: "purple", isBold: false },
        { feeling: "Annoyed", color: "purple", isBold: false },
        { feeling: "Withdrawn", color: "purple", isBold: false },
        { feeling: "Numb", color: "purple", isBold: false },
        { feeling: "Sceptical", color: "purple", isBold: false },
        { feeling: "Dismissive", color: "purple", isBold: false },
        { feeling: "Judgemental", color: "lavender", isBold: false },
        { feeling: "Embarrassed", color: "lavender", isBold: false },
        { feeling: "Appalled", color: "lavender", isBold: false },
        { feeling: "Revolted", color: "lavender", isBold: false },
        { feeling: "Nauseated", color: "lavender", isBold: false },
        { feeling: "Detestable", color: "lavender", isBold: false },
        { feeling: "Horrified", color: "lavender", isBold: false },
        { feeling: "Hesitant", color: "lavender", isBold: false },
        { feeling: "Embarrassed", color: "red", isBold: false },
        { feeling: "Disappointed", color: "red", isBold: false },
        { feeling: "Inferior", color: "red", isBold: false },
        { feeling: "Empty", color: "red", isBold: false },
        { feeling: "Remorseful", color: "red", isBold: false },
        { feeling: "Ashamed", color: "red", isBold: false },
        { feeling: "Powerless", color: "red", isBold: false },
        { feeling: "Grief", color: "red", isBold: false },
        { feeling: "Fragile", color: "red", isBold: false },
        { feeling: "Vicimised", color: "red", isBold: false },
        { feeling: "Abandoned", color: "red", isBold: false },
        { feeling: "Isolated", color: "red", isBold: false },
    ];

    function calcRotation(i) {
        return `${360 * (i / outerWords.length)-1.5}deg`;
      }
    return(
        <div className="OuterRing">
        {outerWords.map((feeling, index) => (
          <Feeling
            key={feeling.feeling}
            feeling={feeling}
            rotation={calcRotation(index)}
          />
        ))}
      </div>
    )
}

export default OuterRing;