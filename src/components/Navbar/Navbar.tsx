import React, { FC } from "react";
import {
  FaBars,
  FaBox,
  FaWarehouse,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";
import "./Navbar.css";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: FC<NavbarProps> = ({ onMenuToggle }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="/logo.png" alt="Логотип" className="navbar__logo-image" />
        <span className="navbar__brand">MyWarehouse</span>
      </div>
      <ul className="navbar__links">
        <li>
          <FaBox /> Товары
        </li>
        <li>
          <FaWarehouse /> Склады
        </li>
        <li>
          <FaInfoCircle /> О системе
        </li>
        <li>
          <FaUser /> Личная страница
        </li>
      </ul>
      <button
        className="navbar__menu-button"
        onClick={onMenuToggle}
        aria-label="Меню"
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
