import React from "react";
import {Link} from "react-router-dom";
import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <ul className="footer__navigation footer-nav">
        <li className="footer-nav__item">
          <Link className="footer-nav__link">Корпоративным клиентам</Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link">Клиентам</Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link">Аренда авто</Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link">Каршеринг</Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link">Как продать авто</Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link">Traid-in</Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link">Test draiv</Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
