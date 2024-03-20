import { useState } from "react";

export default DrawKanji = () => {
  const [points, setPoints] = useState([]);

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    let offset = document.getElementById("svg").getBoundingClientRect();
    setPoints([
      ...points,
      { x: clientX - offset.left, y: clientY - offset.top },
    ]);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    let offset = document.getElementById("svg").getBoundingClientRect();
    setPoints([
      ...points,
      { x: clientX - offset.left, y: clientY - offset.top },
    ]);
  };

  const handleMouseUp = () => {
    setPoints([]);
    console.log(`points: ${JSON.stringify(points)}`);
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {drawLine}
      </svg>
    </>
  );
};
