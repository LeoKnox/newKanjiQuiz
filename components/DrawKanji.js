import { useState } from "react";

export default DrawKanji = () => {
  const [points, setPoints] = useState([]);
  const [draw, setDraw] = useState(false);

  const clearPractice = () => {
    setPoints([]);
  };

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    let offset = document.getElementById("svg").getBoundingClientRect();
    setDraw(true);
    /*
    setPoints([
      ...points,
      { x: clientX - offset.left, y: clientY - offset.top },
    ]);*/
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    let offset = document.getElementById("svg").getBoundingClientRect();
    if (draw) {
      setPoints([
        ...points,
        { x: clientX - offset.left, y: clientY - offset.top },
      ]);
    }
  };

  const handleMouseUp = () => {
    //setPoints([]);
    console.log(`points: ${JSON.stringify(points)}`);
    setDraw(false);
  };

  const drawLine = (
    <>
      <polyline
        points={points.map((point) => `${point.x},${point.y}`).join(" ")}
        stroke="black"
        strokeWidth="4"
        fill="none"
      />
      <polyline points={"1,1 108,99"} stroke="black" strokeWidth="2" />
    </>
  );
  return (
    <>
      <p>{`${JSON.stringify(points[5])}`}</p>
      <svg
        id="svg"
        style={{ border: "1px black solid" }}
        witdh="109px"
        height="100px"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {drawLine}
      </svg>
      <button onClick={clearPractice}>Clear</button>
    </>
  );
};
