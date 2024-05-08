import React, { useEffect } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { contactListActions } from "../../../store/contact-slice";

// Navbar component
const Navbar = () => {
  // Initializing useDispatch hook
  const dispatch = useDispatch();

  // Accessing totalContacts from Redux store
  const totalContacts = useSelector((state) => state.contact.totalContacts);

  // Fetching total contacts from the API on component mount
  useEffect(() => {
    const fetchTotalContacts = async () => {
      // Fetching contact data from the API
      fetch(
        "https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json"
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            // Proceed with processing data
            // console.log(data);
            dispatch(contactListActions.fetchTotalContacts(data));
          } else {
            console.error("No data received from the API");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    // Calling the fetchTotalContacts function
    fetchTotalContacts();
  }, [dispatch]);

  // Rendering Navbar component
  return (
    <ul>
      <li>
        <button className="link">
          <i className="fa-solid fa-address-book"></i>
          <div>
            <h2>All contacts</h2>
            <p>{totalContacts} contacts</p>
          </div>
        </button>
      </li>
    </ul>
  );
};

// Exporting Navbar component
export default Navbar;
