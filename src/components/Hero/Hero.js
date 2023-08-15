import React from "react";
import "./Hero.css";
import Button from "../Common/Button";
import heroImg from "../../assets/heroImg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const aboutOnClick = () => {
    navigate("/about");
  };

  return (
    <div className="hero-page">
      <div className="header-wrapper">
        <div className="header-content">
          <h1 className="header">PAINT BOX</h1>
          <p className="sub-header">Order your project needs from anywhere</p>
        </div>
        <img className="header-image" src={heroImg} alt="hero-img" />
      </div>

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

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Learn more about our commitment to quality and customer
          satisfaction...
        </p>
        <Button onClick={aboutOnClick}>Read More</Button>
      </section>

      <div>
        <footer className="footer">
          <p>&copy; 2023 Paint Box. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Hero;
