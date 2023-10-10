import "./Feeling.css";

function Feeling({ feeling, rotation, selectFeeling }) {
  function onFeelingClick() {
    selectFeeling(feeling.feeling);
  }
  
  return (
    <div
      className={`Feeling ${feeling.feeling}`}
      style={{
        fontWeight: feeling.isSelected ? "bold" : "normal",
        fontSize: feeling.isSelected ? "1.5vh" : "1.25vh",
        background: feeling.color,
        rotate: rotation,
      }}
      onClick={onFeelingClick}
    >
      <div className="Feeling-text">{feeling.feeling}</div>
    </div>
  );
}

export default Feeling;
