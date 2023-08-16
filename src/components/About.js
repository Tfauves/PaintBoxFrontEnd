import React from "react";
import Button from "./Common/Button";

const About = () => {
  const aboutOnClick = () => {
    console.log("go to about expanded");
  };

  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p>
        Learn more about our commitment to quality and customer satisfaction...
      </p>
      <Button onClick={aboutOnClick}>Read More</Button>
    </section>
  );
};
export default About;
