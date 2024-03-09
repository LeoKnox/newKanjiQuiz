import { useState, useEffect } from "react";
export default Quiz = ({ kanjiData }) => {
  const [quizes, setQuizes] = useState([]);
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    const shuffled = kanjiData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    let answer = selected[Math.floor(Math.random() * selected.length)];
    setQuizes(selected);
    setAnswer(answer);
  }, []);
  return (
    <div>
      <h2>Kanji Quiz Page</h2>
      <p>answer {answer.word}</p>
      {quizes.map((kanji) => (
        <p>
          {kanji.word}: {kanji.meaning}
        </p>
      ))}
    </div>
  );
};
