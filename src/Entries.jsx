import "./Entries.css";
import Entry from "./Entry";

function Entries({ entries, loadEntry }) {
  entries.sort();
  return (
    <div className="Entries-container">
      {entries.map((entry) => (
        <Entry key={entry} loadEntry={loadEntry} entry={entry} />
      ))}
    </div>
  );
}

export default Entries;
