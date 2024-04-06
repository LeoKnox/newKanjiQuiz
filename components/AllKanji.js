import { kanjidb } from "./Kanjidb.js";

export default AllKanji = () => {
  console.log("red");
  //console.log(kanjidb);
  return (
    <div>
      <h2>All Kanji Page</h2>
      {kanjidb.map((kanji, index) => (
        <p>
          <input type="checkbox" />
          {index} - {kanji.word}:{kanji.meaning}:{kanji.kanji}
        </p>
      ))}
    </div>
  );
};
