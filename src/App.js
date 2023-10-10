import "./App.css";
import Wheel from "./Wheel";
import { useState } from "react";
import FeelingGradient from "./FeelingGradient";
import feelingContext from "./feelingContext";

function App() {
  const [colorCount, setColorCount] = useState({});

  function counter(feeling) {
    colorCount[feeling.color] === undefined
      ? colorCount[feeling.color] = 1
      : feeling.isSelected
         ? colorCount[feeling.color]++
         : colorCount[feeling.color]--;
    setColorCount(() => ({ ...colorCount }));
  }

  return (
    <feelingContext.Provider value={counter}>
      <div className="App">
        <Wheel/>
        <FeelingGradient colors={colorCount} />
      </div>
    </feelingContext.Provider>
  );
}

export default App;
