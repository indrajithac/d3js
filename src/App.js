import { useState } from "react";
import "./App.css";
import BarGraph from "./Components/BarGraph/BarGraph";
import CurvedLineChart from "./Components/CurvedLineChart/CurvedLineChart";
import LineChart from "./Components/LineChart/LineChart";

function App() {
  const [data, setData] = useState([10, 20, 35, 55, 60, 10]);
  return (
    <div className="App">
      <LineChart />
      <CurvedLineChart data={data} />
      <BarGraph data={data} />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <br />
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
      <br />
      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
      <br />
    </div>
  );
}

export default App;
