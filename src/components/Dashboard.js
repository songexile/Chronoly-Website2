import React from "react";
import Bar from "../img/bar.png";
import Bar2 from "../img/bar2.png";
import Bar3 from "../img/bar3.jpg";
import Pie from "../img/pie.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
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
