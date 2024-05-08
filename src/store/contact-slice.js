// Importing createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the contact slice
const initialState = {
  id: "", // ID of the selected contact
  contact: { name: "", username: "", phone: "" }, // Details of the selected contact
  totalContacts: 0, // Total number of contacts
};

// Creating a slice for managing contacts
const contactSlice = createSlice({
  name: "contactList", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Action to set the ID of an existing contact
    setExistingContactKey: (state, action) => {
      state.id = action.payload;
    },
    // Action to update the details of a contact
    updateContact: (state, action) => {
      // Extracting details from the action payload
      const { id, name, username, phone } = action.payload;
      // Sending a PUT request to update the contact details
      fetch(
        `https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({ name, username, phone }),
        }
      ).catch((err) => {
        // Handling errors if any
        console.log(err);
      });
      state.id = ""; // Resetting the selected contact ID
    },
    // Action to update the total number of contacts
    fetchTotalContacts: (state, action) => {
      // Calculating the total number of contacts
      state.totalContacts = Object.keys(action.payload).length;
    },
  },
});

// Exporting actions from the contact slice
export const contactListActions = contactSlice.actions;

// Exporting the contact slice reducer
export default contactSlice;
