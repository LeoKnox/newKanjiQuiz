import { useState, useContext } from "react";
import KanjisContext from "../App";
//import AllContext from "./kanji-context.js";
import { KanjiContext } from "../KanjiContext.js";
import { findPos } from "./kanji-context.js";
import Write from "./Write.js";
import Quiz from "./Quiz.js";
import Practice from "./Practice.js";
import Manage from "./Manage.js";

export default Home = (storeKanji, setStoreKanji) => {
  const [currPage, setCurrPage] = useState(<Manage />);
  const { storeKanjis, setStoreKanjis } = useContext(KanjiContext);
  const find = () => {
    findPos(3);
  };
  return (
    <div>
      <p>kanji page</p>
      {currPage}
      <button onClick={() => setCurrPage(<Manage />)}>Home</button>
      <button onClick={() => setCurrPage(<Write />)}>Write</button>
      <button onClick={() => setCurrPage(<Quiz />)}>Quiz</button>
      <button onClick={() => setCurrPage(<Practice />)}>Practice</button>
      <button onClick={findPos}>findPos</button>
    </div>
  );
};
