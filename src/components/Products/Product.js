import React from "react";
import Button from "../Common/Button";

const Product = (props) => {
  const { id, name, deparment, price, finish, size } = props.product;

  return (
    <div className="product-list">
      <div className="product-card">
        <img src="paint-product-image.jpg" alt="Paint Product" />
        <h3>High-Quality Interior Paint</h3>
        <p>{name}</p>
        <p>{finish}</p>
        <p>Available in a variety of colors</p>
        <span className="price">{price}</span>
        <Button>add to cart</Button>
      </div>
    </div>
  );
};

export default Product;
