import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import BarPlot from "./components/BarPlot";
import RadarPlot from "./components/RadarPlot";
import BubblePlot from "./components/BubblePlot";
// import BarPlot from "./components/BarPlot";

function App() {
  return (
    <div className="App">
      <p>折れ線グラフ</p>
      <LinePlot />
      <p>円グラフ</p>
      <PiePlot />
      <p>線グラフ</p>
      <BarPlot />
      <p>レーダーチャート</p>
      <RadarPlot />
      <p>バブルチャート</p>
      <BubblePlot />
    </div>
  );
}

export default App;
