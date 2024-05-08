import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import "./VerticalNavbar.css";

// VerticalNavbar component rendering Navbar and Form components
const VerticalNavbar = () => {
  return (
    <div className="vertical-nav">
      {/* Rendering Navbar component */}
      <Navbar />
      {/* Rendering Form component */}
      <Form />
    </div>
  );
};

// Exporting VerticalNavbar component
export default VerticalNavbar;
