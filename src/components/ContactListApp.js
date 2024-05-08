// Importing React library and CSS file for ContactListApp component
import React from "react";
import "./ContactListApp.css";

import HorizontalNavbar from "./HorizontalNavbar/HorizontalNavbar";
import NavbarAndContactList from "./NavbarAndContactList/NavbarAndContactList";

// ContactListApp component rendering HorizontalNavbar and NavbarAndContactList
const ContactListApp = () => {
  return (
    <div className="contact-list-app">
      {/* Rendering HorizontalNavbar component */}
      <HorizontalNavbar />
      {/* Rendering NavbarAndContactList component */}
      <NavbarAndContactList />
    </div>
  );
};

// Exporting ContactListApp component
export default ContactListApp;
