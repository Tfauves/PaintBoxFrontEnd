import React from "react";
import "./Hero.css";
import heroImg from "../../assets/heroImg.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-page">
      <div className="header-wrapper">
        <div className="header-content">
          <h1 className="header">PAINT BOX</h1>
          <p className="sub-header">Order your project needs from anywhere</p>
        </div>
        <img className="header-image" src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
