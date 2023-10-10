import Feeling from "./Feeling";
import "./MiddleRing.css";


function MiddleRing({words, update}) {
  
  function selectFeeling(feeling) {
    update(feeling)
  }

  function calcRotation(i) {
    return `${360 * (i / words.length)}deg`;
  }

  return (
    <div className="MiddleRing">
      {words.map((feeling, index) => (
        <Feeling
          key={feeling.feeling}
          feeling={feeling}
          rotation={calcRotation(index)}
          selectFeeling={selectFeeling}
        />
      ))}
    </div>
  );
}

export default MiddleRing;
