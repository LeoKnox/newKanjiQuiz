import { useState, useContext } from "react";
import KanjisContext from "../App";
import AllContext from "./kanji-context.js";
import Write from "./Write.js";
import Quiz from "./Quiz.js";
import Practice from "./Practice.js";
import Manage from "./Manage.js";

export default Home = () => {
  const [currPage, setCurrPage] = useState(<Manage />);
  const kanjis = useContext(AllContext);
  const [kc, setKc] = useState({KanjisContext["props"]["value"]});
  const kd = useContext(KanjisContext);
  console.log(kd);
  return (
    <div>
      <p>kanji page</p>
      <p>{kanjis[0]["kanji"]}</p>
      {currPage}
      <p>{kc[0]["kanji"]}</p>
      <button onClick={() => setCurrPage(<Manage />)}>Home</button>
      <button onClick={() => setCurrPage(<Write />)}>Write</button>
      <button onClick={() => setCurrPage(<Quiz />)}>Quiz</button>
      <button onClick={() => setCurrPage(<Practice />)}>Practice</button>
    </div>
  );
};
