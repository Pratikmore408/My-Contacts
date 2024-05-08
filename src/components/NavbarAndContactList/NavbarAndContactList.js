import React from "react";
import ContactList from "./ContactList/ContactList";
import "./NavbarAndContactList.css";
import VerticalNavbar from "./VerticalNavbar/VerticalNavbar";

// NavbarAndContactList component rendering VerticalNavbar and ContactList
const NavbarAndContactList = () => {
  return (
    <div className="navbar-and-list">
      {/* Rendering VerticalNavbar component */}
      <VerticalNavbar />
      {/* Rendering ContactList component */}
      <ContactList />
    </div>
  );
};

// Exporting NavbarAndContactList component
export default NavbarAndContactList;
