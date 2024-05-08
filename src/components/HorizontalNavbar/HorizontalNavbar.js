import React from "react";
import "./HorizontalNavbar.css";

// HorizontalNavbar component for displaying horizontal navigation bar
const HorizontalNavbar = () => {
  return (
    <div className="horizontal-nav">
      {/* Profile section */}
      <div className="profile">
        <div className="profile-img-box">
          <i className="fa-solid fa-user"></i>
        </div>
        <h2>Pratik More</h2>
      </div>
    </div>
  );
};

// Exporting HorizontalNavbar component
export default HorizontalNavbar;
