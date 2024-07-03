import { useEffect, useState } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  var checkedKanji = myKanji.map((kanji) => kanji.id - 1);
  useEffect(() => {
    for (let i of checkedKanji) {
      if (document.getElementById(i)) {
        document.getElementById(i).checked = true;
      }
    }
  }, []);

  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = e.target.id;
    let newList = myKanji;
    for (let j = 0; j < myKanji; j++) {
      if (myKanji[j] == kanjid) {
        newList.slice(i, 1);
      }
    }
    console.log(`checked kanji ${JSON.stringify(checkedKanji)}`);
    console.log(`${kanjiId} = ${checkedKanji[0]}`);
    //setMyKanji(checkedKanji);
    alert(JSON.stringify(newList));
    setMyKanji(newList);
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
    <div className="allKanji">
      <h2>All Kanji Page</h2>
      <button onClick={selectAllKanji}>Select All</button>
      <button onClick={deselectAllKanji}>Deselect All</button>
      <p>
        {checkedKanji.map((a) => (
          <label>{a}-</label>
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
