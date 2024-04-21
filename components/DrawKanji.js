import { useState, useEffect } from "react";

export default DrawKanji = ({
  guide,
  advance,
  randomSet,
  clean,
  showGuide,
}) => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);
  console.log(`show guide ${showGuide}`);

  useEffect(() => {
    clearPractice();
  }, [clean]);

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
    setDraw(false);
  };
  const drawKanji = () => {
    let testData = [];
    kanji.map((x) => {
      testData.push(
        <polyline
          points={x}
          stroke="black"
          strokeWidth="4"
          fill="none"
          zIndex="50"
        />
      );
    });
    return testData;
  };

  const drawLine = (
    <polyline
      points={stroke.map((point) => `${point.x},${point.y}`).join(" ")}
      stroke="black"
      strokeWidth="4"
      fill="none"
      zIndex="50"
    />
  );

  return (
    <>
      <p>{`${JSON.stringify(stroke[1])}`}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="moveKanji"
          onClick={advance}
          name="previous"
          disabled={randomSet}
          style={{ float: "left" }}
        >
          Previous
        </button>

        <div
          style={{
            position: "absolute",
            width: "80px",
            color: "lightgray",
            fontSize: "5em",
            display: showGuide,
          }}
        >
          {guide}
        </div>
        <svg
          id="svg"
          key="svg"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          width="109px"
          hanging="100px"
          style={{
            border: "1px solid black",
            position: "relative",
            zIndex: "10",
          }}
        >
          {drawLine}
          {drawKanji()}
        </svg>
        <button
          className="moveKanji"
          onClick={advance}
          name="next"
          style={{ float: "right" }}
        >
          Next
        </button>
      </div>
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
    </>
  );
};
