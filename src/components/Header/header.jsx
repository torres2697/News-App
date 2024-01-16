import React from "react";
import NavBar from "../NavBar/navBar";
// import AppRouter from "../AppRouter/appRouter";
import "./header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <Link to="/" className="logo">
            News
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
};
export default Header;
