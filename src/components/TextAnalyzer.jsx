import { useEffect, useState } from "react";
import TextStats from "./TextStats";

function TextAnalyzer() {
  const [text, setText] = useState("");

  const characterCount = text.length;

  const wordCount = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  useEffect(() => {
    document.title = `Text Analyzer - ${characterCount} Characters`;
  }, [characterCount]);

  return (
    <section className="analyzer-section">

      <div className="analyzer-heading">
        <span className="eyebrow">REACT COMPONENT</span>

        <h2>Text Analyzer</h2>

        <p>
          Write something below and see the statistics update instantly.
        </p>
      </div>

      <div className="analyzer-box">

        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Start typing your text here..."
        />

        <div className="live-info">
          <span>LIVE ANALYSIS</span>
          <span>{characterCount} characters</span>
        </div>

      </div>

      <div className="preview-box">

        <span>TEXT PREVIEW</span>

        <p>
          {text || "Your entered text will appear here..."}
        </p>

      </div>

      <TextStats
        characters={characterCount}
        words={wordCount}
      />

    </section>
  );
}

export default TextAnalyzer;