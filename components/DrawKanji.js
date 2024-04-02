import { useState, useEffect } from "react";

export default DrawKanji = ({ advance, randomSet }) => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);
  const [test, setText] = useState([
    ["29,74 43,74 48,75"],
    ["52, 87 44,88 33,80"],
  ]);

  useEffect(() => {
    setKanji([]);
  }, []);

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
  const testLine = () => {
    console.log("testLine");
    let testData = [];
    kanji.map((x) => {
      testData.push(
        <polyline points={x} stroke="black" strokeWidth="2" fill="none" />
      );
    });

    console.log(testData);
    return testData;
  };

  const drawLine =
    (console.log(`stoke: ${JSON.stringify(stroke)}`),
    (
      <polyline
        point={stroke.map((point) => `${point.x},${point.y}`).join(" ")}
      />
    ));

  return (
    <>
      <p>{`${JSON.stringify(stroke[1])}`}</p>
      <button onClick={advance} name="previous" disabled={randomSet}>
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
        {
          <polyline
            points={stroke.map((point) => `${point.x},${point.y}`).join(" ")}
            strokeWidth="2px"
          />
        }
        {testLine()}
      </svg>
      <button onClick={advance} name="next">
        Next
      </button>
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
    </>
  );
};
