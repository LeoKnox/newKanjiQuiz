import { useState } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);

  return (
    <div>
      <h3>Practice Kana</h3>
      <button onClick={() => setKana(!kana)}>
        {kana ? "kataKana" : "hiragarana"}
      </button>
      {kana ? (
        <p>kata {katakanaData[1].kana}</p>
      ) : (
        <p>hira {hiraganaData[0].kana}</p>
      )}
    </div>
  );
};
