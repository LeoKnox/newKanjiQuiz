import { useState, useEffect } from "react";
export default Quiz = ({ kanjiData }) => {
  const [quizes, setQuizes] = useState([]);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    const shuffled = kanjiData.sort(() => 0.5 - Math.random());
    console.log(`shuffled ${JSON.stringify(shuffled)}`);
    let selected = shuffled.slice(0, 3);
    let randAnswer = selected[Math.floor(Math.random() * selected.length)];
    setQuizes(selected);
    setAnswer(randAnswer.meaning);
  }, [answer]);
  const confirmAnswer = (selection) => {
    if (selection === answer) {
      setAnswer("");
    }
  };
  return (
    <div>
      <h2>Kanji Quiz Page</h2>
      <p>answer {answer}</p>
      {quizes.map((kanji) => (
        <p>
          <button onClick={() => confirmAnswer(kanji.meaning)}>
            {kanji.kanji}
          </button>
        </p>
      ))}
    </div>
  );
};
