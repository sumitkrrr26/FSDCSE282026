import { useState } from "react";
import cat from "../../images/cat.jpg";

export default function ChangeBgColor() {
  const [red, setRed] = useState(228);
  const [green, setGreen] = useState(176);
  const [blue, setBlue] = useState(70);

  const [catHeight, setCatHeight] = useState(180);
  const [catWidth, setCatWidth] = useState(180);
  const [angle, setAngle] = useState(0);

  function setColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  function enhanceHeight() {
    setCatHeight((prev) => prev + 20);
  }

  function enhanceWidth() {
    setCatWidth((prev) => prev + 20);
  }

  function rotateImage() {
    setAngle((prev) => prev + 30);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>ChangeBgColor</h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: "300px",
          height: "300px",
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={cat}
          alt="cat"
          style={{
            width: `${catWidth}px`,
            height: `${catHeight}px`,
            objectFit: "fill",
            transform: `rotate(${angle}deg)`,
          }}
        />
      </div>

      <button onClick={setColor}>Change Background</button>
      <button onClick={enhanceHeight}>Increase Height</button>
      <button onClick={enhanceWidth}>Increase Width</button>
      <button onClick={rotateImage}>Rotate Image</button>

      <p>
        Color code: {red}, {green}, {blue}
      </p>

      <p>
        Width: {catWidth}px | Height: {catHeight}px | Angle: {angle}°
      </p>
    </div>
  );
}