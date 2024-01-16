import React from "react";
import "./navBar.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to="/">
              Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/news">News</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
