import React from "react";
import { useDispatch } from "react-redux";
import { contactListActions } from "../../../store/contact-slice";
import { deleteContact } from "../../../store/contact-action";

// ContactData component for rendering individual contact data
const ContactData = ({ contacts }) => {
  const dispatch = useDispatch(); // Initializing useDispatch hook

  // Handling delete action
  const handleDelete = (id) => {
    dispatch(deleteContact(id)); // Dispatching deleteContact action
  };

  // Handling update action
  const handleUpdate = (id) => {
    dispatch(contactListActions.setExistingContactKey(id)); // Dispatching setExistingContactKey action
  };

  // Rendering the table body with contact data
  return (
    <tbody>
      {contacts.map((contact) => {
        console.log(contact);
        return (
          <tr key={contact.id}>
            <td>
              <div className="profile-img-box">
                <i className="fa-solid fa-user"></i>
              </div>
            </td>
            <td>
              <h2>{contact.name}</h2>
            </td>
            <td>
              <h2>{contact.username}</h2>
            </td>
            <td>
              <h2>{contact.phone}</h2>
            </td>
            <td>
              <div>
                {/* Update button */}
                <i
                  className="fa-solid fa-pen"
                  onClick={() => {
                    handleUpdate(contact.id);
                  }}
                ></i>
                {/* Delete button */}
                <i
                  className="fa-solid fa-trash"
                  onClick={() => {
                    handleDelete(contact.id);
                  }}
                ></i>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

// Exporting ContactData component
export default ContactData;
