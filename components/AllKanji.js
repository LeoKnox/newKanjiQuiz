import { useEffect, useState } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  var checkedKanji = myKanji.map((kanji) => kanji.id);
  useEffect(() => {
    for (let i of checkedKanji) {
      if (document.getElementById(i)) {
        document.getElementById(i).checked = true;
      }
    }
  }, []);
  console.log(`checked kanji ${checkedKanji}`);
  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = e.target.id;
    if (checked) {
      checkedKanji = [...checkedKanji, kanjidb[kanjiId]];
    } else {
      checkedKanji = checkedKanji.filter((item) => item !== kanjiId.id);
      console.log(`checked kanji ${checkedKanji}`);
    }
    setMyKanji(...myKanji, checkedKanji);
  };
  const selectAllKanji = () => {
    let allKanji = [...Array(kanjidb.length).keys()];
    console.log(`all kanji %{json.stringify(allKanji)}`);
    let tempKanji = [];
    for (let i of allKanji) {
      tempKanji.push(kanjidb[i]);
      if (document.getElementById(i)) {
        document.getElementById(i).checked = true;
      }
    }
    setMyKanji(tempKanji);
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
      <p>{checkedKanji}</p>
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
