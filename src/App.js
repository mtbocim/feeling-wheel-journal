import { useEffect, useState } from "react";
import "./App.css";
import Wheel from "./Wheel";
import Entries from "./Entries";
import FeelingGradient from "./FeelingGradient";
import journalContext from "./journalContext";
import Footer from "./Footer";

/**
 * App
 *
 * State
 *
 * Props
 *
 * App -> Wheel
 *     -> Entries
 *     -> FeelingGradient
 */

function App() {
  const [colorCount, setColorCount] = useState({});
  const [entries, setEntries] = useState([]);
  const [entryData, setEntryData] = useState({});

  useEffect(() => {
    setEntries(Object.keys(localStorage));
  }, [setEntries]);

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

  // function calculateGradient() {
  //   let total = 0;
  //   for (let key in colorCount) {
  //     total += colorCount[key];
  //   }
  //   if (total === 0) {
  //     return "white"; // Return white if total is 0
  //   }
  //   if (Object.keys(colorCount).length === 1) {
  //     return Object.keys(colorCount)[0];
  //   }

  //   let gradientStops = [];
  //   let current = 0;

  //   for (let color in colorCount) {
  //     const value = colorCount[color] / total;
  //     if (value > 0) {
  //       current += value;
  //       gradientStops.push(`${color} ${current * 100}%`);
  //     }
  //   }
  //   return `linear-gradient(to right, ${gradientStops.join(", ")})`;
  // }
  
  function updateEntries() {
    setEntries(() => Object.keys(localStorage));
  }

  function loadEntry(entry) {
    const entryData = JSON.parse(localStorage.getItem(entry));

    setEntryData(() => entryData);
    setColorCount(() => entryData.colorCount);
  }
  return (
    <journalContext.Provider value={counter}>
      <div className="App">
        <Wheel
          entryData={entryData}
          updateEntries={updateEntries}
          colorCount={colorCount}
        />
        <Entries entries={entries} loadEntry={loadEntry} />
        {/* <FeelingGradient gradient={calculateGradient()} /> */}
        <Footer/>
      </div>
    </journalContext.Provider>
  );
}

export default App;
