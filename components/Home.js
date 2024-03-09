import { useContext, useState } from "react";
import { KanjiContext } from "../KanjiContext.js";
import DashBoard from "./DashBoard.js";
import AllKanji from "./AllKanji.js";

export default Home = () => {
  const value = useContext(KanjiContext);
  const [componentPage, setComponentPage] = useState(<DashBoard />);
  return (
    <div>
      <button OnClick={() => setComponentPage(<AllKanji />)}>All Kanji</button>
      <p>{componentPage}</p>
    </div>
  );
};
