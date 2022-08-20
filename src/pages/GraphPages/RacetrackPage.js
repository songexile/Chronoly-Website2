import React from "react";
import { BarGraph } from "../../components/Charts/BarGraph";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

//Page which displays a graph, could possibly add a if statement and just choose with chart to import
//from charts folder

const RacetrackPage = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="container--maincontent">
          <Sidebar />
          <BarGraph />
        </div>
      </div>
    </div>
  );
};

export default RacetrackPage;
