import { useState, useEffect } from "react";

export default Practice = ({ kanjiData }) => {
  const [practiceKanji, setPracticeKanji] = useState(kanjiData);
  const [position, setPosition] = useState(0);
  const [randomSet, setRandomSet] = useState(true);
  const [time, setTime] = useState(6000);
  const timer = setInterval(() => {
    if (position >= practiceKanji.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }, time);
  useEffect(() => {
    return () => clearInterval(timer);
  }, [position]);
  const advance = (e) => {
    if (e.target.name === "next") {
      if (position >= practiceKanji.length - 1) {
        setPosition(0);
      } else {
        setPosition(position + 1);
      }
    }
    if (e.target.name === "previous") {
      if (position <= 0) {
        setPosition(practiceKanji.length - 1);
      } else {
        setPosition(position - 1);
      }
    }
    return () => clearInterval(timer);
  };
  return (
    <div>
      <h2>Practice Kanji</h2>
      <p>
        {position + 1} / {practiceKanji.length}
      </p>
      <button>{randomSet ? "Ordered" : "Random"}</button>
      <div>
        <button onClick={advance} name="previous">
          Previous
        </button>
        <label>| {practiceKanji[position]["kanji"]} |</label>
        <button onClick={advance} name="next">
          Next
        </button>
        <div>
          <p>draw here</p>
        </div>
      </div>
    </div>
  );
};
