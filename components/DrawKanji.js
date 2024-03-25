import { useState, useEffect } from "react";

export default DrawKanji = () => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    console.log("run");
  }, [kanji]);

  const clearPractice = () => {
    setKanji([]);
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
      setStroke([
        ...stroke,
        { x: clientX - offset.left, y: clientY - offset.top },
      ]);
    }
  };

  const handleMouseUp = () => {
    //setPoints([]);
    let newKanji = kanji;
    newKanji.push(stroke);
    setKanji(newKanji);
    console.log(`kanji: ${JSON.stringify(kanji)}`);
    setDraw(false);
  };

  const drawLine = (
    //console.log("red");
    /*<>
      {kanji.map((line) => {
        <polyline
          points={line.map((point) => `${point.x},${point.y}`).join(" ")}
          stroke="black"
          strokeWidth="4"
          fill="none"
        />;
      })}
      <polyline points={"1,1 108,99"} stroke="black" strokeWidth="2" />
    </>*/
    <polyline points={"1,1 108,99"} stroke="black" strokeWidth="2" />
  );
  const drawMultiLine = () => {
    console.log("run");
    drawLine;
  };
  return (
    <>
      <p>{`${JSON.stringify(stroke[1])}`}</p>
      <svg
        id="svg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        width="109px"
        hanging="100px"
        style={{ border: "1px solid black" }}
      >
        {kanji.map((line, pos) => {
          <polyline
            point={line.map((point) => `${point.x},${point.y}`).join(" ")}
          />;
          <rect
            x="10"
            y="10"
            width={stroke.x}
            height={stroke.y}
            stroke="red"
            stroke-width="6"
            fill="blue"
          />;
        })}
      </svg>
      {kanji.map((line) => {
        {
          line.map((point) => (
            <p>
              {point.x}:{point.y}
            </p>
          ));
        }
      })}
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
    </>
  );
};
