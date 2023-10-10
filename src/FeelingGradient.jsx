import './FeelingGradient.css'

function FeelingGradient({ gradient }) {  
  return (
    <div
      className="FeelingGradient"
      style={{
        background: gradient,
      }}
    >
    </div>
  );
}

export default FeelingGradient;
