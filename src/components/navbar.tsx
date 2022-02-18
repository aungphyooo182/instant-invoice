import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
interface NavBarProps {}

interface NavBarState {}

class NavBar extends React.Component<NavBarProps, NavBarState> {
  // state = { :  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 d-flex justify-content-center w-100">
          Instant Invoice Creator
          {/* <FontAwesomeIcon icon={faCof fee} /> */}
        </span>
      </nav>
    );
  }
}

export default NavBar;
