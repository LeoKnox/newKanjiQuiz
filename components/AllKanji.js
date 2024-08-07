import { useEffect, useState } from "react";
import { kanjidb1 } from "./Kanjidb.js";
import { kanjidb2 } from "./kanjidb_L2.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  const testArray = [kanjidb1, kanjidb2];
  const [grades, setGrades] = useState(myKanji);
  const [kanjidb, setKanjidb] = useState([]);
  let checkedKanji = myKanji;

  useEffect(() => {
    let newArray = [];

    for (let i = 0; i < grades.length; i++) {
      newArray = newArray.concat(grades[i]);
    }
    setKanjidb(newArray);
  }, [grades]);
  useEffect(() => {
    let newArray = [];
    if (checkedKanji.find((e) => e.id === 1)) {
      for (let i = 0; i < grades.length; i++) {
        newArray = newArray.concat(grades[i]);
      }
      setKanjidb(newArray);
    }
    for (let i of kanjidb) {
      if (document.getElementById(i.id)) {
        document.getElementById(i.id - 1).checked = true;
      }
    }
  }, [grades]);

  const editGrade = (e) => {
    if (e.target.value === "in") {
      setGrades(grades.concat(testArray[e.target.id]));
      e.target.value = "off";
      document.getElementById(e.target.id).style.backgroundColor = "chocolate";
      let z = checkedKanji.map(
        (ck) =>
          ck.id == e.target.id &&
          (document.getElementById(ck.id).checked = true)
      );
    } else {
      let newArr = grades.filter(function (item) {
        return item.grade != parseInt(e.target.id) + 1;
      });
      setGrades(newArr);
      e.target.value = "in";
      document.getElementById(e.target.id).style.backgroundColor = "tan";
    }
  };
  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = 1 + parseInt(e.target.id);
    const absId = parseInt(e.target.id);
    let temp = [...checkedKanji];
    if (checked) {
      temp.push(kanjidb[absId]);
    } else {
      temp = temop.filter((y) => y.id !== kanjiId);
    }
    checkedKanji = temp;
    setMyKanji(temp);
  };
  const selectAllKanji = () => {
    let allKanji = [...Array(kanjidb.length).keys()];
    let tempKanji = [];
    for (let i = 0; i < allKanji.length; i++) {
      tempKanji.push(kanjidb[i]);
      if (document.getElementById("k" + i)) {
        document.getElementById("k" + i).checked = true;
      }
    }
    checkedKanji = tempKanji;
    setMyKanji(tempKanji);
  };
  const deselectAllKanji = () => {
    setMyKanji([]);
    for (let i = 0; i <= kanjidb.length; i++) {
      if (document.getElementById("k" + i)) {
        document.getElementById("k" + i).checked = false;
      }
    }
  };
  return (
    <div className="allKanji">
      <h2>All Kanji Page</h2>
      <p>
        <button id="0" value="in" onClick={editGrade}>
          Grade 1
        </button>
        <button id="1" value="in" onClick={editGrade}>
          Grade 2
        </button>
      </p>
      <button onClick={selectAllKanji}>Select All</button>
      <button onClick={deselectAllKanji}>Deselect All</button>

      <table>
        {kanjidb.map((kanji) => (
          <tr>
            <td>
              <input
                type="checkbox"
                id={"k" + (kanji.id - 1)}
                checked={checkedKanji.includes(kanji)}
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
