import { useState } from "react";
import "./App.css";
import CurvedLineChart from "./Components/CurvedLineChart/CurvedLineChart";
import LineChart from "./Components/LineChart/LineChart";

function App() {
  const [data, setData] = useState([10, 20, 35, 55, 60,10]);
  return (
    <div className="App">
      <LineChart />
      <CurvedLineChart data={data} />
    </div>
  );
}

export default App;
