import { useEffect } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  let checkedKanji = [];
  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = e.target.id;
    if (checked) {
      checkedKanji = [...checkedKanji, kanjidb[kanjiId]];
    } else {
      checkedKanji = checkedKanji.filter((item) => item !== kanjiId);
    }
    setMyKanji(...myKanji, checkedKanji);
  };
  const selectAllKanji = () => {
    let allKanji = [...Array(kanjidb.length).keys()];
    let tempKanji = [];
    console.log(allKanji);
    console.log("t");
    //for (let i = 0; i <= kanjidb.length; i++) {
    for (let i of allKanji) {
      tempKanji.push(kanjidb[i]);
      console.log(kanjidb[i]);
      if (document.getElementById(i)) {
        document.getElementById(i).checked = true;
      }
    }
    setMyKanji(tempKanji);
    console.log(myKanji);
  };
  const deselectAllKanji = () => {
    let allKanji = [...Array(kanjidb.length + 1).keys()];
    setMyKanji([]);
    for (let i = 0; i <= kanjidb.length; i++) {
      if (document.getElementById(i)) {
        document.getElementById(i).checked = false;
      }
    }
  };
  return (
    <div>
      <h2>All Kanji Page</h2>
      <button onClick={selectAllKanji}>Select All</button>
      <button onClick={deselectAllKanji}>Deselect All</button>
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
