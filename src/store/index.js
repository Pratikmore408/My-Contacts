// Importing configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";

// Importing the contact slice reducer
import contactSlice from "./contact-slice";

// Configuring the Redux store
const store = configureStore({
  reducer: {
    contact: contactSlice.reducer, // Adding the contact slice reducer to the store
  },
});

// Exporting the Redux store
export default store;
