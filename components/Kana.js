import { useState } from "react";

export default Kana = () => {
  const [kana, setKana] = useState("hiragana");
  const changeKana = () => {
    kana == "hiragana" ? setKana("kataKana") : setKana("hiragarana");
  };

  return (
    <div>
      <h3>Practice Kana</h3>
      <button onClick={changeKana}>{kana}</button>
    </div>
  );
};
