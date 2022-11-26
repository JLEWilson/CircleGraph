import React from "react";

function GenerateForm(props) {
  const [slices, setSlices] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  return (
    <div>
      <label>
        <input
          type="number"
          min="2"
          max="10"
          onChange={(event) => setSlices(event.target.value)}
        />
        Number of Slices
      </label>
      <label>
        <input
          type="number"
          max="30"
          onChange={(event) => setRows(event.target.value)}
        />
        Number of Rows/Circles
      </label>
      <button type="button" onClick={() => props.generateGraph(slices, rows)}>
        Generate
      </button>
    </div>
  );
}

export default GenerateForm;
