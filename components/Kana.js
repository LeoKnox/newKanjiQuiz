import { useState } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const shuffled = hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6);
  const answer = shuffled[Math.floor(Math.random() * shuffled.length)];
  const checkKana = (param) => {
    if (param == answer.kana) {
      alert(param + "&" + answer);
    }
    answer = kana
      ? hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6)
      : katakanaData.sort(() => 0.5 - Math.random()).slice(0, 6);
  };
  return (
    <div>
      <h3>Practice Kana</h3>

      <button onClick={() => setKana(!kana)}>
        {kana ? "kataKana" : "hiragarana"}
      </button>
      <p>{answer.sound}</p>
      {kana ? (
        <p>kata {katakanaData[1].kana}</p>
      ) : (
        <p className="kanaTest">
          {shuffled.map((tile) => (
            <button onClick={() => checkKana(tile.kana)}>
              <label>{tile.kana}</label>
            </button>
          ))}
        </p>
      )}
    </div>
  );
};
