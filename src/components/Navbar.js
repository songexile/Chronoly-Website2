import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav--container">
      <div className="nav ">
        <h2 className="fs-600">CHRONOLY</h2>
        <h2>
          <Link to="/" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </h2>
        <h2 className="no-decoration">
          <Link to="options" style={{ textDecoration: "none" }}>
            Options
          </Link>
        </h2>
        <h2>
          <Link to="profile" style={{ textDecoration: "none" }}>
            Profile
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
