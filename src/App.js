import "./App.css";
import React from "react";
import GenerateForm from "./components/generate-form";
import Graph from "./components/graph";

function App() {
  const [slices, setSlices] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [isGraphGenerated, setIsGraphGenerated] = React.useState(false);
  const generateGraph = (s, r) => {
    setSlices(s);
    setRows(r);
    setIsGraphGenerated(true);
    console.log(`Slices: ${slices} Rows: ${rows} `);
  };
  return (
    <div>
      {isGraphGenerated ? (
        <Graph slices={slices} rows={rows} />
      ) : (
        <GenerateForm generateGraph={generateGraph} />
      )}
    </div>
  );
}

export default App;
