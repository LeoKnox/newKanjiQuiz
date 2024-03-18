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

  const renderPolyline = () => {
    /*const context = svg.getContext("2d");

    context.beginPath();
    points.forEach((point) => {
      context.lineTo(point.x, point.y);
    });
    context.stroke();*/
  };
  return (
    <svg
      height="109"
      width="100"
      style={{ border: "1px black solid" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <polyline
        points={points.map((point) => {
          point.x + "," + point.y + " ";
        })}
        style={{ fill: "none", stroke: "green", strokeWidth: "3" }}
      />
    </svg>
  );
};
