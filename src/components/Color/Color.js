import React, { useState } from "react";

const Color = (props) => {
  const { id, name, hex, lrv, ralNum } = props.color;
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: hex,
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#303030",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s, box-shadow 0.2s",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered
      ? "0 4px 8px rgba(0, 0, 0, 0.2)"
      : "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>Color name: {name}</p>
      <p>LRV rating: {lrv}</p>
      <p>{ralNum}</p>
    </div>
  );
};

export default Color;
