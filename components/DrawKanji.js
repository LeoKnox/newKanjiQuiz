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
    <polyline
      points={points.map((point) => `${point.x},${point.y}`).join(" ")}
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
  );
  return (
    <svg
      viewBox={(0, 0, 109, 100)}
      style={{ border: "1px black solid" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {drawLine}
    </svg>
  );
};
