import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">Sreekruthy</h2>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"} end>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "link active" : "link"}>
          Projects
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;