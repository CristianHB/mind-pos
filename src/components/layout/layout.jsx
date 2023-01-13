import React, { useEffect } from "react";
// import { AppSettings } from "./../../config/app-settings.js";
import Login from "../../pages/login-v3";
import { useHistory } from "react-router-dom";

export default function Layout(props) {
  const { children } = props;
  // const { appState } = useContext(AppSettings);
  // const { appState: authUser } = useContext(AppSettings);

  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      history.push("/login");
    } else {
      history.push(window.location.pathname);
    }
  }, []);

  return token ? <>{children}</> : <Login />;
}
