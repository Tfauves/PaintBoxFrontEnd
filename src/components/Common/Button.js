import React, { useState } from "react";

const Button = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type={props.type || "submit"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...styles.button,
        ...props.style,
        transition: "all ease-in-out .5s",
        opacity: hover ? "100%" : "85%",
      }}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? <p>Loading...</p> : props.children}
    </button>
  );
};

const styles = {
  button: {
    border: "none",
    padding: "10px 20px",
    borderRadius: "25px",
    cursor: "pointer",
  },
};

export default Button;
