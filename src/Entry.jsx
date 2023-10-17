function Entry({ entry, loadEntry }) {
  function loadPreviousEntry() {
    loadEntry(entry)
  }

  return (
    <div className="Entry" onClick={loadPreviousEntry}>
      {entry}
    </div>
  );
}

export default Entry;
