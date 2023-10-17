import { useEffect, useState } from "react";
import "./App.css";
import Wheel from "./Wheel";
import Entries from "./Entries";
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
    // Load entries from local storage when the component mounts
    const wheelEntries = JSON.parse(localStorage.getItem("wheelEntries"));
    if (wheelEntries) {
      setEntries(Object.keys(wheelEntries));
    }
  }, []);

  // Counter function to track color counts
  function counter(feeling) {
    if (feeling === "reset") {
      setColorCount({});
    } else {
      setColorCount((prevColorCount) => {
        const color = feeling.color;
        const isSelected = feeling.isSelected;
        const updatedColorCount = { ...prevColorCount };

        updatedColorCount[color] = (updatedColorCount[color] || 0) + (isSelected ? 1 : -1);

        if (updatedColorCount[color] === 0) {
          delete updatedColorCount[color];
        }

        return { ...updatedColorCount };
      });
    }
  }

  // Update the list of entries
  function updateEntries() {
    const entries = JSON.parse(localStorage.getItem('wheelEntries'))||{}
    setEntries(Object.keys(entries));
  }

  // Load entry data when an entry is selected
  function loadEntry(entry) {
    console.log("entered loadEntry", entry)
    const entriesData = JSON.parse(localStorage.getItem('wheelEntries'));

    setEntryData(entriesData[entry]);
    setColorCount(entriesData[entry].colorCount);
  }

  return (
    <journalContext.Provider value={counter}>
      <div className="App">
        <Wheel entryData={entryData} updateEntries={updateEntries} colorCount={colorCount} />
        <Entries entries={entries} loadEntry={loadEntry} />
        <Footer />
      </div>
    </journalContext.Provider>
  );
}

export default App;
