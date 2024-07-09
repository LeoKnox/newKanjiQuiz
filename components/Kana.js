import { useState } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const shuffled = hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 5);
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
        <p className="kanaTest">
          hira
          {shuffled.map((tile) => (
            <label>:{tile.sound}</label>
          ))}
        </p>
      )}
    </div>
  );
};
import { useState } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const shuffled = hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6);
  return (
    <div>
      <h3>Practice Kana</h3>
      <button onClick={() => setKana(!kana)}>
        {kana ? "kataKana" : "hiragarana"}
      </button>
      {kana ? (
        <p>kata {katakanaData[1].kana}</p>
      ) : (
        <p className="kanaTest">
          {shuffled.map((tile) => (
            <button>
              <label>{tile.sound}</label>
            </button>
          ))}
        </p>
      )}
    </div>
  );
};
