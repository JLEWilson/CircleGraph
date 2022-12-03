import "./App.css";
import React from "react";
import GenerateForm from "./components/generate-form";
import Graph from "./components/graph";
import "./styles/Graph.css";

function App() {
  const [slices, setSlices] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [isGraphGenerated, setIsGraphGenerated] = React.useState(false);
  const generateGraph = (s, r) => {
    setSlices(s);
    setRows(r);
    setIsGraphGenerated(true);
    console.log(`Slices: ${s} Rows: ${r} `);
  };
  return (
    <div>
      {/* <svg height="0" width="0">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="sector">
            <path
              fill="none"
              stroke="#111"
              stroke-width="1"
              class="sector"
              d="M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.75,.066987298 z"
            ></path>
          </clipPath>
        </defs>
      </svg>
      <ul class="menu">
        <li class="one"></li>
        <li class="two"></li>
        <li class="three"></li>
        <li class="four"></li>
        <li class="five"></li>
        <li class="six"></li>
      </ul> */}
      {/* <div className="PizzaContainer">
        <div className="PizzaBackground"></div>
        <div className="PizzaSlice hold" style={{}}>
          <div
            className="Pizza"
            style={{
              backgroundColor: "Red",
              transform: "rotate(60deg)",
            }}
          ></div>
        </div>
      </div> */}
      {isGraphGenerated ? (
        <Graph slices={slices} rows={rows} />
      ) : (
        <GenerateForm generateGraph={generateGraph} />
      )}
    </div>
  );
}

export default App;
