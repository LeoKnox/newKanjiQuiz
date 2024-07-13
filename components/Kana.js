import { useState, useEffect } from "react";
import { hiraganaData, katakanaData } from "./kanaData.js";

export default Kana = () => {
  const [kana, setKana] = useState(false);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [color, setColor] = useState();
  const [shuffled, setShuffled] = useState(
    hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6)
  );
  const [answer, setAnswer] = useState(
    shuffled[Math.floor(Math.random() * shuffled.length)]
  );
  useEffect(() => {
    let newShuffled = [];
    let newAnswer = {};
    if (kana) {
      newShuffled = katakanaData.sort(() => 0.5 - Math.random()).slice(0, 6);
      newAnswer = newShuffled[Math.floor(Math.random() * newShuffled.length)];
      setShuffled(newShuffled);
      setAnswer(newAnswer);
    } else {
      newShuffled = hiraganaData.sort(() => 0.5 - Math.random()).slice(0, 6);
      newAnswer = newShuffled[Math.floor(Math.random() * newShuffled.length)];
      setShuffled(newShuffled);
      setAnswer(newAnswer);
    }
    //alert("effect");
  }, [kana]);
  const changeKana = () => {
    setKana(!kana);
  };
  const pauseKana = () => {
    setTimeout(() => {
      alert("Hello after 3 seconds!");
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  const checkKana = (param) => {
    let newShuffled = [];
    let newAnswer = {};

    setCount(count + 1);
    if (param == answer.kana) {
      setCorrect(correct + 1);
      document.getElementById(answer.kana).style.backgroundColor = "green";
      setTimeout(() => {
        if (kana) {
          newShuffled = katakanaData
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
          newAnswer = newShuffled[Math.floor(Math.random() * shuffled.length)];
          //alert(`${JSON.stringify(newShuffled)} answer ${newAnswer.sound}`);
          setShuffled(newShuffled);
          setAnswer(newAnswer);
        } else {
          newShuffled = hiraganaData
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
          newAnswer = newShuffled[Math.floor(Math.random() * shuffled.length)];
          //alert(`${JSON.stringify(newShuffled)} answer ${newAnswer.sound}`);
          setShuffled(newShuffled);
          setAnswer(newAnswer);
        }
        let reset = document.getElementsByClassName("kanabutton");

        for (let r = 0; r < reset.length; r++) {
          reset.item(r).style.background = "tan";
        }
      }, 3000);
    }
  };
  return (
    <div>
      <h3>Practice Kana</h3>

      <button onClick={changeKana}>{kana ? "kataKana" : "hiragarana"}</button>
      <p>
        {correct} of {count} correct
      </p>
      <p className="kanaText">{answer.sound}</p>
      {kana ? (
        <p className="kanaTest">
          {shuffled.map((tile) => (
            <button
              id={tile.kana}
              className="kanabutton"
              onClick={() => checkKana(tile.kana)}
            >
              <label className="kanaText">{tile.kana}</label>
            </button>
          ))}
        </p>
      ) : (
        <p className="kanaTest">
          {shuffled.map((tile) => (
            <button
              id={tile.kana}
              className="kanabutton"
              onClick={() => checkKana(tile.kana)}
            >
              <label className="kanaText">{tile.kana}</label>
            </button>
          ))}
        </p>
      )}
    </div>
  );
};
