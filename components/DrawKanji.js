import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG, warr } from "./svgData";
import {
  changeDown,
  changeLeft,
  mobDown,
  charUpdate,
  charLocation,
  deleteDown,
  updateMonster,
  singleMonster,
  change,
  updateCharacter,
  mapData,
  move,
  addChar,
} from "./playData.js";
import DrawMonster from "./DrawMonster.js";
import DrawCharacter from "./DrawCharacter.js";

export default DrawMap = ({
  width = 10,
  height = 10,
  x = 2,
  y = 3,
  sety,
  setx,
}) => {
  let mobs = singleMonster();
  const [dataMove, setDataMove] = useState(addChar());
  const [pagetest, setpagetest] = useState(warriorSVG());
  const [char, setChar] = useState(charLocation());
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
    console.log("draw character");
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = char;
    tempRow[x] = temp;
    let chartemp = charLocation();
    for (let ct in chartemp) {
      mobs[ct] = chartemp[ct];
    }
    modifyTable(mobs);
  }, []);

  const moveMob = (xval = -1) => {
    console.log("move mob");
    let change = updateMonster(0, -1);
    modifyTable(change);
  };

  const modifyTable = (
    objMove = {
      3: [
        {
          oldx: 8,
          newx: 7,
          tile: <DrawMonster background={wallSVG()} />,
        },
      ],
    }
  ) => {
    console.log("modify table");
    let newGrid = [...mapState];
    let newRow = [];
    console.log(objMove);
    for (index in objMove) {
      newRow = [...mapState[index]];
      objMove[parseInt(index)].map((child) => {
        newRow[child.oldx] = floorSVG();
        newRow[child.newx] = child.tile;
        newGrid[index] = newRow;
      });
    }
    setMapState(newGrid);
  };

  const newChange = () => {
    console.log("new change");
    changeDown();
    temp = charLocation();
    modifyTable(change());
    deleteDown();
  };
  const newMove = () => {
    //move();
    //setDataMove({ mapData });
    setDataMove(move());
    console.log("red");
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
        <button onClick={console.log("button")}>right</button>
      </td>
      <td>
        <button onClick={console.log("button")}>left</button>
      </td>
      <td>
        <button onClick={() => newChange()}>down</button>
      </td>
      <td>
        <button onClick={() => setDataMove(addChar(1))}>up</button>
      </td>
      <td>
        <button onClick={() => moveMob()}>mob</button>
      </td>
      {warr}
      {dataMove.map((i) => (
        <>
          <tr>{i}</tr>
        </>
      ))}
    </div>
  );
};
