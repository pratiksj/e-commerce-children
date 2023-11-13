import "./Navbar.css";
import logo from "../assets/logo.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("social skill");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Social skill
          </Link>
          {menu === "social skill" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sensory");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Sensory
          </Link>
          {menu === "sensory" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>login</button>
        </Link>

        <Link to="/cart">
          {" "}
          <FontAwesomeIcon className="logo" icon={faCartShopping} />
        </Link>

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
