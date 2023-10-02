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

  const angle = (2 * Math.PI) / innerWords.length;

  const radius = 40;
  function calcLeft(i){
    return `${radius * Math.cos(angle * i) + 50}%`
  }

  function calcTop(i){
    return `${radius * Math.sin(angle * i) + 50}%`
  }

  function calcRotation(i){
    return `${360 * (i/innerWords.length)}deg`
  }

  return(
    <div className='InnerRing'>
      {innerWords.map((feeling, index) => (
        <div
          key={feeling.feeling}
          style={{
            position: 'absolute',
            left: '100px',
            top: '100px',
            // marginLeft:'50px',
            rotate: calcRotation(index),
            transformOrigin:'top left'
          }}
        >
          <Feeling feeling={feeling} />
        </div>
      ))}
    </div>
  )
}

export default InnerRing;
