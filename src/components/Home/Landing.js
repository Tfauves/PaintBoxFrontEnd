import React from "react";
import Hero from "../Hero/Hero";
import Section from "../Common/Section";
import Footer from "../Footer";
import FeaturedProduct from "../Products/FeaturedProduct";
import About from "../About";
import BrowseColorGallery from "../Color/BrowseColorGallery";

const Landing = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Section id="section1" backgroundColor="#1c2c4c" textColor="#4c768d">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Hero />
          {/* <img
            style={{ paddingTop: "10px" }}
            // src={socialLogos}
            alt="Social Logos"
          /> */}
        </div>
      </Section>
      <Section id="section2" backgroundColor="#4c1c2c" textColor="#8d4c76">
        <FeaturedProduct />
      </Section>
      <Section id="section3" backgroundColor="#2c4c1c" textColor="#768d4c">
        <About />
      </Section>
      <Section id="section4" backgroundColor="#1c2c4c" textColor="#4c768d">
        <BrowseColorGallery />
      </Section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
