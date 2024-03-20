import { useState } from "react";

export default DrawKanji = () => {
  const [points, setPoints] = useState([]);

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    setPoints([...points, { x: clientX, y: clientY }]);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPoints([...points, { x: clientX, y: clientY }]);
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
        strokeWidth="2"
        fill="none"
        style={{ postion: "relative" }}
      />
      <polyline points={"1,1 108,99"} stroke="black" strokeWidth="2" />
    </>
  );
  return (
    <>
      <p>{`${JSON.stringify(points[5])}`}</p>
      <svg
        viewBox={"0, 0, 109, 100"}
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
