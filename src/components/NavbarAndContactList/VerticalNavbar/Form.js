import React, { useEffect, useState } from "react";
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import Button from "../../Ui/Button.js";
import { useDispatch, useSelector } from "react-redux";
import { contactListActions } from "../../../store/contact-slice.js";
import { addContact } from "../../../store/contact-action.js";

// Form component for adding and updating contacts
const Form = () => {
  const dispatch = useDispatch();

  // Accessing existingContactKey from Redux store
  let existingContactKey = useSelector((state) => state.contact.id);

  // State to manage user data
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    phone: "",
  });

  // Fetching existing contact data when existingContactKey changes
  useEffect(() => {
    const fetchExistingContact = async () => {
      // Fetching existing contact data from the API
      const res = await fetch(
        `https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${existingContactKey}.json`
      );

      // Parsing the response data
      const existingContact = await res.json();

      // Setting user data with existing contact details
      setUserData({
        name: existingContact?.name || "",
        username: existingContact?.username || "",
        phone: existingContact?.phone || "",
      });
    };

    // Calling the fetchExistingContact function
    fetchExistingContact();
  }, [existingContactKey]);

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingContactKey) {
      // Dispatching action to update existing contact
      dispatch(
        contactListActions.updateContact({
          id: existingContactKey,
          name: userData.name,
          username: userData.username,
          phone: userData.phone,
        })
      );
    } else {
      // Dispatching action to add new contact
      dispatch(addContact(userData));
    }

    // Resetting user data after submission
    setUserData({
      name: "",
      username: "",
      phone: "",
    });
  };

  // Handling input changes
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  // Rendering the form
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="add-new-img">
        <img src={addnewImage} alt="Add New" />
      </div>
      <div className="input-text">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={userData.name}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={handleInput}
        />
      </div>
      <div className="input-tel">
        <input
          type="text"
          placeholder="Add Mobile no"
          name="phone"
          value={userData.phone}
          onChange={handleInput}
          required
        />
      </div>
      <Button name="Add" />
    </form>
  );
};

// Exporting Form component
export default Form;
