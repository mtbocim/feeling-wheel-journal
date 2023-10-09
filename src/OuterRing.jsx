import Feeling from "./Feeling";
import "./OuterRing.css";

function OuterRing(){
  const colors = {
    bad:'#0bbb0b',
    fearful:'#0099ff',
    angry:'#945d94'
  }  
  
  const outerWords = [
        { feeling: "Aroused", color: "orange", isSelected: false },
        { feeling: "Cheeky", color: "orange", isSelected: false },
        { feeling: "Free", color: "orange", isSelected: false },
        { feeling: "Joyful", color: "orange", isSelected: false },
        { feeling: "Curious", color: "orange", isSelected: false },
        { feeling: "Inquisitive", color: "orange", isSelected: false },
        { feeling: "Successful", color: "orange", isSelected: false },
        { feeling: "Confident", color: "orange", isSelected: false },
        { feeling: "Respected", color: "orange", isSelected: false },
        { feeling: "Valued", color: "orange", isSelected: false },
        { feeling: "Courageous", color: "orange", isSelected: false },
        { feeling: "Creative", color: "orange", isSelected: false },
        { feeling: "Loving", color: "orange", isSelected: false },
        { feeling: "Thankful", color: "orange", isSelected: false },
        { feeling: "Sensitive", color: "orange", isSelected: false },
        { feeling: "Intimate", color: "orange", isSelected: false },
        { feeling: "Hopeful", color: "orange", isSelected: false },
        { feeling: "Inspired", color: "orange", isSelected: false },
        { feeling: "Shocked", color: "yellow", isSelected: false },
        { feeling: "Dismayed", color: "yellow", isSelected: false },
        { feeling: "Disillusioned", color: "yellow", isSelected: false },
        { feeling: "Perplexed", color: "yellow", isSelected: false },
        { feeling: "Astonished", color: "yellow", isSelected: false },
        { feeling: "Awe", color: "yellow", isSelected: false },
        { feeling: "Eager", color: "yellow", isSelected: false },
        { feeling: "Energetic", color: "yellow", isSelected: false },
        { feeling: "Indifferent", color: colors.bad, isSelected: false },
        { feeling: "Apathetic", color: colors.bad, isSelected: false },
        { feeling: "Pressured", color: colors.bad, isSelected: false },
        { feeling: "Rushed", color: colors.bad, isSelected: false },
        { feeling: "Overwhelmed", color: colors.bad, isSelected: false },
        { feeling: "Out of Control", color: colors.bad, isSelected: false },
        { feeling: "Sleepy", color: colors.bad, isSelected: false },
        { feeling: "Unfocused", color: colors.bad, isSelected: false },
        { feeling: "Helpless", color: colors.fearful, isSelected: false },
        { feeling: "Frightened", color: colors.fearful, isSelected: false },
        { feeling: "Overwhelmed", color: colors.fearful, isSelected: false },
        { feeling: "Worried", color: colors.fearful, isSelected: false },
        { feeling: "Inadequate", color: colors.fearful, isSelected: false },
        { feeling: "Inferior", color: colors.fearful, isSelected: false },
        { feeling: "Worthless", color: colors.fearful, isSelected: false },
        { feeling: "Insignificant", color: colors.fearful, isSelected: false },
        { feeling: "Excluded", color: colors.fearful, isSelected: false },
        { feeling: "Persecuted", color: colors.fearful, isSelected: false },
        { feeling: "Nervous", color: colors.fearful, isSelected: false },
        { feeling: "Exposed", color: colors.fearful, isSelected: false },
        { feeling: "Betrayed", color: colors.angry, isSelected: false },
        { feeling: "Resentful", color: colors.angry, isSelected: false },
        { feeling: "Disrespected", color: colors.angry, isSelected: false },
        { feeling: "Ridiculed", color: colors.angry, isSelected: false },
        { feeling: "Indignant", color: colors.angry, isSelected: false },
        { feeling: "Violated", color: colors.angry, isSelected: false },
        { feeling: "Furious", color: colors.angry, isSelected: false },
        { feeling: "Jealous", color: colors.angry, isSelected: false },
        { feeling: "Provoked", color: colors.angry, isSelected: false },
        { feeling: "Hostile", color: colors.angry, isSelected: false },
        { feeling: "Infuriated", color: colors.angry, isSelected: false },
        { feeling: "Annoyed", color: colors.angry, isSelected: false },
        { feeling: "Withdrawn", color: colors.angry, isSelected: false },
        { feeling: "Numb", color: colors.angry, isSelected: false },
        { feeling: "Sceptical", color: colors.angry, isSelected: false },
        { feeling: "Dismissive", color: colors.angry, isSelected: false },
        { feeling: "Judgemental", color: "lavender", isSelected: false },
        { feeling: "Embarrassed", color: "lavender", isSelected: false },
        { feeling: "Appalled", color: "lavender", isSelected: false },
        { feeling: "Revolted", color: "lavender", isSelected: false },
        { feeling: "Nauseated", color: "lavender", isSelected: false },
        { feeling: "Detestable", color: "lavender", isSelected: false },
        { feeling: "Horrified", color: "lavender", isSelected: false },
        { feeling: "Hesitant", color: "lavender", isSelected: false },
        { feeling: "Embarrassed", color: "red", isSelected: false },
        { feeling: "Disappointed", color: "red", isSelected: false },
        { feeling: "Inferior", color: "red", isSelected: false },
        { feeling: "Empty", color: "red", isSelected: false },
        { feeling: "Remorseful", color: "red", isSelected: false },
        { feeling: "Ashamed", color: "red", isSelected: false },
        { feeling: "Powerless", color: "red", isSelected: false },
        { feeling: "Grief", color: "red", isSelected: false },
        { feeling: "Fragile", color: "red", isSelected: false },
        { feeling: "Vicimised", color: "red", isSelected: false },
        { feeling: "Abandoned", color: "red", isSelected: false },
        { feeling: "Isolated", color: "red", isSelected: false },
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