import { useState, useEffect } from "react";
import FloorMap from "./FloorMap.js";
import GirdMap from "./GridMap.js";

export default Home = () => {
  const [columns, setColumns] = useState(3);
  const [test, setTest] = useState([1, 2, 3, 4, 5, 6]);
  const [floor, setFloor] = useState();
  console.log({ setFloor });

  const gridStyle = {
    color: "blue",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    //gridTemplateRows: `repeat(${columns}, 1fr)`,
  };
  const playersState = [
    { id: 1, gridArea: "4/5", hp: 18, type: "user", token: "赤", name: "Aka" },
    { id: 2, gridArea: "4/4", hp: 18, type: "user", token: "青", name: "Ao" },
    {
      id: 3,
      gridArea: "5/5",
      hp: 18,
      type: "user",
      token: "緑",
      name: "Midori",
    },
    {
      id: 4,
      gridArea: "5/4",
      hp: 18,
      type: "user",
      token: "紫",
      name: "Murasaki",
    },
  ];
  return (
    <div>
      <h3>Home Page</h3>
      {columns ? (
        <GridMap />
      ) : (
        <div className="column" style={gridStyle}>
          {test.map((t) => (
            <div id={t % test.length}>{t}</div>
          ))}
        </div>
      )}
    </div>
  );
};
