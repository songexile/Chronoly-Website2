import React from "react";
import Bar from "../img/bar.png";
import Bar2 from "../img/bar2.png";
import Bar3 from "../img/bar3.jpg";
import Pie from "../img/pie.png";

import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Chart />
      <div className="dashboard--content">
        {/* Represents one row */}

        <div class="row">
          <div class="column ">
            <img src={Bar} />
          </div>
          <div class="column ">
            {" "}
            <img src={Bar2} />
          </div>
        </div>
        <div class="row">
          <div class="column ">
            {" "}
            <img src={Bar3} />
          </div>
          <div class="column ">
            {" "}
            <img src={Pie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
