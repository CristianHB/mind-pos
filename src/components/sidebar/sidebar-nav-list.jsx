import React, { useContext, useState } from "react";
import { Route, Link } from "react-router-dom";
import { AppSettings } from "./../../config/app-settings.js";

import {
  handleAppSidebarOnMouseOver,
  handleAppSidebarOnMouseOut,
} from "../../utils/startApplication.jsx";

export default function SidebarNavList(props) {
  const [state, setstate] = useState({
    active: -1,
    clicked: -1,
  });
  const { appState, setAppState } = useContext(AppSettings);

  const icon = props.data.icon && (
    <div className="menu-icon">
      <i className={props.data.icon}></i>
    </div>
  );
  const img = props.data.img && (
    <div className="menu-icon-img">
      <img src={props.data.img} alt="" />
    </div>
  );
  const caret = props.data.children && !props.data.badge && (
    <div className="menu-caret"></div>
  );
  const label = props.data.label && (
    <span className="menu-label ms-5px">{props.data.label}</span>
  );
  const badge = props.data.badge && (
    <div className="menu-badge">{props.data.badge}</div>
  );
  const highlight = props.data.highlight && (
    <i className="fa fa-paper-plane text-theme"></i>
  );
  const title = props.data.title && (
    <div className="menu-text">
      {props.data.title} {label} {highlight}
    </div>
  );

  const handleExpand = (e, i, match) => {
    e.preventDefault();

    setstate((state) => ({
      active: state.active === i ? -1 : i,
      clicked: 1,
    }));
  };

  return (
    <Route
      path={props.data.path}
      exact={props.data.exact}
      children={({ match }) => (
        <div
          className={
            "menu-item " +
            (match ? "active " : "") +
            (props.active ||
            (props.clicked === -1 && match) ||
            props.data.search
              ? "expand "
              : "closed ") +
            (props.data.children ? "has-sub " : "")
          }
        >
          {props.data.children ? (
            <Link
              to={props.data.path}
              className="menu-link"
              onMouseOver={(e) =>
                handleAppSidebarOnMouseOver(
                  e,
                  props.data,
                  appState,
                  setAppState
                )
              }
              onMouseOut={(e) =>
                handleAppSidebarOnMouseOut(e, appState, setAppState)
              }
              onClick={props.expand}
            >
              {img} {icon} {title}
              {caret} {badge}
            </Link>
          ) : (
            <Link to={props.data.path} className="menu-link">
              {img} {icon} {badge} {title}
              {caret}
            </Link>
          )}
          {props.data.children && (
            <div
              className={
                "menu-submenu " +
                ((props.active ||
                  (props.clicked === -1 && match) ||
                  props.data.search) &&
                !appState.appSidebarMinify
                  ? "d-block "
                  : "d-none")
              }
            >
              {props.data.children &&
                props.data.children.map((submenu, i) => (
                  <SidebarNavList
                    data={submenu}
                    key={i}
                    expand={(e) => {
                      handleExpand(e, i, match);
                    }}
                    active={i === state.active}
                    clicked={state.clicked}
                  />
                ))}
            </div>
          )}
        </div>
      )}
    />
  );
}
