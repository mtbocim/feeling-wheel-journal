
import Feeling from "./Feeling";
import "./InnerRing.css";

const initialAngles = [
  "35deg",
  "96deg",
  "132deg",
  "171deg",
  "235deg",
  "290deg",
  "329deg",
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
