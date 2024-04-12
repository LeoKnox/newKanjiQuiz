export default DashBoard = ({ myKanji }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>{myKanji.map((kanji) => kanji.word)}</p>
    </div>
  );
};
