import React from "react";

const Color = (props) => {
  const { name, hex, lrv } = props.color;

  return (
    <div>
      <p>color name: {name}</p>
      <p>hex: {hex}</p>
      <p>LRV rating: {lrv}</p>
    </div>
  );
};
export default Color;
