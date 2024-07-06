import { useEffect, useState } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  //var checkedKanji = myKanji.map((kanji) => kanji.id - 1);
  var checkedKanji = myKanji;

  useEffect(() => {
    for (let i of checkedKanji) {
      if (document.getElementById(i.id)) {
        document.getElementById(i.id - 1).checked = true;
      }
    }
  }, []);

  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = e.target.id;
    console.log("update");
    console.log(`check ${JSON.stringify(checkedKanji)}`);
    console.log(`my ${JSON.stringify(myKanji)}`);
    let x = [...checkedKanji];
    console.log(`x ${JSON.stringify(x)}`);
    x = x.filter((y) => y.id !== kanjiId);
    //let x = checkedKanji.filter((y) => y["id"].includes(kanjiId));
    console.log(`xx ${JSON.stringify(x)}`);
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
