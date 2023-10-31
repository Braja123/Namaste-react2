import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [changeButton, setChangeButton] = useState("login");
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
          alt="food-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              changeButton === "login"
                ? setChangeButton("logout")
                : setChangeButton("login");
            }}
          >
            {changeButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
