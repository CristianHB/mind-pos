import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { AppStateContextProvider } from "./config/app-settings.js";

// css
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-calendar/dist/Calendar.css";
import "react-quill/dist/quill.snow.css";
import "simple-line-icons/css/simple-line-icons.css";
import "flag-icon-css/css/flag-icons.min.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";
import "./scss/react.scss";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap-daterangepicker/daterangepicker.css";

// ========================================

ReactDOM.render(
  <AppStateContextProvider>
    <App />
  </AppStateContextProvider>,
  document.getElementById("root")
);
