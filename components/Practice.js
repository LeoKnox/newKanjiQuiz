import { useState, useEffect } from "react";

export default Practice = ({ kanjiData }) => {
  const [practiceKanji, setPracticeKanji] = useState(kanjiData);
  const [position, setPosition] = useState(0);
  const [randomSet, setRandomSet] = useState(false);
  const [time, setTime] = useState(3000);
  const timer = setTimeout(() => {
    resume();
  }, time);
  useEffect(() => {
    return () => clearInterval(timer);
  }, [position, randomSet, time]);
  const resume = (e) => {
    if (position >= practiceKanji.length - 1) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };
  const pause = (e) => {
    if (e.target.checked) {
      clearTimeout(timer);
    } else {
      resume();
    }
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
  };
  return (
    <div>
      <h2>Practice Kanji</h2>
      <input type="checkbox" onChange={pause} />
      <label>pause</label>
      <input
        type="radio"
        checked={time === 1000}
        onChange={() => setTime(1000)}
      />
      <label>1s</label>
      <input
        type="radio"
        checked={time === 3000}
        onChange={() => setTime(3000)}
      />
      <label>3s</label>
      <input
        type="radio"
        checked={time === 6000}
        onChange={() => setTime(6000)}
      />
      <label>6s</label>
      <p>
        <progress
          id="progress"
          value={position + 1}
          max={practiceKanji.length}
          style={{ visibility: randomSet ? "hidden" : "visible" }}
        ></progress>
      </p>
      <button onClick={() => setRandomSet(!randomSet)}>
        {randomSet ? "Random" : "Ordered"}
      </button>
      <div>
        <button onClick={advance} name="previous" disabled={randomSet}>
          Previous
        </button>
        <label style={{ fontSize: "5em" }}>
          {practiceKanji[position]["kanji"]}
        </label>
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
