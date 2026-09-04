
function TextStats({ characters, words }) {
  return (
    <div className="text-stats">

      <div className="stat-card">
        <span>CHARACTERS</span>
        <strong>{characters}</strong>
      </div>

      <div className="stat-card">
        <span>WORDS</span>
        <strong>{words}</strong>
      </div>

    </div>
  );
}

export default TextStats;