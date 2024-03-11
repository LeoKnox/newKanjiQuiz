import { useState, useEffect } from "react";

export default Practice = ({ kanjiData }) => {
  const [practiceKanji, setPracticeKanji] = useState(kanjiData);
  const [position, setPosition] = useState(0);
  const [randomSet, setRandomSet] = useState(true);
  useEffect(() => {
    console.log("begin");
  });
  const advance = (e) => {
    if (e.target.name === "next") {
      setPosition(position + 1);
    }
  };
  return (
    <div>
      <h2>Practice Kanji</h2>
      <div>
        <button>Previous</button>
        <label>{practiceKanji[position]["word"]}</label>
        <button onClick={advance} name="next">
          Next
        </button>
      </div>
    </div>
  );
};
