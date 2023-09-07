import React from "react";

const Product = (props) => {
  const { id, name, deparment, price } = props.product;

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
