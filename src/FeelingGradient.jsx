function FeelingGradient({ colors }) {
  console.log("What is numSelected aka colors", colors);

  let total = 0;
  for (let key in colors) {
    total += colors[key];
  }

  function calculateGradient() {
    if (total === 0) {
      return "white"; // Return white if total is 0
    }

    let gradientStops = [];
    let current = 0;

    for (let color in colors) {
      const value = colors[color] / total;
      if (value > 0) {
        current += value;
        gradientStops.push(`${color} ${current * 100}%`);
      }
    }

    return `linear-gradient(to right, ${gradientStops.join(", ")})`;
  }

  return (
    <div
      className="FeelingGradient"
      style={{
        background: calculateGradient(),
      }}
    >
      Feeling Gradient
    </div>
  );
}

export default FeelingGradient;
