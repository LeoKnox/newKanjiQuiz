import { useEffect, useState } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  //var checkedKanji = myKanji.map((kanji) => kanji.id - 1);
  var checkedKanji = myKanji;

  useEffect(() => {
    for (let i of checkedKanji) {
      if (document.getElementById(i)) {
        document.getElementById(i).checked = true;
      }
    }
    console.log(`ffirst checked kanji ${JSON.stringify(myKanji)}`);
  }, [checkedKanji]);

  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = e.target.id;
    let x = myKanji;
    setMyKanji(checkedKanji.filter((y) => y.id == kanjiId));
    alert(JSON.stringify(myKanji));
  };
  const selectAllKanji = () => {
    let allKanji = [...Array(kanjidb.length).keys()];

    let tempKanji = [];
    for (let i of allKanji) {
      tempKanji.push(kanjidb[i]);
      if (document.getElementById(i)) {
        document.getElementById(i).checked = true;
      }
    }
    checkedKanji = tempKanji;
    setMyKanji(tempKanji);
  };
  const deselectAllKanji = () => {
    setMyKanji([]);
    for (let i = 0; i <= kanjidb.length; i++) {
      if (document.getElementById(i)) {
        document.getElementById(i).checked = false;
      }
    }
  };
  return (
    <div className="allKanji">
      <h2>All Kanji Page</h2>
      <button onClick={selectAllKanji}>Select All</button>
      <button onClick={deselectAllKanji}>Deselect All</button>
      <p>
        {checkedKanji.map((a) => (
          <label>{a.id}-</label>
        ))}
      </p>
      <table>
        {kanjidb.map((kanji, index) => (
          <tr>
            <td>
              <input
                type="checkbox"
                id={kanji.id - 1}
                onChange={(e) => updateKanji(e)}
              />
            </td>
            <td>
              {kanji.onYomi}
              <b>:</b>
              {kanji.kunYomi}
            </td>
            <td>{kanji.meaning}</td>
            <td>{kanji.kanji}</td>
            <td>{kanji.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
