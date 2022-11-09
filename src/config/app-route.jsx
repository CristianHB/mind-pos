import React from "react";
import Home from "./../pages/Home.js";
import Login from "./../pages/login-v3.js";
import Users from "../pages/users/users.js";
import Layout from "../components/layout/layout.jsx";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    component: () => <Home />,
  },
  {
    path: "/",
    exact: true,
    title: "",
    component: () => <Layout />,
  },
  {
    path: "/login",
    exact: true,
    title: "Login",
    component: () => <Login />,
  },
  {
    path: "/users",
    exact: true,
    title: "Usuarios",
    component: () => <Users />,
  },
];

export default routes;
