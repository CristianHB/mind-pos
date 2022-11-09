import React, { useContext, useState } from "react";
import { AppSettings } from "./../../config/app-settings.js";
import {
  handleSetAppDarkMode,
  handleSetAppSidebarFixed,
  handleSetAppHeaderInverse,
  handleSetAppHeaderFixed,
  handleSetAppSidebarGrid,
  handleSetAppGradientEnabled,
  handleSetAppTheme,
} from "../../utils/startApplication.jsx";

export default function ThemePanel(props) {
  const { appState, setAppState } = useContext(AppSettings);
  const [state, setstate] = useState({
    expand: false,
    theme: "teal",
    darkMode: false,
  });
  const theme = [
    "red",
    "pink",
    "orange",
    "yellow",
    "lime",
    "green",
    "teal",
    "cyan",
    "blue",
    "purple",
    "indigo",
    "dark",
  ];

  const handleDarkMode = (e) => {
    if (e.target.checked) {
      handleSetAppDarkMode(true, appState, setAppState);
    } else {
      handleSetAppDarkMode(false, appState, setAppState);
    }
  };

  const handleHeaderFixed = (e) => {
    if (e.target.checked) {
      handleSetAppHeaderFixed(true, appState, setAppState);
    } else {
      handleSetAppHeaderFixed(false, appState, setAppState);
    }
  };

  const handleSidebarFixed = (e) => {
    if (e.target.checked) {
      handleSetAppSidebarFixed(true, appState, setAppState);
    } else {
      handleSetAppSidebarFixed(false, appState, setAppState);
    }
  };

  const handleHeaderInverse = (e) => {
    if (e.target.checked) {
      handleSetAppHeaderInverse(true, appState, setAppState);
    } else {
      handleSetAppHeaderInverse(false, appState, setAppState);
    }
  };

  const handleSidebarGrid = (e) => {
    if (e.target.checked) {
      handleSetAppSidebarGrid(true, appState, setAppState);
    } else {
      handleSetAppSidebarGrid(false, appState, setAppState);
    }
  };

  const handleGradientEnabled = (e) => {
    if (e.target.checked) {
      handleSetAppGradientEnabled(true, appState, setAppState);
    } else {
      handleSetAppGradientEnabled(false, appState, setAppState);
    }
  };

  const toggleExpand = (e) => {
    e.preventDefault();
    setstate((state) => ({ ...state, expand: !state.expand }));
  };

  const toggleTheme = (e, theme) => {
    e.preventDefault();
    handleSetAppTheme(theme);
    setstate((state) => ({ ...state, theme: theme }));
  };

  return (
    <div className={"theme-panel " + (state.expand ? "active" : "")}>
      <a
        href="#0"
        onClick={(e) => toggleExpand(e)}
        className="theme-collapse-btn"
      >
        <i className="fa fa-cog"></i>
      </a>
      <div
        className="theme-panel-content"
        data-scrollbar="true"
        data-height="100%"
      >
        <h5>App Settings</h5>

        <div className="theme-list">
          {theme.map((theme, i) => (
            <div
              key={i}
              className={
                "theme-list-item " + (state.theme === theme ? "active" : "")
              }
            >
              <a
                href="#0"
                onClick={(e) => toggleTheme(e, theme)}
                className={"theme-list-link bg-" + theme}
              >
                &nbsp;
              </a>
            </div>
          ))}
        </div>

        <div className="theme-panel-divider"></div>

        <div className="row mt-10px">
          <div className="col-8 control-label text-dark fw-bold">
            <div>
              Dark Mode{" "}
              <span
                className="badge bg-primary ms-1 py-2px position-relative"
                style={{ top: "-1px" }}
              >
                NEW
              </span>
            </div>
            <div className="lh-14">
              <small className="text-dark opacity-50">
                Adjust the appearance to reduce glare and give your eyes a
                break.
              </small>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div className="form-check form-switch ms-auto mb-0">
              <input
                type="checkbox"
                className="form-check-input"
                name="app-theme-dark-mode"
                onChange={handleDarkMode}
                id="appThemeDarkMode"
                value="1"
              />
              <label className="form-check-label" htmlFor="appThemeDarkMode">
                &nbsp;
              </label>
            </div>
          </div>
        </div>

        <div className="theme-panel-divider"></div>

        <div className="row mt-10px align-items-center">
          <div className="col-8 control-label text-dark fw-bold">
            Header Fixed
          </div>
          <div className="col-4 d-flex">
            <div className="form-check form-switch ms-auto mb-0">
              <input
                type="checkbox"
                className="form-check-input"
                name="app-header-fixed"
                onChange={handleHeaderFixed}
                id="appHeaderFixed"
                value="1"
                checked={appState.appHeaderFixed}
              />
              <label className="form-check-label" htmlFor="appHeaderFixed">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-10px align-items-center">
          <div className="col-8 control-label text-dark fw-bold">
            Header Inverse
          </div>
          <div className="col-4 d-flex">
            <div className="form-check form-switch ms-auto mb-0">
              <input
                type="checkbox"
                className="form-check-input"
                name="app-header-inverse"
                onChange={handleHeaderInverse}
                id="appHeaderInverse"
                checked={appState.appHeaderInverse}
              />
              <label className="form-check-label" htmlFor="appHeaderInverse">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-10px align-items-center">
          <div className="col-8 control-label text-dark fw-bold">
            Sidebar Fixed
          </div>
          <div className="col-4 d-flex">
            <div className="form-check form-switch ms-auto mb-0">
              <input
                type="checkbox"
                className="form-check-input"
                name="app-sidebar-fixed"
                onChange={handleSidebarFixed}
                id="appSidebarFixed"
                checked={appState.appSidebarFixed}
              />
              <label className="form-check-label" htmlFor="appSidebarFixed">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-10px align-items-center">
          <div className="col-8 control-label text-dark fw-bold">
            Sidebar Grid
          </div>
          <div className="col-4 d-flex">
            <div className="form-check form-switch ms-auto mb-0">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleSidebarGrid}
                name="app-sidebar-grid"
                id="appSidebarGrid"
                checked={appState.appSidebarGrid}
              />
              <label className="form-check-label" htmlFor="appSidebarGrid">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-10px align-items-center">
          <div className="col-md-8 control-label text-dark fw-bold">
            Gradient Enabled
          </div>
          <div className="col-md-4 d-flex">
            <div className="form-check form-switch ms-auto mb-0">
              <input
                type="checkbox"
                className="form-check-input"
                name="app-gradient-enabled"
                onChange={handleGradientEnabled}
                id="appGradientEnabled"
                checked={appState.appGradientEnabled}
              />
              <label className="form-check-label" htmlFor="appGradientEnabled">
                &nbsp;
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
