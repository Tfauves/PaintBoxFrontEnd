import React from "react";

const Color = (props) => {
  const { id, english, hex, lrvCategory } = props.color;

  const cardStyle = {
    backgroundColor: hex,
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#fff",
  };

  return (
    <div style={cardStyle}>
      <p>Color name: {english}</p>
      <p>LRV rating: {lrvCategory}</p>
    </div>
  );
};

export default Color;
