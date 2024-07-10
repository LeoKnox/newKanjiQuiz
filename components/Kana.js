import { useState, useEffect } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const [shuffled, setShuffled] = useState(
    hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6)
  );
  const [answer, setAnswer] = useState(
    shuffled[Math.floor(Math.random() * shuffled.length)]
  );
  useEffect(() => {
    if (kana) {
      newShuffled = katakanaData.sort(() => 0.5 - Math.random()).slice(0, 6);
      newAnswer = newShuffled[Math.floor(Math.random() * shuffled.length)];
      setShuffled(newShuffled);
      setAnswer(newAnswer);
    } else {
      newShuffled = hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6);
      newAnswer = newShuffled[Math.floor(Math.random() * shuffled.length)];
      setShuffled(newShuffled);
      setAnswer(newAnswer);
    }
  }, [kana]);
  const changeKana = () => {
    setKana(!kana);
  };
  const checkKana = (param) => {
    let newShuffled = [];
    let newAnswer = {};
    if (param == answer.kana) {
      if (kana) {
        newShuffled = katakanaData.sort(() => 0.5 - Math.random()).slice(0, 6);
        newAnswer = shuffled[Math.floor(Math.random() * shuffled.length)];
        setShuffled(newShuffled);
        setAnswer(newAnswer);
      } else {
        newShuffled = hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6);
        newAnswer = shuffled[Math.floor(Math.random() * shuffled.length)];
        setShuffled(newShuffled);
        setAnswer(newAnswer);
      }
    }
  };
  return (
    <div>
      <h3>Practice Kana</h3>

      <button onClick={changeKana}>{kana ? "kataKana" : "hiragarana"}</button>
      <p className="kanaText">{answer.sound}</p>
      {kana ? (
        <p className="kanaTest">
          {shuffled.map((tile) => (
            <button onClick={() => checkKana(tile.kana)}>
              <label className="kanaText">{tile.kana}</label>
            </button>
          ))}
        </p>
      ) : (
        <p className="kanaTest">
          {shuffled.map((tile) => (
            <button onClick={() => checkKana(tile.kana)}>
              <label className="kanaText">{tile.kana}</label>
            </button>
          ))}
        </p>
      )}
    </div>
  );
};
