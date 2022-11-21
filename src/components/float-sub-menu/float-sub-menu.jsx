import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";
import FloatSubMenuList from "./float-sub-menu-list.jsx";
import {
  handleAppSidebarFloatSubMenuOnMouseOver,
  handleAppSidebarFloatSubMenuOnMouseOut,
  handleAppSidebarFloatSubMenuClick,
} from "../../utils/startApplication.jsx";

export default function FloatSubMenu() {
  const { appState, setAppState } = useContext(AppSettings);

  const [state, setstate] = useState({
    active: -1,
    clicked: -1,
  });

  const handleExpand = (e, i, match) => {
    e.preventDefault();

    if (state.clicked === -1 && match) {
      setstate((state) => ({
        active: -1,
        clicked: 1,
      }));
    } else {
      setstate((state) => ({
        active: state.active === i ? -1 : i,
        clicked: 1,
      }));
    }
    setTimeout(
      () => handleAppSidebarFloatSubMenuClick(appState, setAppState),
      0
    );
  };

  return (
    <>
      <div
        id="app-sidebar-float-submenu"
        onMouseOver={handleAppSidebarFloatSubMenuOnMouseOver}
        onMouseOut={() => {
          handleAppSidebarFloatSubMenuOnMouseOut(appState, setAppState);
        }}
        className={
          "app-sidebar-float-submenu-container " +
          (appState.appSidebarFloatSubMenuActive ? "d-block" : "d-none")
        }
        style={{
          left: appState.appSidebarFloatSubMenuLeft,
          top: appState.appSidebarFloatSubMenuTop,
          bottom: appState.appSidebarFloatSubMenuBottom,
        }}
      >
        <div
          className="app-sidebar-float-submenu-arrow"
          style={{
            top: appState.appSidebarFloatSubMenuArrowTop,
            bottom: appState.appSidebarFloatSubMenuArrowBottom,
          }}
        ></div>
        <div
          className="app-sidebar-float-submenu-line"
          style={{
            top: appState.appSidebarFloatSubMenuLineTop,
            bottom: appState.appSidebarFloatSubMenuLineBottom,
          }}
        ></div>
        <div className="app-sidebar-float-submenu">
          {appState.appSidebarFloatSubMenu.children &&
            appState.appSidebarFloatSubMenu.children.map((menu, i) => (
              <Route
                path={menu.path}
                exact={menu.exact}
                key={i}
                children={({ match }) => (
                  <FloatSubMenuList
                    data={menu}
                    key={i}
                    expand={(e) => {
                      handleExpand(e, i, match);
                    }}
                    active={i === state.active}
                    clicked={state.clicked}
                  />
                )}
              />
            ))}
        </div>
      </div>
    </>
  );
}
