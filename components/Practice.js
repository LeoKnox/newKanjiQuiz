import { useState, useEffect } from "react";
import DrawKanji from "./DrawKanji.js";
import { kanjidb } from "./Kanjidb.js";
// kanji is 80x89 pixels

export default Practice = ({ myKanji }) => {
  console.log(`practice mykanji ${myKanji.length}`);
  console.log(JSON.stringify(myKanji));
  const [practiceKanji, setPracticeKanji] = useState(
    myKanji.length < 1 ? kanjidb : myKanji
  );
  const [position, setPosition] = useState(0);
  const [randomSet, setRandomSet] = useState(false);
  const [time, setTime] = useState(3000);
  const [clean, setClean] = useState(false);
  const timer = setTimeout(() => {
    setClean(!clean);
    resume();
  }, time);
  useEffect(() => {
    console.log("o" + document.getElementById("pauseKanji"));
    return () => clearInterval(timer);

    pause();
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
      <input id="pauseKanji" type="checkbox" onChange={pause} />
      <label>pause</label>

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
      <input
        type="radio"
        checked={time === 9000}
        onChange={() => setTime(9000)}
      />
      <label>9s</label>
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
        <label style={{ fontSize: "5em" }}>
          {practiceKanji[position]["kanji"]}
        </label>
        <div>
          <DrawKanji advance={advance} randomSet={randomSet} clean={clean} />
        </div>
      </div>
    </div>
  );
};
