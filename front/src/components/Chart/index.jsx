import React from "react";

import Charts from "react-google-charts";

const data = [
  ["Skills", "My Skills", { role: 'style' }],
  ["Python", 10, "#b88262"],
  ["Javascript", 10, "#9fac5c"],
  ["PHP", 8, "#babcb4"],
  ["Java", 2, "#2d301e"], // CSS-style declaration
  ["Learn new Languages", 10, "#898a7c"],
];
const options = {
  title: "Hover the mouse to see the rank ",
  pieHole: 0.1,
  is3D: false,
  isTracked: true
};

const Chart = () => {
  return (
    <div className="App">
      <Charts
        chartType="BarChart"
        width="100%"
        height="50vh"
        data={data}
        options={options}
      />
    </div>
  );
}

export default Chart;