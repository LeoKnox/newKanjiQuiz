import { useState, useEffect } from "react";

export default DrawKanji = ({ advance }) => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    console.log("run");
  }, [kanji, stroke]);

  const clearPractice = () => {
    setKanji([]);
  };

  const handleMouseDown = (event) => {
    const { clientX, clientY } = event;
    //let offset = document.getElementById("svg").getBoundingClientRect();
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
    setStroke([]);
    console.log(`kanji: ${JSON.stringify(kanji)}`);
    setDraw(false);
  };

  const drawLine = (
    <>
      {kanji.map((line) => {
        <polyline
          points={line.map((point) => `${point.x},${point.y}`).join(" ")}
          stroke="black"
          strokeWidth="4"
          fill="none"
        />;
      })}
    </>
  );
  const drawMultiLine = () => {
    console.log("ml");
    {
      kanji.map((line) => {
        console.log(JSON.stringify(line));
      });
    }
  };
  return (
    <>
      <p>{`${JSON.stringify(stroke[1])}`}</p>
      <button onClick={advance} name="previous">
        Previous2
      </button>
      <svg
        id="svg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        width="109px"
        hanging="100px"
        style={{ border: "1px solid black" }}
      >
        <polyline points={"1,1 108,99"} stroke="black" strokeWidth="2" />
        {kanji.map((line, pos) => {
          <polyline
            point={kanji[pos].map((point) => `${point.x},${point.y}`).join(" ")}
          />;
        })}
      </svg>
      <button onClick={advance} name="next">
        Next2
      </button>
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
    </>
  );
};
