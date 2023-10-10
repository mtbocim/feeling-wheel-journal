import "./App.css";
import Wheel from "./Wheel";
import { useState } from "react";
import FeelingGradient from "./FeelingGradient";
import feelingContext from "./feelingContext";

function App() {
  const [colorCount, setColorCount] = useState({});

  function counter(feeling) {
    if (feeling === "reset") {
      setColorCount({});
    } else {
      setColorCount((prevColorCount) => {
        const color = feeling.color;
        const isSelected = feeling.isSelected;
        const updatedColorCount = { ...prevColorCount };

        updatedColorCount[color] =
          (updatedColorCount[color] || 0) + (isSelected ? 1 : -1);

        if (updatedColorCount[color] === 0) {
          delete updatedColorCount[color];
        }

        return { ...updatedColorCount };
      });
    }
  }

  function calculateGradient() {
    let total = 0;
    for (let key in colorCount) {
      total += colorCount[key];
    }
    if (total === 0) {
      return "white"; // Return white if total is 0
    }
    if (Object.keys(colorCount).length === 1) {
      return Object.keys(colorCount)[0];
    }

    let gradientStops = [];
    let current = 0;

    for (let color in colorCount) {
      const value = colorCount[color] / total;
      if (value > 0) {
        current += value;
        gradientStops.push(`${color} ${current * 100}%`);
      }
    }
    return `linear-gradient(to right, ${gradientStops.join(", ")})`;
  }

  return (
    <feelingContext.Provider value={counter}>
      <div className="App">
        <Wheel />
        <FeelingGradient gradient={calculateGradient()} />
      </div>
    </feelingContext.Provider>
  );
}

export default App;
