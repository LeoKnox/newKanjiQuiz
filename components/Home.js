import { useContext, useState } from "react";
import { KanjiContext } from "../KanjiContext.js";
import DashBoard from "./DashBoard.js";
import AllKanji from "./AllKanji.js";

export default Home = () => {
  const value = useContext(KanjiContext);
  const [componentPage, setComponentPage] = useState(<DashBoard />);
  return (
    <div>
      <button onClick={() => setComponentPage(<AllKanji />)}>All Kanji</button>
      <button onClick={() => setComponentPage(<DashBoard />)}>Home</button>
      <p>{componentPage}</p>
    </div>
  );
};
