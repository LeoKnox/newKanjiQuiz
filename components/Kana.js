import { useState } from "react";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const changeKana = () => {
    kana == "hiragana" ? setKana("kataKana") : setKana("hiragarana");
  };

  return (
    <div>
      <h3>Practice Kana</h3>
      <button onClick={() => setKana(!kana)}>
        {kana ? "kataKana" : "hiragarana"}
      </button>
    </div>
  );
};
