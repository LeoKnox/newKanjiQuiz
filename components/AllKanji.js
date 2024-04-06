import { kanjidb } from "./Kanjidb.js";

export default AllKanji = () => {
  const updateKanji = (e) => {
    console.log("update" + e.target.checked);
  };
  //console.log(kanjidb);
  return (
    <div>
      <h2>All Kanji Page</h2>
      {kanjidb.map((kanji, index) => (
        <p>
          <input type="checkbox" onChange={(e) => updateKanji(e)} />
          {index} - {kanji.word}:{kanji.meaning}:{kanji.kanji}
        </p>
      ))}
    </div>
  );
};
