import "./Navbar.css";
import logo from "../assets/forth.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("social skill");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/social">
            Social skill
          </Link>
          {menu === "social skill" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sensory");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/sensory">
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
          <FontAwesomeIcon className="cart" icon={faCartShopping} />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
