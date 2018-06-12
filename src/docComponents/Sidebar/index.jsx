import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <aside id="site-sidebar" className="sidebar">
        <nav className="sidebar__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/p/baseline"
                className="nav__link"
                activeClassName="active"
              >
                Baseline
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/p/grid-system"
                className="nav__link"
                activeClassName="active"
              >
                Grid System
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/p/buttons"
                className="nav__link"
                activeClassName="active"
              >
                Buttons
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
