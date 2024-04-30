import { useState, useEffect } from "react";
export default Quiz = ({ myKanji }) => {
  const [quizes, setQuizes] = useState([]);
  const [answer, setAnswer] = useState("");
  const [showMeaning, setShowMeaning] = useState(false);
  const [correct, setCorrect] = useState(Array(6).fill("black"));
  useEffect(() => {
    const shuffled = myKanji.sort(() => 0.5 - Math.random());
    console.log(`shuffled ${JSON.stringify(shuffled)}`);
    let selected = shuffled.slice(0, 6);
    let randAnswer = selected[Math.floor(Math.random() * selected.length)];
    setQuizes(selected);
    setAnswer(randAnswer);
  }, [answer]);
  const confirmAnswer = (selection, index) => {
    if (selection === answer.meaning) {
      setCorrect(correct.map((value, i) => (i === index ? "green" : value)));
      setShowMeaning(!showMeaning);
      setTimeout(() => {
        setAnswer("correct");
        setCorrect(Array(6).fill("black"));
      }, 2000);
      setShowMeaning(!showMeaning);
    } else {
      setCorrect(correct.map((value, i) => (i === index ? "red" : value)));
    }
  };
  return (
    <div style={{ justifyContent: "center" }}>
      <h2>Kanji Quiz Page</h2>
      <p>answer {showMeaning ? answer.meaning : answer.word}</p>
      <button onClick={() => setShowMeaning(!showMeaning)}>
        {showMeaning ? "Word" : "Meaning"}
      </button>
      <div className="quizLayout">
        {quizes.map((kanji, index) => (
          <div className="quizButton">
            <button
              style={{ borderColor: correct[index] }}
              onClick={() => confirmAnswer(kanji.meaning, index)}
            >
              {kanji.kanji}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
