import { useState } from "react";
import { KanjiContext } from "../KanjiContext.js";
import DashBoard from "./DashBoard.js";
import AllKanji from "./AllKanji.js";
import Quiz from "./Quiz.js";
import Practice from "./Practice.js";
import Kana from "./Kana.js";

export default Home = () => {
  const [myKanji, setMyKanji] = useState([]);
  const [componentPage, setComponentPage] = useState(
    <DashBoard myKanji={myKanji} />
  );

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
      <button
        disabled={myKanji.length < 10}
        onClick={() => setComponentPage(<Quiz myKanji={myKanji} />)}
      >
        Quiz
      </button>
      <button onClick={() => setComponentPage(<Practice myKanji={myKanji} />)}>
        Practice
      </button>
      <button onClick={() => setComponentPage(<Kana />)}>Kana</button>
      <p hidden={myKanji.length >= 10}>
        10 Kanji needed for quiz you have {myKanji.length}
      </p>
      <p>{componentPage}</p>
    </div>
  );
};
