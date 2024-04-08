import { useEffect } from "react";
import { kanjidb } from "./Kanjidb.js";

export default AllKanji = ({ myKanji, setMyKanji }) => {
  let checkedKanji = [];
  const updateKanji = (e) => {
    const checked = e.target.checked;
    const kanjiId = e.target.id;
    if (checked) {
      checkedKanji = [...checkedKanji, kanjiId];
      setMyKanji([...myKanji, kanjiId]);
    } else {
      console.log("did I check the check?");
      checkedKanji.filter((item) => item === kanjiId);
      setMyKanji(myKanji.filter((item) => item.id === kanjiId));
    }
    console.log(checkedKanji);
  };
  //console.log(kanjidb);
  return (
    <div>
      <h2>All Kanji Page</h2>
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
