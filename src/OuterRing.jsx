import Feeling from "./Feeling";
import "./OuterRing.css";

function OuterRing(){
  const colors = {
    bad:'#0bbb0b',
    fearful:'#0099ff',
    angry:'#945d94'
  }  
  
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
        { feeling: "Indifferent", color: colors.bad, isBold: false },
        { feeling: "Apathetic", color: colors.bad, isBold: false },
        { feeling: "Pressured", color: colors.bad, isBold: false },
        { feeling: "Rushed", color: colors.bad, isBold: false },
        { feeling: "Overwhelmed", color: colors.bad, isBold: false },
        { feeling: "Out of Control", color: colors.bad, isBold: false },
        { feeling: "Sleepy", color: colors.bad, isBold: false },
        { feeling: "Unfocused", color: colors.bad, isBold: false },
        { feeling: "Helpless", color: colors.fearful, isBold: false },
        { feeling: "Frightened", color: colors.fearful, isBold: false },
        { feeling: "Overwhelmed", color: colors.fearful, isBold: false },
        { feeling: "Worried", color: colors.fearful, isBold: false },
        { feeling: "Inadequate", color: colors.fearful, isBold: false },
        { feeling: "Inferior", color: colors.fearful, isBold: false },
        { feeling: "Worthless", color: colors.fearful, isBold: false },
        { feeling: "Insignificant", color: colors.fearful, isBold: false },
        { feeling: "Excluded", color: colors.fearful, isBold: false },
        { feeling: "Persecuted", color: colors.fearful, isBold: false },
        { feeling: "Nervous", color: colors.fearful, isBold: false },
        { feeling: "Exposed", color: colors.fearful, isBold: false },
        { feeling: "Betrayed", color: colors.angry, isBold: false },
        { feeling: "Resentful", color: colors.angry, isBold: false },
        { feeling: "Disrespected", color: colors.angry, isBold: false },
        { feeling: "Ridiculed", color: colors.angry, isBold: false },
        { feeling: "Indignant", color: colors.angry, isBold: false },
        { feeling: "Violated", color: colors.angry, isBold: false },
        { feeling: "Furious", color: colors.angry, isBold: false },
        { feeling: "Jealous", color: colors.angry, isBold: false },
        { feeling: "Provoked", color: colors.angry, isBold: false },
        { feeling: "Hostile", color: colors.angry, isBold: false },
        { feeling: "Infuriated", color: colors.angry, isBold: false },
        { feeling: "Annoyed", color: colors.angry, isBold: false },
        { feeling: "Withdrawn", color: colors.angry, isBold: false },
        { feeling: "Numb", color: colors.angry, isBold: false },
        { feeling: "Sceptical", color: colors.angry, isBold: false },
        { feeling: "Dismissive", color: colors.angry, isBold: false },
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
            key={`${feeling.feeling}${feeling.color}`}
            feeling={feeling}
            rotation={calcRotation(index)}
          />
        ))}
      </div>
    )
}

export default OuterRing;