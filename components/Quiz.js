import { useState, useEffect } from "react";
export default Quiz = ({ myKanji }) => {
  const [quizes, setQuizes] = useState([]);
  const [answer, setAnswer] = useState("");
  const [border, setBorder] = useState("black");
  const [showMeaning, setShowMeaning] = useState(false);
  useEffect(() => {
    const shuffled = myKanji.sort(() => 0.5 - Math.random());
    console.log(`shuffled ${JSON.stringify(shuffled)}`);
    let selected = shuffled.slice(0, 5);
    let randAnswer = selected[Math.floor(Math.random() * selected.length)];
    setQuizes(selected);
    setAnswer(randAnswer);
  }, [answer]);
  const confirmAnswer = (selection) => {
    if (selection === answer.meaning) {
      setAnswer("correct");
      setBorder("black");
    } else {
      setBorder("red");
    }
  };
  return (
    <div>
      <h2>Kanji Quiz Page</h2>
      <p>answer {showMeaning ? answer.meaning : answer.word}</p>
      <button onClick={() => setShowMeaning(!showMeaning)}>
        {showMeaning ? "Word" : "Meaning"}
      </button>
      {quizes.map((kanji) => (
        <p>
          <button
            style={{ borderColor: border }}
            onClick={() => confirmAnswer(kanji.meaning)}
          >
            {kanji.kanji}
          </button>
        </p>
      ))}
    </div>
  );
};
