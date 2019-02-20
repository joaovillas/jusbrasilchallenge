import React from "react";

import Charts from "react-google-charts";

const data = [
  ["Skills", "My Skills"],
  ["Python", 10 ],
  ["Javascript", 10],
  ["PHP", 8],
  ["Java", 3], // CSS-style declaration
  ["Learn new Languages", 10 ],
];
const options = {
  title:"Hover the mouse to see the rank ",
  pieHole: 0.1,
  is3D: false,
  slices:{
    0:{color: "#babcb4"},
    1:{color: "#2d301e"},
    2:{color: "#b88262"},
    3:{color: "#9fac5c"},
  }
};

const Chart = () => {
  return (
    <div className="App">
      <Charts
        chartType="BarChart"
        width="100%"
        height="100vh"
        data={data}
        options={options}
      />
    </div>
  );
}

export default Chart;