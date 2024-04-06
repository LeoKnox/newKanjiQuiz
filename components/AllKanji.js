import { useEffect } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  useEffect(() => {
    updateKanji();
  });
  const updateKanji = (e) => {
    const { id, checked } = e.target;

    if (checked) {
      setMyKanji([...myKanji, name]);
    } else {
      setMyKanji(myKanji.filter((item) => item !== name));
    }
  };
  //console.log(kanjidb);
  return (
    <div>
      <h2>All Kanji Page</h2>
      {kanjidb.map((kanji, index) => (
        <p>
          <input
            type="checkbox"
            checked={myKanji.includes(index)}
            id={kanji.id}
            onChange={updateKanji}
          />
          {kanji.id} - {kanji.word}:{kanji.meaning}:{kanji.kanji}
        </p>
      ))}
    </div>
  );
};
