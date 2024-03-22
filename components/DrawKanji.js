import { useState } from "react";

export default DrawKanji = () => {
  const [stroke, setStroke] = useState([]);
  const [kanji, setKanji] = useState([]);
  const [draw, setDraw] = useState(false);

  const clearPractice = () => {
    setPoints([]);
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
    <>
      {kanji.map((line) => {
        <>
          <p>1</p>
          <polyline
            points="15,15 10,10"
            stroke="black"
            strokeWidth="4"
            fill="none"
          />
          ;
        </>;
      })}
      <polyline points={"1,1 108,99"} stroke="black" strokeWidth="2" />
    </>
  );
  return (
    <>
      <p>{`${JSON.stringify(stroke[1])}`}</p>
      <svg
        id="svg"
        style={{ border: "1px black solid" }}
        witdh="109px"
        height="100px"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {drawLine}
      </svg>
      <p>
        <button onClick={clearPractice}>Clear</button>
      </p>
    </>
  );
};
