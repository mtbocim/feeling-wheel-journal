import Feeling from "./Feeling";
import "./OuterRing.css";

function OuterRing(){
  const colors = {
    bad:'green',
    fearful:'#7f7fff',
    angry:'#b284b2',
    sad:'red',
    disgusted:'grey',
    surprised:'yellow',
    happy:'orange'
  }  
  
  const outerWords = [
        { feeling: "Aroused", color: colors.happy, isSelected: false },
        { feeling: "Cheeky", color: colors.happy, isSelected: false },
        { feeling: "Free", color: colors.happy, isSelected: false },
        { feeling: "Joyful", color: colors.happy, isSelected: false },
        { feeling: "Curious", color: colors.happy, isSelected: false },
        { feeling: "Inquisitive", color: colors.happy, isSelected: false },
        { feeling: "Successful", color: colors.happy, isSelected: false },
        { feeling: "Confident", color: colors.happy, isSelected: false },
        { feeling: "Respected", color: colors.happy, isSelected: false },
        { feeling: "Valued", color: colors.happy, isSelected: false },
        { feeling: "Courageous", color: colors.happy, isSelected: false },
        { feeling: "Creative", color: colors.happy, isSelected: false },
        { feeling: "Loving", color: colors.happy, isSelected: false },
        { feeling: "Thankful", color: colors.happy, isSelected: false },
        { feeling: "Sensitive", color: colors.happy, isSelected: false },
        { feeling: "Intimate", color: colors.happy, isSelected: false },
        { feeling: "Hopeful", color: colors.happy, isSelected: false },
        { feeling: "Inspired", color: colors.happy, isSelected: false },
        { feeling: "Shocked", color: colors.surprised, isSelected: false },
        { feeling: "Dismayed", color: colors.surprised, isSelected: false },
        { feeling: "Disillusioned", color: colors.surprised, isSelected: false },
        { feeling: "Perplexed", color: colors.surprised, isSelected: false },
        { feeling: "Astonished", color: colors.surprised, isSelected: false },
        { feeling: "Awe", color: colors.surprised, isSelected: false },
        { feeling: "Eager", color: colors.surprised, isSelected: false },
        { feeling: "Energetic", color: colors.surprised, isSelected: false },
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
        { feeling: "Skeptical", color: colors.angry, isSelected: false },
        { feeling: "Dismissive", color: colors.angry, isSelected: false },
        { feeling: "Judgemental", color: colors.disgusted, isSelected: false },
        { feeling: "Embarrassed", color: colors.disgusted, isSelected: false },
        { feeling: "Appalled", color: colors.disgusted, isSelected: false },
        { feeling: "Revolted", color: colors.disgusted, isSelected: false },
        { feeling: "Nauseated", color: colors.disgusted, isSelected: false },
        { feeling: "Detestable", color: colors.disgusted, isSelected: false },
        { feeling: "Horrified", color: colors.disgusted, isSelected: false },
        { feeling: "Hesitant", color: colors.disgusted, isSelected: false },
        { feeling: "Embarrassed", color: colors.sad, isSelected: false },
        { feeling: "Disappointed", color: colors.sad, isSelected: false },
        { feeling: "Inferior", color: colors.sad, isSelected: false },
        { feeling: "Empty", color: colors.sad, isSelected: false },
        { feeling: "Remorseful", color: colors.sad, isSelected: false },
        { feeling: "Ashamed", color: colors.sad, isSelected: false },
        { feeling: "Powerless", color: colors.sad, isSelected: false },
        { feeling: "Grief", color: colors.sad, isSelected: false },
        { feeling: "Fragile", color: colors.sad, isSelected: false },
        { feeling: "Victimised", color: colors.sad, isSelected: false },
        { feeling: "Abandoned", color: colors.sad, isSelected: false },
        { feeling: "Isolated", color: colors.sad, isSelected: false },
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