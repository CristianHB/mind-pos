import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppSettings } from "./config/app-settings.js";

import Header from "./components/header/header.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import SidebarRight from "./components/sidebar-right/sidebar-right.jsx";
import TopMenu from "./components/top-menu/top-menu.jsx";
import Content from "./components/content/content.jsx";
import FloatSubMenu from "./components/float-sub-menu/float-sub-menu.jsx";
import ThemePanel from "./components/theme-panel/theme-panel.jsx";
import Layout from "./components/layout/layout.jsx";

import {
  handleSetColor,
  handleSetFont,
  handleSetAppTheme,
  handleSetAppDarkMode,
  handleScroll,
} from "./utils/startApplication.jsx";

export default function App() {
  const { appState, setAppState } = useContext(AppSettings);

  useEffect(() => {
    // console.log("appstater", appState, "setappstater", setAppState);
    handleSetColor(appState, setAppState);
    handleSetFont(appState, setAppState);
    handleSetAppTheme(appState.appTheme);
    if (appState.appDarkMode) {
      handleSetAppDarkMode(true, appState, setAppState);
    }
    window.addEventListener("scroll", () => {
      handleScroll(appState, setAppState);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        handleScroll(appState, setAppState);
      });
  }, []);

  // const componentWillUnmount = () => {
  //   window.removeEventListener("scroll", this.handleScroll);
  // };

  return (
    <Router>
      <Layout>
        <div
          className={
            "app " +
            (appState.appGradientEnabled ? "app-gradient-enabled " : "") +
            (appState.appHeaderNone ? "app-without-header " : "") +
            (appState.appHeaderFixed && !appState.appHeaderNone
              ? "app-header-fixed "
              : "") +
            (appState.appSidebarFixed ? "app-sidebar-fixed " : "") +
            (appState.appSidebarNone ? "app-without-sidebar " : "") +
            (appState.appSidebarEnd ? "app-with-end-sidebar " : "") +
            (appState.appSidebarWide ? "app-with-wide-sidebar " : "") +
            (appState.appSidebarLight ? "app-with-light-sidebar " : "") +
            (appState.appSidebarMinify ? "app-sidebar-minified " : "") +
            (appState.appSidebarMobileToggled
              ? "app-sidebar-mobile-toggled "
              : "") +
            (appState.appTopMenu ? "app-with-top-menu " : "") +
            (appState.appContentFullHeight ? "app-content-full-height " : "") +
            (appState.appSidebarTwo ? "app-with-two-sidebar " : "") +
            (appState.appSidebarEndToggled ? "app-sidebar-end-toggled " : "") +
            (appState.appSidebarEndMobileToggled
              ? "app-sidebar-end-mobile-toggled "
              : "") +
            (appState.hasScroll ? "has-scroll " : "")
          }
        >
          {!appState.appHeaderNone && <Header />}

          {!appState.appSidebarNone && <Sidebar />}
          {appState.appSidebarTwo && <SidebarRight />}
          {appState.appTopMenu && <TopMenu />}
          {!appState.appContentNone && <Content />}
          <FloatSubMenu />
          <ThemePanel />
        </div>
      </Layout>
    </Router>
  );
}
