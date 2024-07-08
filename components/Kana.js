import { useState } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const shuffled = hiraganaData.sort(() => 0.5 - Math.random());
  console.log(shuffled);
  return (
    <div>
      <h3>Practice Kana</h3>
      <button onClick={() => setKana(!kana)}>
        {kana ? "kataKana" : "hiragarana"}
      </button>
      {kana ? (
        <p>kata {katakanaData[1].kana}</p>
      ) : (
        <p>
          hira
          {shuffled.map((tile) => (
            <label>{tile.kana}</label>
          ))}
        </p>
      )}
    </div>
  );
};
