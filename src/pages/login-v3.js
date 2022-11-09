import React, { useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AppSettings } from "./../config/app-settings";
import { useHistory } from "react-router-dom";
import {
  handleSetAppSidebarNone,
  handleSetAppHeaderNone,
  handleSetAppContentClass,
} from "../utils/startApplication";

export default function LoginV3() {
  const { appState, setAppState } = useContext(AppSettings);
  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
      handleSetAppSidebarNone(false, appState, setAppState);
      handleSetAppHeaderNone(false, appState, setAppState);
      handleSetAppContentClass("", appState, setAppState);
    } else {
      handleSetAppSidebarNone(true, appState, setAppState);
      handleSetAppHeaderNone(true, appState, setAppState);
      handleSetAppContentClass("p-0", appState, setAppState);
    }
  }, []);

  const handleSubmit = (event) => {
    localStorage.setItem("token", "hola");
    history.push("/dashboard");
    handleSetAppSidebarNone(false, appState, setAppState);
    handleSetAppHeaderNone(false, appState, setAppState);
    handleSetAppContentClass("", appState, setAppState);
    event.preventDefault();
  };

  return (
    <div className="login login-with-news-feed">
      <div className="news-feed">
        <div
          className="news-image"
          style={{
            backgroundImage: "url(/assets/img/login-bg/login-bg-11.jpg)",
          }}
        ></div>
        <div className="news-caption">
          <h4 className="caption-title">
            <b>Color</b> Admin App
          </h4>
          <p>
            Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="login-container">
        <div className="login-header mb-30px">
          <div className="brand">
            <div className="d-flex align-items-center">
              <span className="logo"></span>
              <b>Color</b> Admin
            </div>
            <small>Bootstrap 5 Responsive Admin Template</small>
          </div>
          <div className="icon">
            <i className="fa fa-sign-in-alt"></i>
          </div>
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit} className="fs-13px">
            <div className="form-floating mb-15px">
              <input
                type="text"
                className="form-control h-45px fs-13px"
                placeholder="Email Address"
                id="emailAddress"
              />
              <label
                htmlFor="emailAddress"
                className="d-flex align-items-center fs-13px text-gray-600"
              >
                Email Address
              </label>
            </div>
            <div className="form-floating mb-15px">
              <input
                type="password"
                className="form-control h-45px fs-13px"
                placeholder="Password"
                id="password"
              />
              <label
                htmlFor="password"
                className="d-flex align-items-center fs-13px text-gray-600"
              >
                Password
              </label>
            </div>
            {/* <div className="form-check mb-30px">
              <input
                className="form-check-input"
                type="checkbox"
                value="1"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember Me
              </label>
            </div> */}
            <div className="mb-15px">
              <button
                type="submit"
                className="btn btn-success d-block h-45px w-100 btn-lg fs-14px"
              >
                Sign me in
              </button>
            </div>
            <div className="mb-40px pb-40px text-inverse">
              Not a member yet? Click{" "}
              <Link to="/user/register-v3" className="text-primary">
                here
              </Link>{" "}
              to register.
            </div>
            <hr className="bg-gray-600 opacity-2" />
            <div className="text-gray-600 text-center text-gray-500-darker mb-0">
              &copy; Color Admin All Right Reserved 2021
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
