import { useState } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const shuffled = hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6);
  const answer = shuffled[Math.floor(Math.random() * shuffled.length)];
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
            <button>
              <label>{tile.kana}</label>
            </button>
          ))}
        </p>
      )}
    </div>
  );
};
