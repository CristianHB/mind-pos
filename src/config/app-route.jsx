import React from "react";
import Home from "./../pages/Home.js";
import Login from "./../pages/login-v3.js";
import Users from "../pages/users/users.js";
import Ambient from "../pages/ambient/ambient.js";
import Layout from "../components/layout/layout.jsx";
import Sector from "../pages/sectors/sectors.js";
import InvoiceResolution from "../pages/invoice-resolution/invoiceResolution.js";
import Commands from "../pages/commands/commands.js";
import Warehouse from "../pages/warehouse/warehouse.js";

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
  {
    path: "/ambient",
    exact: true,
    title: "Ambiente",
    component: () => <Ambient />,
  },
  {
    path: "/sector",
    exact: true,
    title: "Sector",
    component: () => <Sector />,
  },
  {
    path: "/invoiceResolution",
    exact: true,
    title: "Invoice Resolution",
    component: () => <InvoiceResolution />,
  },
  {
    path: "/warehouse",
    exact: true,
    title: "warehouse",
    component: () => <Warehouse />,
  },
  {
    path: "/commands/:id",
    exact: true,
    title: "Invoice Resolution",
    component: () => <Commands />,
  },
];

export default routes;
