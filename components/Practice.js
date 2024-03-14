import { useState, useEffect } from "react";

export default Practice = ({ kanjiData }) => {
  const [practiceKanji, setPracticeKanji] = useState(kanjiData);
  const [position, setPosition] = useState(0);
  const [randomSet, setRandomSet] = useState(false);
  const [time, setTime] = useState(1000);
  const timer = setTimeout(() => {
    if (randomSet) {
      setPosition(Math.floor(Math.random() * practiceKanji.length));
    } else {
      if (position >= practiceKanji.length - 1) {
        setPosition(0);
      } else {
        setPosition(position + 1);
      }
    }
    return () => clearInterval(timer);
  }, time);
  useEffect(() => {
    return () => clearInterval(timer);
  }, [position, randomSet]);
  const pause = () => {
    timer.pause();
    console.log("pause");
  };
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
    if (e.target.name === "pause") {
      timer.pause();
      return;
    }
    return () => clearInterval(timer);
  };
  return (
    <div>
      <h2>Practice Kanji</h2>
      <p>
        {position + 1} / {practiceKanji.length}
      </p>
      <button onClick={() => setRandomSet(!randomSet)}>
        {randomSet ? "Random" : "Ordered"}
      </button>
      <div>
        <button onClick={advance} name="previous">
          {randomSet ? "" : "Previous"}
        </button>
        <label>| {practiceKanji[position]["kanji"]} |</label>
        <button onClick={advance} name="next">
          Next
        </button>
        <p>
          <button onClick={pause}>Pause</button>
        </p>
        <div>
          <p>draw here</p>
        </div>
      </div>
    </div>
  );
};
