import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav--container">
      <div className="nav">
        <h2 className="fs-600">CHRONOLY</h2>
        <h2>
          <Link to="dash">Dashboard</Link>
        </h2>
        <h2>
          <Link to="options">Options</Link>
        </h2>
        <h2>
          <Link to="profile">Profile</Link>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
