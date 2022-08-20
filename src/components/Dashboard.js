import React from "react";
import { BarGraph } from "./Charts/BarGraph";
import { ScatterGraph } from "./Charts/ScatterGraph";
import { DoughnutChart } from "./Charts/DoughnutChart";
import { RadChart } from "./Charts/RadChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div class="row">
        <div class="column ">
          <BarGraph />
          <RadChart />
        </div>
        <div class="column ">
          <ScatterGraph />
          <DoughnutChart />
        </div>
      </div>
      <div class="row">
        <div class="column "></div>
        <div class="column "></div>
      </div>
    </div>
  );
};

export default Dashboard;
