function lightenColor(color) {
  // Parse the color value into its red, green, and blue components
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // Calculate the new color components by adding 1/3 of the difference between the current value and 255
  const newR = Math.min(r + (255 - r) / 3, 255);
  const newG = Math.min(g + (255 - g) / 3, 255);
  const newB = Math.min(b + (255 - b) / 3, 255);

  // Convert the new components back to a hexadecimal color code
  const newColor = `#${Math.round(newR).toString(16)}${Math.round(newG).toString(16)}${Math.round(newB).toString(16)}`;

  return newColor;
}

const outerColors = {
  happy: "#ff4500",
  surprised: "#ffff00",
  bad: "#0bbb0b",
  fearful: "#0099ff",
  angry: "#b200b2",
  disgusted: "#e6e6fa",
  sad: "#ff8566",
}

const middleColors = {};
const innerColors = {};

function makeColors(){
  for(let key in outerColors){
    middleColors[key] = lightenColor(outerColors[key])
  }
  for(let key in middleColors){
    innerColors[key] = lightenColor(middleColors[key])
  }
}
makeColors()


export const innerWords = [
   { feeling: "Happy", color: innerColors.happy, isSelected: false },
   { feeling: "Surprised", color: innerColors.surprised, isSelected: false },
   { feeling: "Bad", color: innerColors.bad, isSelected: false },
   { feeling: "Fearful", color: innerColors.fearful, isSelected: false },
   { feeling: "Angry", color: innerColors.angry, isSelected: false },
   { feeling: "Disgusted", color: innerColors.disgusted, isSelected: false },
   { feeling: "Sad", color: innerColors.sad, isSelected: false },
 ];


 
 export const middleWords = [
   { feeling: "Playful", color: middleColors.happy, isSelected: false },
   { feeling: "Content", color: middleColors.happy, isSelected: false },
   { feeling: "Interested", color: middleColors.happy, isSelected: false },
   { feeling: "Proud", color: middleColors.happy, isSelected: false },
   { feeling: "Accepted", color: middleColors.happy, isSelected: false },
   { feeling: "Powerful", color: middleColors.happy, isSelected: false },
   { feeling: "Peaceful", color: middleColors.happy, isSelected: false },
   { feeling: "Trusting", color: middleColors.happy, isSelected: false },
   { feeling: "Optimistic", color: middleColors.happy, isSelected: false },
   { feeling: "Startled", color: middleColors.surprised, isSelected: false },
   { feeling: "Confused", color: middleColors.surprised, isSelected: false },
   { feeling: "Amazed", color: middleColors.surprised, isSelected: false },
   { feeling: "Excited", color: middleColors.surprised, isSelected: false },
   { feeling: "Bored", color: middleColors.bad, isSelected: false },
   { feeling: "Busy", color: middleColors.bad, isSelected: false },
   { feeling: "Stressed", color: middleColors.bad, isSelected: false },
   { feeling: "Tired", color: middleColors.bad, isSelected: false },
   { feeling: "Scared", color: middleColors.fearful, isSelected: false },
   { feeling: "Anxious", color: middleColors.fearful, isSelected: false },
   { feeling: "Insecure", color: middleColors.fearful, isSelected: false },
   { feeling: "Weak", color: middleColors.fearful, isSelected: false },
   { feeling: "Rejected", color: middleColors.fearful, isSelected: false },
   { feeling: "Threatened", color: middleColors.fearful, isSelected: false },
   { feeling: "Let Down", color: middleColors.angry, isSelected: false },
   { feeling: "Humiliated", color: middleColors.angry, isSelected: false },
   { feeling: "Bitter", color: middleColors.angry, isSelected: false },
   { feeling: "Mad", color: middleColors.angry, isSelected: false },
   { feeling: "Aggressive", color: middleColors.angry, isSelected: false },
   { feeling: "Frustrated", color: middleColors.angry, isSelected: false },
   { feeling: "Distant", color: middleColors.angry, isSelected: false },
   { feeling: "Critical", color: middleColors.angry, isSelected: false },
   { feeling: "Disapproving", color: middleColors.disgusted, isSelected: false },
   { feeling: "Dissappointed", color: middleColors.disgusted, isSelected: false },
   { feeling: "Awful", color: middleColors.disgusted, isSelected: false },
   { feeling: "Repelled", color: middleColors.disgusted, isSelected: false },
   { feeling: "Hurt", color: middleColors.sad, isSelected: false },
   { feeling: "Depressed", color: middleColors.sad, isSelected: false },
   { feeling: "Guilty", color: middleColors.sad, isSelected: false },
   { feeling: "Dispair", color: middleColors.sad, isSelected: false },
   { feeling: "Vulnerable", color: middleColors.sad, isSelected: false },
   { feeling: "Lonely", color: middleColors.sad, isSelected: false },
 ];


 export const outerWords = [
   { feeling: "Aroused", color: outerColors.happy, isSelected: false },
   { feeling: "Cheeky", color: outerColors.happy, isSelected: false },
   { feeling: "Free", color: outerColors.happy, isSelected: false },
   { feeling: "Joyful", color: outerColors.happy, isSelected: false },
   { feeling: "Curious", color: outerColors.happy, isSelected: false },
   { feeling: "Inquisitive", color: outerColors.happy, isSelected: false },
   { feeling: "Successful", color: outerColors.happy, isSelected: false },
   { feeling: "Confident", color: outerColors.happy, isSelected: false },
   { feeling: "Respected", color: outerColors.happy, isSelected: false },
   { feeling: "Valued", color: outerColors.happy, isSelected: false },
   { feeling: "Courageous", color: outerColors.happy, isSelected: false },
   { feeling: "Creative", color: outerColors.happy, isSelected: false },
   { feeling: "Loving", color: outerColors.happy, isSelected: false },
   { feeling: "Thankful", color: outerColors.happy, isSelected: false },
   { feeling: "Sensitive", color: outerColors.happy, isSelected: false },
   { feeling: "Intimate", color: outerColors.happy, isSelected: false },
   { feeling: "Hopeful", color: outerColors.happy, isSelected: false },
   { feeling: "Inspired", color: outerColors.happy, isSelected: false },
   { feeling: "Shocked", color: outerColors.surprised, isSelected: false },
   { feeling: "Dismayed", color: outerColors.surprised, isSelected: false },
   { feeling: "Disillusioned", color: outerColors.surprised, isSelected: false },
   { feeling: "Perplexed", color: outerColors.surprised, isSelected: false },
   { feeling: "Astonished", color: outerColors.surprised, isSelected: false },
   { feeling: "Awe", color: outerColors.surprised, isSelected: false },
   { feeling: "Eager", color: outerColors.surprised, isSelected: false },
   { feeling: "Energetic", color: outerColors.surprised, isSelected: false },
   { feeling: "Indifferent", color: outerColors.bad, isSelected: false },
   { feeling: "Apathetic", color: outerColors.bad, isSelected: false },
   { feeling: "Pressured", color: outerColors.bad, isSelected: false },
   { feeling: "Rushed", color: outerColors.bad, isSelected: false },
   { feeling: "Overwhelmed", color: outerColors.bad, isSelected: false },
   { feeling: "Out of Control", color: outerColors.bad, isSelected: false },
   { feeling: "Sleepy", color: outerColors.bad, isSelected: false },
   { feeling: "Unfocused", color: outerColors.bad, isSelected: false },
   { feeling: "Helpless", color: outerColors.fearful, isSelected: false },
   { feeling: "Frightened", color: outerColors.fearful, isSelected: false },
   { feeling: "Overwhelmed", color: outerColors.fearful, isSelected: false },
   { feeling: "Worried", color: outerColors.fearful, isSelected: false },
   { feeling: "Inadequate", color: outerColors.fearful, isSelected: false },
   { feeling: "Inferior", color: outerColors.fearful, isSelected: false },
   { feeling: "Worthless", color: outerColors.fearful, isSelected: false },
   { feeling: "Insignificant", color: outerColors.fearful, isSelected: false },
   { feeling: "Excluded", color: outerColors.fearful, isSelected: false },
   { feeling: "Persecuted", color: outerColors.fearful, isSelected: false },
   { feeling: "Nervous", color: outerColors.fearful, isSelected: false },
   { feeling: "Exposed", color: outerColors.fearful, isSelected: false },
   { feeling: "Betrayed", color: outerColors.angry, isSelected: false },
   { feeling: "Resentful", color: outerColors.angry, isSelected: false },
   { feeling: "Disrespected", color: outerColors.angry, isSelected: false },
   { feeling: "Ridiculed", color: outerColors.angry, isSelected: false },
   { feeling: "Indignant", color: outerColors.angry, isSelected: false },
   { feeling: "Violated", color: outerColors.angry, isSelected: false },
   { feeling: "Furious", color: outerColors.angry, isSelected: false },
   { feeling: "Jealous", color: outerColors.angry, isSelected: false },
   { feeling: "Provoked", color: outerColors.angry, isSelected: false },
   { feeling: "Hostile", color: outerColors.angry, isSelected: false },
   { feeling: "Infuriated", color: outerColors.angry, isSelected: false },
   { feeling: "Annoyed", color: outerColors.angry, isSelected: false },
   { feeling: "Withdrawn", color: outerColors.angry, isSelected: false },
   { feeling: "Numb", color: outerColors.angry, isSelected: false },
   { feeling: "Skeptical", color: outerColors.angry, isSelected: false },
   { feeling: "Dismissive", color: outerColors.angry, isSelected: false },
   { feeling: "Judgemental", color: outerColors.disgusted, isSelected: false },
   { feeling: "Embarrassed", color: outerColors.disgusted, isSelected: false },
   { feeling: "Appalled", color: outerColors.disgusted, isSelected: false },
   { feeling: "Revolted", color: outerColors.disgusted, isSelected: false },
   { feeling: "Nauseated", color: outerColors.disgusted, isSelected: false },
   { feeling: "Detestable", color: outerColors.disgusted, isSelected: false },
   { feeling: "Horrified", color: outerColors.disgusted, isSelected: false },
   { feeling: "Hesitant", color: outerColors.disgusted, isSelected: false },
   { feeling: "Embarrassed", color: outerColors.sad, isSelected: false },
   { feeling: "Disappointed", color: outerColors.sad, isSelected: false },
   { feeling: "Inferior", color: outerColors.sad, isSelected: false },
   { feeling: "Empty", color: outerColors.sad, isSelected: false },
   { feeling: "Remorseful", color: outerColors.sad, isSelected: false },
   { feeling: "Ashamed", color: outerColors.sad, isSelected: false },
   { feeling: "Powerless", color: outerColors.sad, isSelected: false },
   { feeling: "Grief", color: outerColors.sad, isSelected: false },
   { feeling: "Fragile", color: outerColors.sad, isSelected: false },
   { feeling: "Victimised", color: outerColors.sad, isSelected: false },
   { feeling: "Abandoned", color: outerColors.sad, isSelected: false },
   { feeling: "Isolated", color: outerColors.sad, isSelected: false },
 ];