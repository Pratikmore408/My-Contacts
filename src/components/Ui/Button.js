import React from "react";
import "./Button.css";

// Button component receiving props and rendering a button element
const Button = (props) => {
  return <button type="submit">{props.name}</button>;
};

// Exporting Button component
export default Button;
