import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppSettings } from "./../config/app-settings";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// ES6 Modules or TypeScript

import {
  handleSetAppSidebarNone,
  handleSetAppHeaderNone,
  handleSetAppContentClass,
} from "../utils/startApplication";

import axios from "axios";

export default function LoginV3() {
  const { appState, setAppState } = useContext(AppSettings);
  const history = useHistory();
  const { register, handleSubmit } = useForm();
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
  });

  const onSubmit = (event) => {
    console.log(process.env.API_BACK_URL);
    console.log(event);

    const post = { username: event.username, password: event.password };
    console.log(post);

    axios
      .post(process.env.REACT_APP_API_BACK_URL + "/api/auth/signin", {
        username: event.username,
        password: event.password,
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data.accessToken);
        localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("user-data", JSON.stringify(response.data));
        if (token) {
          localStorage.setItem("user-data", JSON.stringify(response.data));
          history.push("/dashboard");
          handleSetAppSidebarNone(false, appState, setAppState);
          handleSetAppHeaderNone(false, appState, setAppState);
          handleSetAppContentClass("", appState, setAppState);
        } else {
          handleSetAppSidebarNone(true, appState, setAppState);
          handleSetAppHeaderNone(true, appState, setAppState);
          handleSetAppContentClass("p-0", appState, setAppState);
        }
      })
      .catch(function (error) {
        switch (error.response.data.message) {
          case "User Not found.":
            Swal.fire({
              title: "Usuario no encontrado.",
              confirmButtonColor: "#00acac",
            });
            break;
          case "Invalid Password!":
            Swal.fire({
              title: "Contrasena invalida",
              confirmButtonColor: "#00acac",
            });
            break;
          default:
            break;
        }
        console.log(error);
      });
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
            {process.env.REACT_APP_API_BACK_URL}
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
          <form onSubmit={handleSubmit(onSubmit)} className="fs-13px">
            <div className="form-floating mb-15px">
              <input
                type="text"
                className="form-control h-45px fs-13px"
                placeholder="Email Address"
                id="emailAddress"
                name="username"
                {...register("username")}
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
                name="password"
                {...register("password")}
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

//background-color: var(--bs-btn-bg);
