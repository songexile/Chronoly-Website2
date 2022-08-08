import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--1">
        <h1>Dashboard</h1>
        <div className="sidebar--children">
          <h2>Racetrack</h2>
          <h2>Cumulative</h2>
          <h2>Relay</h2>
          <h2>Dissociative</h2>
          <h2>Flow</h2>
          <h2>OPS average</h2>
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
