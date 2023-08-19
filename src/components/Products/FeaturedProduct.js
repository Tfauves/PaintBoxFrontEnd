import React from "react";
import Button from "../Common/Button";

const FeaturedProduct = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {/*place holder for card componenet*/}
        <div className="product-card">
          <img src="paint-product-image.jpg" alt="Paint Product" />
          <h3>High-Quality Interior Paint</h3>
          <p>Available in a variety of colors</p>
          <span className="price">$25.99</span>
          <Button>add to cart</Button>
        </div>
        {/* dynamic render for list of featured product cardd */}
      </div>
    </section>
  );
};
export default FeaturedProduct;
