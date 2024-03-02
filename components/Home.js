import { useState, useContext } from "react";
import { KanjisContext } from "../App";
import Write from "./Write.js";
import Quiz from "./Quiz.js";
import Practice from "./Practice.js";

export default Home = () => {
  const [currPage, setCurrPage] = useState(<Quiz />);
  //const kanjis = useContext(KanjisContext);
  const page = () => {
    alert("page");
    setCurrPage(<Write />);
  };
  return (
    <div>
      <p>kanji page</p>
      {currPage}
      <button onClick={() => page()}>Write</button>
    </div>
  );
};
