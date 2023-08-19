import React from "react";
import FeatureColor from "./FeatureColor";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";

const BrowseColorGallery = () => {
  const navigate = useNavigate();

  const goToColorGallery = () => {
    navigate("/colorGallery");
  };

  return (
    <section className="about-us">
      <h2>Featured Colors</h2>
      <p>Check out the rest of out color selection in the gallery.</p>
      <Button onClick={goToColorGallery}>See More</Button>
    </section>
  );
};
export default BrowseColorGallery;
