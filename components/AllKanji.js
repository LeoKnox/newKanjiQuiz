import { useEffect, useState } from "react";
//import { kanjidb } from "./Kanjidb.js";
import { kanjidb2 } from "./kanjidb_L2.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  const kanjidb = kanjidb2;
  var checkedKanji = myKanji;

  useEffect(() => {
    for (let i of myKanji) {
      if (document.getElementById(i.id)) {
        document.getElementById(i.id - 1).checked = true;
      }
    }
  }, []);

  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = 1 + parseInt(e.target.id);
    const absId = parseInt(e.target.id);
    let x = [...checkedKanji];
    if (checked) {
      x.push(kanjidb[absId]);
    } else {
      x = x.filter((y) => y.id != kanjiId);
    }
    checkedKanji = x;
    setMyKanji(x);
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
