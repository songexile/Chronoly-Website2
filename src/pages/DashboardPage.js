import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const DashboardPage = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="container--maincontent">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
