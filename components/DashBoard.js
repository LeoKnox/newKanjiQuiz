export default DashBoard = ({ myKanji }) => {
  return (
    <div>
      <h2>Home Page</h2>
      {myKanji ? myKanji.map((kanji) => <p>{kanji.word}</p>) : <p>No Kanji</p>}
    </div>
  );
};
