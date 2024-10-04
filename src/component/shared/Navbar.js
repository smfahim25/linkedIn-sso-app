// Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Add your CSS here
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Your Company</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/pages">Pages</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
      {user ? (
        <div className="navbar-buttons">
          <p>Welcome, {user.name}</p>
          <button className="btn-login" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-buttons">
          <Link to="/signup" className="btn-signup">
            Sign Up
          </Link>
          <Link to="/" className="btn-login">
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
