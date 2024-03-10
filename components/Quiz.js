import { useState, useEffect } from "react";
export default Quiz = ({ kanjiData }) => {
  const [quizes, setQuizes] = useState([]);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    const shuffled = kanjiData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    let randAnswer = selected[Math.floor(Math.random() * selected.length)];
    setQuizes(selected);
    setAnswer(randAnswer.meaning);
  }, []);
  const confirmAnswer = (selection) => {
    if (selection === answer) {
      alert("correct");
    } else {
      alert("incorrect");
    }
  };
  return (
    <div>
      <h2>Kanji Quiz Page</h2>
      <p>answer {answer}</p>
      {quizes.map((kanji) => (
        <p>
          <button onClick={() => confirmAnswer(kanji.meaning)}>
            {kanji.word}
          </button>
        </p>
      ))}
    </div>
  );
};
