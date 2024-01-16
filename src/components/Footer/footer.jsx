import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/">
              News <p>Single Page Application</p>
            </Link>
          </div>
          {/* <span className="footer-content">Дипломный проект</span> */}
          <div className="footer-author">
            Made by<span>Mihail Shabelnik</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
