import React from "react";
import ColorBox from "./ColorBox";
import colors from "../data/data";

const ColorBoxesContainer = () => {
  const generateRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const createRowOfBoxes = () => {
    const row = [];
    for (let i = 0; i < 5; i++) {
      row.push(<ColorBox key={i} initialColor={generateRandomColor()} />);
    }
    return row;
  };

  return (
    <div className="colorbox">
      {[...Array(5)].map((_, rowIndex) => (
        <div className="boxes">{createRowOfBoxes()}</div>
      ))}
    </div>
  );
};

export default ColorBoxesContainer;
