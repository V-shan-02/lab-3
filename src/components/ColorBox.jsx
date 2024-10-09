import React, { useState } from "react";
import colors from "../data/data";

const ColorBox = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        margin: "5px",
        cursor: "grab",
      }}
    ></div>
  );
};

export default ColorBox;
