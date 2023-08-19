import React, { useState } from "react";
import "./Button.css"; // Import a separate CSS file for styling

const Button = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type={props.type || "submit"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`custom-button ${hover ? "hovered" : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? <p>Loading...</p> : props.children}
    </button>
  );
};

export default Button;
