import React from "react";

const Section = ({
  backgroundColor,
  textColor,
  children,
  id,
  backgroundImage,
}) => {
  const sectionStyle = {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    backgroundImage: `url(${backgroundImage})`,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    color: textColor,
    width: "100%",
    display: "flex",
    flex: "1 0 auto",
    minHeight: "65vh",
  };

  return (
    <section id={id} style={sectionStyle}>
      {children}
    </section>
  );
};

export default Section;
