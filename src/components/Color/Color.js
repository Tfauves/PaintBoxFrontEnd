import React from "react";

const Color = (props) => {
  const { id, name, hex, lrv, ralNum } = props.color;

  const cardStyle = {
    maxWidth: "50%",
    margin: "30px",
    backgroundColor: hex,
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#303030",
  };

  return (
    <div style={cardStyle}>
      <p>Color name: {name}</p>
      <p>LRV rating: {lrv}</p>
      <p>{ralNum}</p>
    </div>
  );
};

export default Color;
