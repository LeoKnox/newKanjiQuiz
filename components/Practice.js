import { useState, useEffect } from "react";

export default Practice = ({ kanjiData }) => {
  const [practiceKanji, setPracticeKanji] = useState(kanjiData);
  const [randomSet, setRandomSet] = useState(true);
  useEffect(() => {
    console.log("begin");
  });
  return (
    <div>
      <h2>Practice Kanji</h2>
      <div>
        <button>Previous</button>
        <label>{practiceKanji[0]["word"]}</label>
        <button>Next</button>
      </div>
    </div>
  );
};
