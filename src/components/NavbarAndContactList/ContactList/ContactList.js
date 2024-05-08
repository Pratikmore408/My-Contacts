import React, { useEffect, useState } from "react";
import "./ContactList.css";
import ContactData from "./ContactData";

// ContactList component for displaying contacts
const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // Fetching contacts from the API on component mount
  useEffect(() => {
    const getContacts = async () => {
      // Fetching contact data from the API
      const res = await fetch(
        "https://contact-list-13c2b-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json"
      );

      // Parsing the response data
      const data = await res.json();
      // console.log(data);

      // Transforming the data into required format
      const contactData = [];

      for (const id in data) {
        contactData.push({
          id: id,
          name: data[id].name,
          username: data[id].username,
          phone: data[id].phone,
        });
      }

      // Setting the contacts state with the transformed data
      setContacts(contactData);
    };

    // Calling the getContacts function
    getContacts();
  }, [contacts]);

  // Rendering the contact list
  return (
    <div className="contact-list">
      <table>
        <thead>
          <tr>
            <th>
              <p>Profile</p>
            </th>
            <th>
              <p>Name</p>
            </th>
            <th>
              <p>Username</p>
            </th>
            <th>
              <p>Mobile</p>
            </th>
            <th>
              <p>Actions</p>
            </th>
          </tr>
        </thead>
        {/* Rendering ContactData component with contacts data */}
        <ContactData contacts={contacts} />
      </table>
    </div>
  );
};

// Exporting ContactList component
export default ContactList;
