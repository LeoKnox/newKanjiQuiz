export default DashBoard = ({ myKanji }) => {
  kanjiTable = () => {
    return <p>red</p>;
  };
  return (
    <div>
      <h2>Home Page</h2>
      {myKanji.length <= 0 ? (
        <p>No Kanji</p>
      ) : (
        <div className="dashboardStyle">
          <table>
            <tr>
              {Object.keys(myKanji[0])
                .filter((key) => key !== "id")
                .map((key) => (
                  <th>{key}</th>
                ))}
            </tr>
            {myKanji
              .map((kanji) => (
                <tr>
                  <td>{kanji.id}</td>
                  <td>{kanji.word}</td>
                  <td>{kanji.meaning}</td>
                  <td>{kanji.kanji}</td>
                </tr>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};
