// 線グラフ

import React from "react";
// Bar:縦方向 HorizontalBar:横方向
import { Bar, HorizontalBar } from "react-chartjs-2";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo bar plot",
      backgroundColor: "#20b2aa",
      borderColor: "transparent",
      hoverBackgroundColor: "#5f9ea0",
      data: [5, 6, 9, 15, 30, 40, 80],
    },
  ],
};

const barProt: React.FC = () => {
  return (
    <div>
      <Bar data={data} />
      <HorizontalBar data={data} />
    </div>
  );
};

export default barProt;
