export default DashBoard = ({ myKanji }) => {
  return (
    <div>
      <h2>Home Page</h2>
      {myKanji.length <= 0 ? (
        <p>No Kanji</p>
      ) : (
        <div className="dashboardStyle">
          <table className="dashboardTable">
            <tr>
              {Object.keys(myKanji[0])
                .filter((key) => key !== "id")
                .map((key) => (
                  <th>{key}</th>
                ))}
            </tr>
            {myKanji.map((kanji) => (
              <tr>
                <td>{kanji.kanji}</td>
                <td>{kanji.meaning}</td>
                <td>{kanji.onYomi}</td>
                <td>{kanji.kunYomi}</td>
                <td>{kanji.grade}</td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};
