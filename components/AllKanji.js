import { kanjidb } from "./Kanjidb.js";

export default AllKanji = () => {
  const updateKanji = () => {
    console.log("update");
  };
  //console.log(kanjidb);
  return (
    <div>
      <h2>All Kanji Page</h2>
      {kanjidb.map((kanji, index) => (
        <p>
          <input type="checkbox" onChange={() => updateKanji()} />
          {index} - {kanji.word}:{kanji.meaning}:{kanji.kanji}
        </p>
      ))}
    </div>
  );
};
