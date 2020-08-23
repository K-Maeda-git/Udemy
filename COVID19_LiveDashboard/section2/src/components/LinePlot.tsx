// 折れ線グラフ

import React from "react";
import { Line } from "react-chartjs-2";

// グラフに渡す属性などを設定
// 棒グラフ
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Demo line plat",
      backgroundColor: "#008080",
      borderColor: "#7fffd4",
      pointBorderWidth: 5,
      data: [5, 6, 9, 15, 30, 40, 80], // ※要素とlabelsの数が一致すること
    },
  ],
};

const LinePlot: React.FC = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LinePlot;
