import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import { updateMonster, singleMonster } from "./playData.js";
import DrawMonster from "./DrawMonster.js";

export default DrawMap = ({
  width = 10,
  height = 10,
  x = 2,
  y = 3,
  sety,
  setx,
}) => {
  let mobs = singleMonster();
  const [mobGroup, setMobGroup] = useState([]);
  const [character, setCharacter] = useState({});
  const [mapState, setMapState] = useState(() => {
    let temp = [];
    let tempRow = [];
    for (let x = 0; x < width + 2; x++) {
      tempRow.push(wallSVG());
    }
    temp.push(tempRow);
    tempRow = [];
    for (let x = 0; x < height; x++) {
      tempRow.push(wallSVG());
      for (let y = 0; y < width; y++) {
        tempRow.push(floorSVG());
      }
      tempRow.push(wallSVG());
      temp.push(tempRow);
      tempRow = [];
    }
    for (let x = 0; x < width + 2; x++) {
      tempRow.push(wallSVG());
    }
    temp.push(tempRow);
    tempRow = [];
    return temp;
  });

  useEffect(() => {
    console.log("ue keydown");
    const onKeyDown = (e) => {
      if (e.key === "w") {
        //moveCharacter("up");
      } else if (e.key === "s") {
        //moveCharacter("down");
      } else if (e.key === "d") {
        let tempChar = {
          1: {
            oldx: 1,
            newx: 2,
            tile: (
              <td>
                <div style={{ position: "absolute", opacity: "60%" }}>
                  {floorSVG()}
                </div>
                <div style={{ position: "relative" }}>{warriorSVG()}</div>
              </td>
            ),
          },
        };
        modifyTable(tempChar);
      } else if (e.key === "a") {
        //moveCharacter("left");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    console.log("use effect");
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    tempRow[x] = temp;
    temp = [...mapState[mobs.y]];
    temp[mobs.x] = <DrawMonster background={floorSVG()} />;
    tempRow[mobs.y] = temp;
    setMapState(tempRow);
  }, [x, y]);

  const drawRow = (modifyRow) => {
    console.log(modifyRow);
    modifyRow[8] = <DrawMonster background={wallSVG()} />;
    return modifyRow;
    /*  = {
      3: { oldx: 8, newx: 7, tile: <DrawMonster background={floorSVG()} /> },
      2: { oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> },
    }, */
  };

  const modifyTable = (
    objMove = {
      3: { oldx: 8, newx: 7, tile: <DrawMonster background={floorSVG()} /> },
    }
  ) => {
    console.log("modify table");
    console.log(objMove);
    let newGrid = [...mapState];
    let newRow = [...mapState[3]];
    for (index in objMove) {
      newRow = [...mapState[index]];
      newRow[objMove[index].oldx] = floorSVG();
      newRow[objMove[index].newx] = objMove[index].tile;
      newGrid[index] = newRow;
    }
    setMapState(newGrid);
  };
  const moveVert = ({ newx }) => {
    console.log(newx);
  };
  moveSide = (newy) => {
    console.log("move sideways");
  };
  const moveCharacter = (e) => {
    console.log("move character");
    let temp = {
      1: {
        oldx: 1,
        newx: 2,
        tile: (
          <td>
            <div style={{ position: "absolute", opacity: "60%" }}>
              {floorSVG()}
            </div>
            <div style={{ position: "relative" }}>{warriorSVG()}</div>
          </td>
        ),
      },
    };
    modifyTable(temp);
  };
  return (
    <div onKeyDown={() => moveCharacter("right")}>
      {mapState.map((row) => (
        <tr>
          {row.map((tile) => (
            <td>{tile}</td>
          ))}
        </tr>
      ))}
      <td>
        <button onClick={() => moveCharacter("right")}>right</button>
      </td>
      <td>
        <button onClick={() => moveCharacter("left")}>left</button>
      </td>
      <td>
        <button onClick={() => moveCharacter("down")}>down</button>
      </td>
      <td>
        <button onClick={() => moveCharacter("up")}>up</button>
      </td>
      <td>
        <button onClick={() => modifyTable()}>mob</button>
      </td>
    </div>
  );
};
