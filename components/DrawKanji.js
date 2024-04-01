import { useState, useEffect } from "react";

export default DrawKanji = ({ advance, randomSet }) => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);
  const [test, setText] = useState([
    [["29,74 43,74 48,75"]["52, 87 44,88 33,80"]],
  ]);

  useEffect(() => {
    setKanji([]);
  }, []);

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
    let y = stroke.map((point) => `${point.x},${point.y}`).join(" ");
    let x = "<polyline point= " + y + "/>";
    //x.append({stroke.map((point) => `${point.x},${point.y}`).join(" ")})
    newKanji.push([y]);
    setKanji(newKanji);
    /*
    x = document.getElementById("svg");
    x.add(stroke);*/
    setStroke([]);
    console.log(`kanji: ${JSON.stringify(kanji)}`);
    setDraw(false);
  };
  const testLine = () => {
    test.map((line) => {
      //return polyline(points={line} stroke="black" strokeWidth="2");
    });
  };

  const polyLine = () => {
    const polyline = React.createElement("polyline", {
      stroke,
      stroke: "black",
      strokeWidth: 2,
    });
    console.log(`polyline ${JSON.stringify(polyline)}`);
    return polyline;
  };
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
        {kanji.map((line) => {
          <polyline points={line} stroke="black" strokeWidth="2" />;
        })}
        <polyline points={test} stroke="black" strokeWidth="2" />
        {testLine}
      </svg>
      <button onClick={advance} name="next">
        Next
      </button>
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
      {test.forEach((x) => {
        x.map((y) => {
          <p>{y}</p>;
        });
      })}
    </>
  );
};
