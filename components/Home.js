import { useState } from "react";
import { KanjiContext } from "../KanjiContext.js";
import DashBoard from "./DashBoard.js";
import AllKanji from "./AllKanji.js";

export default Home = () => {
  const [componentPage, setComponentPage] = useState(<DashBoard />);
  return (
    <div>
      <button onClick={() => setComponentPage(<DashBoard />)}>Home</button>
      <button onClick={() => setComponentPage(<AllKanji />)}>All Kanji</button>
      <p>{componentPage}</p>
    </div>
  );
};
