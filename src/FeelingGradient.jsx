import './FeelingGradient.css'

function FeelingGradient({ gradient }) {  
  console.log("waht is gradient", gradient)

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
