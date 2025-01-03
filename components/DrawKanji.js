import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import DrawMonster from "./DrawMonster.js";

let playData = {
  character: { charId: 1, x: 1, y: 1 },
  /*monster: [{ icon: "demon", x: 8, y: 3 }],*/
  monster: {
    3: [{ oldx: 8, newx: 7, tile: <DrawMonster background={floorSVG()} /> }],
  },
};
let mobData = {
  3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};

export const updateMonster = (direction = "up") => {
  let temp = {};
  if (direction === "left") {
    mobData = {
      3: [
        {
          oldx: mobData[3][0].newx,
          newx: mobData[3][0].newx - 1,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ],
    };
  }
  if (direction === "up") {
    let mobKey = Object.keys(mobData);
    mobKey = mobKey[1];
    console.log("up");
    console.log(mobKey);
    tempData = {
      2: [
        {
          oldx: mobData[3][0].newx,
          newx: mobData[3][0].newx,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ],
      mobKey: [
        {
          oldx: mobData[3][0].newx,
          newx: mobData[3][0].newx,
          tile: floorSVG(),
        },
      ],
    };
    console.log(mobKey);
    mobData = tempData;
  }
};

export const singleMonster = () => {
  return mobData;
};
