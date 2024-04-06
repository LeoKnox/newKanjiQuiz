import { useState } from "react";
import { KanjiContext } from "../KanjiContext.js";
import DashBoard from "./DashBoard.js";
import AllKanji from "./AllKanji.js";
import Quiz from "./Quiz.js";
import Practice from "./Practice.js";
import kanjidb from "./Kanjidb.js";

export default Home = () => {
  const [componentPage, setComponentPage] = useState(<DashBoard />);
  const kanjiData = [
    { word: "ichi", meaning: "one", kanji: "一" },
    { word: "ni", meaning: "two", kanji: "二" },
    { word: "san", meaning: "three", kanji: "三" },
    { word: "yon", meaning: "four", kanji: "四" },
    { word: "go", meaning: "five", kanji: "五" },
    { word: "roku", meaning: "six", kanji: "六" },
  ];
  console.log(kanjidb);
  return (
    <div>
      <button onClick={() => setComponentPage(<DashBoard />)}>Home</button>
      <button onClick={() => setComponentPage(<AllKanji />)}>All Kanji</button>
      <button onClick={() => setComponentPage(<Quiz kanjiData={kanjiData} />)}>
        Quiz
      </button>
      <button
        onClick={() => setComponentPage(<Practice kanjiData={kanjiData} />)}
      >
        Practice
      </button>
      <p>{componentPage}</p>
    </div>
  );
};
