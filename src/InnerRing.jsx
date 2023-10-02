import Feeling from './Feeling';
import './InnerRing.css';

function InnerRing() {
  const innerWords = [
    { feeling: "Happy", color: "orange", isBold: false },
    { feeling: "Surprised", color: "yellow", isBold: false },
    { feeling: "Bad", color: "green", isBold: false },
    { feeling: "Fearful", color: "#0099ff", isBold: false },
    { feeling: "Angry", color: "purple", isBold: false },
    { feeling: "Disgusted", color: "lavender", isBold: false },
    { feeling: "Sad", color: "red", isBold: false },
  ];

  function calcRotation(i){
    return `${360 * (i/innerWords.length)}deg`
  }

  return(
    <div className='InnerRing'>
      {innerWords.map((feeling, index) => (
          <Feeling key={feeling.feeling} feeling={feeling} rotation={calcRotation(index)}/>
      ))}
    </div>
  )
}

export default InnerRing;
