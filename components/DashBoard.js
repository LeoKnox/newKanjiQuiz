export default DashBoard = ({ myKanji }) => {
  return (
    <div>
      <h2>Home Page</h2>
      {myKanji.length === 0 ? (
        <p>No Kanji</p>
      ) : (
        myKanji.map((kanji) => <p>{kanji.word}</p>)
      )}
    </div>
  );
};
