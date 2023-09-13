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
      <Section id="section1" backgroundColor="#d7e5fc" textColor="#161d29">
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
      <Section id="section2" backgroundColor="#7b9bd1" textColor="#161d29">
        <FeaturedProduct />
      </Section>
      <Section id="section4" backgroundColor="#4268a8" textColor="#161d29">
        <BrowseColorGallery />
      </Section>
      <Section id="section3" backgroundColor="#c5c7c9" textColor="#161d29">
        <About />
      </Section>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
