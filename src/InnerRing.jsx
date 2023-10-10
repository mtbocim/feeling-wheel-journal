
import Feeling from "./Feeling";
import "./InnerRing.css";

const initialAngles = [
  "31deg",
  "90deg",
  "125deg",
  "170deg",
  "235deg",
  "285deg",
  "330deg",
];

function InnerRing({words, update}) {

  function selectFeeling(feeling) {
    update(feeling)
  }

  return (
    <div className="InnerRing">
      {words.map((feeling, index) => (
        <Feeling
          key={feeling.feeling}
          feeling={feeling}
          rotation={initialAngles[index]}
          selectFeeling={selectFeeling}
        />
      ))}
    </div>
  );
}

export default InnerRing;
