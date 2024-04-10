import { useEffect } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  let checkedKanji = [];
  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = e.target.id;
    if (checked) {
      checkedKanji = [...checkedKanji, kanjiId];
    } else {
      checkedKanji = checkedKanji.filter((item) => item !== kanjiId);
    }
    setMyKanji(...myKanji, checkedKanji);
  };
  const selectAllKanji = () => {
    let allKanji = [...Array(kanjidb.length).keys()];
    setMyKanji(...myKanji, allKanji);
    for (let i = 0; i < kanjidb.length; i++) {
      console.log(i);
      console.log(document.getElementById(i));
      if (document.getElementById(i)) {
        document.getElementById(i).checked = true;
      }
    }
  };
  return (
    <div>
      <h2>All Kanji Page</h2>
      <button onClick={selectAllKanji}>Select All</button>
      {kanjidb.map((kanji, index) => (
        <p>
          <input
            type="checkbox"
            id={kanji.id}
            onChange={(e) => updateKanji(e)}
          />
          {kanji.id} - {kanji.word}:{kanji.meaning}:{kanji.kanji}
        </p>
      ))}
    </div>
  );
};
