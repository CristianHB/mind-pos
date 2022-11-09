import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { AppSettings } from "./../../config/app-settings.js";
import SidebarProfile from "./sidebar-profile.jsx";
import SidebarNav from "./sidebar-nav.jsx";
import {
  toggleAppSidebarMinify,
  toggleAppSidebarMobile,
} from "../../utils/startApplication.jsx";

export default function Sidebar(props) {
  const { appState, setAppState } = useContext(AppSettings);

  return (
    <React.Fragment>
      <div
        id="sidebar"
        className={
          "app-sidebar " +
          (appState.appSidebarTransparent ? "app-sidebar-transparent" : "")
        }
      >
        <PerfectScrollbar
          className="app-sidebar-content h-100"
          options={{ suppressScrollX: true }}
        >
          <div className="menu">
            {!appState.appSidebarSearch && <SidebarProfile />}
          </div>
          <SidebarNav />
          <div className="menu">
            <div className="menu-item d-flex">
              <Link
                to="/"
                className="app-sidebar-minify-btn ms-auto"
                onClick={(e) =>
                  toggleAppSidebarMinify(e, appState, setAppState)
                }
              >
                <i className="fa fa-angle-double-left"></i>
              </Link>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
      <div className="app-sidebar-bg"></div>
      <div className="app-sidebar-mobile-backdrop">
        <Link
          to="/"
          onClick={(e) => toggleAppSidebarMobile(e, appState, setAppState)}
          className="stretched-link"
        ></Link>
      </div>
    </React.Fragment>
  );
}
