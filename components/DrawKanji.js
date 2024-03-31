import { useState, useEffect } from "react";

export default DrawKanji = ({ advance, randomSet }) => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    setKanji([]);
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
    let y = stroke.map((point) => `${point.x},${point.y}`).join(" ");
    let x = "<polyline point= " + y + "/>";
    //x.append({stroke.map((point) => `${point.x},${point.y}`).join(" ")})
    newKanji.push([x]);
    setKanji(newKanji);
    /*
    x = document.getElementById("svg");
    x.add(stroke);*/
    setStroke([]);
    console.log(`kanji: ${JSON.stringify(kanji)}`);
    setDraw(false);
  };

  /*const drawLine = (
    
    <>
      {kanji.forEach((line) => {
        <polyline
          point={line.map((point) => `${point.x},${point.y}`).join(" ")}
        />;
      })}
    </>
  );
  const drawMultiLine = (x) => {
    let tempSvg = document.getElementById("svg");
    console.log("ml");

    <polyline point={x.map((point) => `${point.x},${point.y}`).join(" ")} />;

    
        <polyline points={"1,1 108,99"} stroke="black" strokeWidth="2" />
        {kanji.forEach((line, pos) => {
          <polyline
            point={kanji[pos].map((point) => `${point.x},${point.y}`).join(" ")}
          />;
        })}
        
  };*/
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
        kanji.map((line) =>
        {<Polyline points={line} stroke="black" strokeWidth="2" />})
      </svg>
      <button onClick={advance} name="next">
        Next
      </button>
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
      {kanji.forEach((x) => {
        x.map((y) => {
          <p>{y}</p>;
        });
      })}
    </>
  );
};
