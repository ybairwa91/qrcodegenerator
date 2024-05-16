import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  const [dimension, setDimension] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [word, setWord] = useState("");

  useEffect(
    function () {
      setQrCode(
        `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${dimension}x${dimension}&bgcolor=${color}`
      );
    },
    [color, dimension, text]
  );

  function handleClick() {
    setWord(text);
  }
  return (
    <div className="app">
      <h1>QR CODE GENERATOR</h1>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleClick}>Generate</button>
      </div>
      <div>
        <span>Background color</span>{" "}
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value.substring(1))}
        />
        <span>Dimension</span>
        <input
          type="range"
          value={dimension}
          min={200}
          max={600}
          onChange={(e) => setDimension(e.target.value)}
        />
      </div>
      <div>
        <img src={qrCode} />
        <a href={qrCode} download="QRCode" />
        <button type="button">download</button>
      </div>
    </div>
  );
}

export default App;
