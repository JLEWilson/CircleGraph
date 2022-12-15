import "../styles/Form.css";
import React from "react";

function GenerateForm(props) {
  const [slices, setSlices] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  return (
    <div className="container">
      <label className="label text">
        Number of Slices
        <input
          className="input"
          type="number"
          min="2"
          max="10"
          onChange={(event) => setSlices(event.target.value)}
        />
      </label>
      <label className="label text">
        Number of Rows/Circles
        <input
          className="input"
          type="number"
          max="30"
          onChange={(event) => setRows(event.target.value)}
        />
      </label>
      <button
        type="button"
        className="button"
        onClick={() => props.generateGraph(slices, rows)}
      >
        Generate
      </button>
    </div>
  );
}

export default GenerateForm;
