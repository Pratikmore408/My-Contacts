// Importing necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component wrapped with Provider for Redux store connection
root.render(
  <React.StrictMode>
    {/* Providing Redux store to the App component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
