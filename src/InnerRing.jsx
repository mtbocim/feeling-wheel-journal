import Feeling from './Feeling'



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
  return(
    <div className='InnerRing'>
      {innerWords.map(f => <Feeling feeling={f} key={f.feeling}/>)}
    </div>
  )
}

export default InnerRing;
