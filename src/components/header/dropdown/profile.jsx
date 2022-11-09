import React, { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { AppSettings } from "../../../config/app-settings";
import { useHistory } from "react-router-dom";

export default function DropdownProfile() {
  const { appState, setAppState } = useContext(AppSettings);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // constructor(props) {
  // 	super(props);

  // 	this.toggle = this.toggle.bind(this);
  // 	this.state = {
  // 		dropdownOpen: false
  // 	};
  // }
  const contextType = useContext(AppSettings);
  const history = useHistory();
  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const logOut = () => {
    setAppState((state) => ({ ...state, authUser: false })); //cambiar estado de logueo
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      className="navbar-item navbar-user dropdown"
      tag="div"
    >
      <DropdownToggle
        tag="a"
        className="navbar-link dropdown-toggle d-flex align-items-center"
      >
        <div className="image image-icon bg-gray-800 text-gray-600">
          <i className="fa fa-user"></i>
        </div>
        <span>
          <span className="d-none d-md-inline">Adam Schwartz</span>
          <b className="caret"></b>
        </span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu dropdown-menu-end" end tag="div">
        <DropdownItem>Edit Profile</DropdownItem>
        <DropdownItem className="d-flex align-items-center">
          Inbox
          <span className="badge bg-danger rounded-pill ms-auto pb-4px">2</span>
        </DropdownItem>
        <DropdownItem>Calendar</DropdownItem>
        <DropdownItem>Setting</DropdownItem>
        <div className="dropdown-divider"></div>
        <DropdownItem onClick={logOut}>Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
