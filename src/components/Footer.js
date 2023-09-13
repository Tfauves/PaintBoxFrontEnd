import React from "react";

const Footer = () => {
  const FooterStyle = {
    padding: "30px",
    marginBottom: "-30px",
    background: "#8d8e8f",
  };

  return (
    <h4 style={FooterStyle} className="footer">
      &copy; 2023 Paint Box. All rights reserved.
    </h4>
  );
};
export default Footer;
