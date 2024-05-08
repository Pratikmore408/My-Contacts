import { contactListActions } from "./contact-slice";

// Action creator to add a new contact
export const addContact = (userData) => {
  // Returns a function which dispatches actions asynchronously
  return (dispatch) => {
    // Send a POST request to add new user data
    fetch(
      // URL for adding new user data
      // hhttps://jsonplaceholder.typicode.com/users

      "https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    )
      .then(() => {
        // Fetch updated contact list after adding a new contact
        fetch(
          // URL for fetching updated contact list
          "https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json"
        )
          .then((res) => res.json())
          .then((data) => {
            // Dispatch an action to update the contact list in the store
            dispatch(contactListActions.fetchTotalContacts(data));
          });
      })
      .catch((err) => {
        // Handle errors if any
        console.log(err);
      });
  };
};

// Action creator to delete a contact
export const deleteContact = (id) => {
  return (dispatch) => {
    // Send a DELETE request to remove a contact by ID
    fetch(
      `https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        // Fetch updated contact list after deleting a contact
        fetch(
          "https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json"
        )
          .then((res) => res.json())
          .then((data) => {
            // Dispatch an action to update the contact list in the store
            dispatch(contactListActions.fetchTotalContacts(data));
          });
      })
      .catch((err) => {
        // Handle errors if any
        console.log(err);
      });
  };
};
