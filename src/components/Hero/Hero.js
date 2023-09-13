import React from "react";
import "./Hero.css";
import "../Products/Product.css";
import heroImg from "../../assets/heroImg.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../Common/Button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-page">
      <div className="header-wrapper">
        <div className="header-content">
          <h1 className="header">PAINT BOX</h1>
          <p className="sub-header">Order your project needs from anywhere</p>
          <Button>log in</Button>
          <Button>sign up</Button>
        </div>
        <img className="header-image" src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
