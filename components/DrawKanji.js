import { useState, useEffect } from "react";

export default DrawKanji = ({ advance, randomSet }) => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);

  const clearPractice = () => {
    setKanji([]);
  };

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    setDraw(true);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    let offset = document.getElementById("svg").getBoundingClientRect();
    if (draw) {
      setStroke([
        ...stroke,
        { x: clientX - offset.left, y: clientY - offset.top },
      ]);
    }
  };

  const handleMouseUp = () => {
    let newKanji = kanji;
    let line = stroke.map((point) => `${point.x},${point.y}`).join(" ");
    newKanji.push([line]);
    setKanji(newKanji);
    setStroke([]);
    console.log(`kanji: ${JSON.stringify(kanji)}`);
    setDraw(false);
  };
  const drawKanji = () => {
    let testData = [];
    kanji.map((x) => {
      testData.push(
        <polyline points={x} stroke="black" strokeWidth="4" fill="none" />
      );
    });
    return testData;
  };

  const drawLine =
    (console.log(`stoke: ${JSON.stringify(stroke)}`),
    (
      <polyline
        points={stroke.map((point) => `${point.x},${point.y}`).join(" ")}
        stroke="black"
        strokeWidth="4"
        fill="none"
      />
    ));

  return (
    <>
      <p>{`${JSON.stringify(stroke[1])}`}</p>
      <button
        className="moveKanji"
        onClick={advance}
        name="previous"
        disabled={randomSet}
      >
        Previous
      </button>
      <svg
        id="svg"
        key="svg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        width="109px"
        hanging="100px"
        style={{ border: "1px solid black" }}
      >
        {drawLine}
        {drawKanji()}
      </svg>
      <button className="moveKanji" onClick={advance} name="next">
        Next
      </button>
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
    </>
  );
};
