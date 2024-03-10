import { useState } from "react";
import { KanjiContext } from "../KanjiContext.js";
import DashBoard from "./DashBoard.js";
import AllKanji from "./AllKanji.js";
import Quiz from "./Quiz.js";
import Practice from "./Practice.js";

export default Home = () => {
  const [componentPage, setComponentPage] = useState(<DashBoard />);
  const kanjiData = [
    { word: "ichi", meaning: "one" },
    { word: "ni", meaning: "two" },
    { word: "san", meaning: "three" },
    { word: "yon", meaning: "four" },
    { word: "go", meaning: "five" },
    { word: "roku", meaning: "six" },
  ];
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
