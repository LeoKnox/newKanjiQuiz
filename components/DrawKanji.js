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
        let temp = {
          1: [
            {
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
          ],
        };
        modifyTable(temp);
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
      <>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </>
    );
    tempRow[x] = temp;
    (mobs[1] = [
      {
        oldx: 1,
        newx: 1,
        tile: (
          <>
            <div style={{ position: "absolute", opacity: "60%" }}>
              {floorSVG()}
            </div>
            <div style={{ position: "relative" }}>{warriorSVG()}</div>
          </>
        ),
      },
    ]),
      modifyTable(mobs);
  }, []);

  const moveMob = () => {
    console.log("move mob");
    //updateMonster();
    let t = singleMonster();
    modifyTable(t);
    //setMapState(t);
  };

  const modifyTable = (
    objMove = {
      3: [
        {
          oldx: 8,
          newx: 7,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ],
    }
  ) => {
    let newGrid = [...mapState];
    let newRow = [];
    for (index in objMove) {
      newRow = [...mapState[index]];
      objMove[index].map((child) => {
        newRow[child.oldx] = floorSVG();
        newRow[child.newx] = child.tile;
        newGrid[index] = newRow;
      });
    }
    setMapState(newGrid);
    console.log(Object.keys(objMove));
  };
  const moveCharacter = (direction) => {
    console.log("move character");
    let temp = {};
    if (direction == "right") {
      console.log("Right");
      temp = {
        1: [
          {
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
        ],
      };
    }
    if (direction == "down") {
      console.log("down");
      temp = {
        1: [
          {
            oldx: 1,
            newx: 1,
            tile: <>{floorSVG()}</>,
          },
        ],
        2: [
          {
            oldx: 1,
            newx: 1,
            tile: (
              <>
                <div style={{ position: "absolute", opacity: "60%" }}>
                  {floorSVG()}
                </div>
                <div style={{ position: "relative" }}>{warriorSVG()}</div>
              </>
            ),
          },
        ],
        3: [
          {
            oldx: 8,
            newx: 8,
            tile: <>{floorSVG()}</>,
          },
        ],
      };
      temp[2].push({
        oldx: 8,
        newx: 7,
        tile: <DrawMonster background={floorSVG()} />,
      });
    }
    modifyTable(temp);
  };
  return (
    <div>
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
        <button onClick={() => moveMob()}>mob</button>
      </td>
    </div>
  );
};
