export default DashBoard = ({ myKanji }) => {
  kanjiTable = () => {
    return (
      <p>red</p>
    )
  }
  return (
    <div>
      <h2>Home Page</h2>
      {myKanji.length <= 0 ? (
        <p>No Kanji</p>
      ) : (

        myKanji.map((kanji) => <p>{kanji.word}</p>

        )
      )}
    </div>
  );
};
