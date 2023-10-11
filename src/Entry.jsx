function Entry({ entry, loadEntry }) {
  function loadPreviousEntry() {
    console.log(entry);
    loadEntry(entry)
  }

  return (
    <div className="Entry" onClick={loadPreviousEntry}>
      {entry}
    </div>
  );
}

export default Entry;
