import React from "react";
import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--1">
        <h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            Dashboard
          </Link>
        </h1>
        <div className="sidebar--children">
          <h2>
            <Link to="g-racetrack" style={{ textDecoration: "none" }}>
              Racetrack
            </Link>
          </h2>
          <h2>
            <Link to="g-cumulative" style={{ textDecoration: "none" }}>
              Cumulative
            </Link>
          </h2>
          <h2>
            <Link to="g-relay" style={{ textDecoration: "none" }}>
              Relay
            </Link>
          </h2>
          <h2>
            <Link to="g-dissociative" style={{ textDecoration: "none" }}>
              Dissociative
            </Link>
          </h2>
          <h2>
            <Link to="g-flow" style={{ textDecoration: "none" }}>
              Flow
            </Link>
          </h2>
          <h2>
            <Link to="g-ops" style={{ textDecoration: "none" }}>
              OPS average
            </Link>
          </h2>
        </div>
      </div>
      <div className="sidebar--2">
        <h1>Languages</h1>
        <div className="sidebar--children">
          <h2>Python</h2>
          <h2>C++</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
