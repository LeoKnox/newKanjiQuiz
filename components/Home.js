import { useContext } from "react";
import { KanjiContext } from "../KanjiContext.js";

export default Home = () => {
  const value = useContext(KanjiContext);
  return <p>kanji for all {value}</p>;
};
