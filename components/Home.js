import { useState } from "react";
import { KanjiContext } from "../KanjiContext.js";
import DashBoard from "./DashBoard.js";
import AllKanji from "./AllKanji.js";
import Quiz from "./Quiz.js";
import Practice from "./Practice.js";

export default Home = () => {
  const [myKanji, setMyKanji] = useState([]);
  console.log(`a: ${myKanji}`);
  const [componentPage, setComponentPage] = useState(
    <DashBoard myKanji={myKanji} />
  );

  const kanjiData = [
    { word: "ichi", meaning: "one", kanji: "一" },
    { word: "ni", meaning: "two", kanji: "二" },
    { word: "san", meaning: "three", kanji: "三" },
    { word: "yon", meaning: "four", kanji: "四" },
    { word: "go", meaning: "five", kanji: "五" },
    { word: "roku", meaning: "six", kanji: "六" },
  ];
  console.log(myKanji);

  return (
    <div>
      <button onClick={() => setComponentPage(<DashBoard myKanji={myKanji} />)}>
        Home
      </button>
      <button
        onClick={() =>
          setComponentPage(
            <AllKanji myKanji={myKanji} setMyKanji={setMyKanji} />
          )
        }
      >
        All Kanji
      </button>
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
