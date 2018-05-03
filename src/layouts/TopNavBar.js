import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { toggleMenu: false };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  handleToggleMenu() {
    this.setState(function(prevState, props) {
      return {
        toggleMenu: !prevState.toggleMenu
      };
    });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          RJ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.handleToggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={
            "collapse navbar-collapse" + (this.state.toggleMenu ? " show" : "")
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <NavItem
              to="/"
              wrapperClassName="nav-item"
              wrapperActiveClassName="active"
              className="nav-link"
              label="Dashboard"
            />
            <NavItem
              to="/home"
              wrapperClassName="nav-item"
              wrapperActiveClassName="active"
              className="nav-link"
              label="Home"
            />
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNavBar;
