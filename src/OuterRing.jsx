import Feeling from "./Feeling";
import "./OuterRing.css";

function OuterRing({ words, update }) {
  function selectFeeling(feeling) {
    update(feeling);
  }

  function calcRotation(i) {
    return `${360 * (i / words.length) - 2}deg`;
  }

  return (
    <div className="OuterRing">
      {words.map((feeling, index) => (
        <Feeling
          key={`${feeling.feeling}${feeling.color}`}
          feeling={feeling}
          rotation={calcRotation(index)}
          selectFeeling={selectFeeling}
        />
      ))}
    </div>
  );
}

export default OuterRing;
