import "./App.css";
import React from "react";
import GenerateForm from "./components/generate-form";
import Graph from "./components/graph";
import "./styles/Graph.css";
import ColorPalette from "./components/color-palette";
import ColorSwatch from "./components/color-swatch";

const defaultColors = [
  "#D9E3F0",
  "#F47373",
  "#697689",
  "#37D67A",
  "#2CCCE4",
  "#555555",
  "#dce775",
  "#ff8a65",
  "#ba68c8",
];

function App() {
  const [slices, setSlices] = React.useState(0);
  const [rows, setRows] = React.useState(0);
  const [isGraphGenerated, setIsGraphGenerated] = React.useState(false);
  const [activeColor, setActiveColor] = React.useState(defaultColors[0]);
  const [colors, setColors] = React.useState(defaultColors);
  const [errorMessage, setErrorMessage] = React.useState("Error");
  const [errorMessageVisible, setErrorMessageVisible] = React.useState(false);
  const handleNewColor = () => {
    if (colors.indexOf(activeColor) !== -1) {
      setErrorMessage("This color is already in your palette");
      return setErrorMessageVisible(true);
    }
    if (errorMessageVisible) setErrorMessageVisible(false);
    const newColors = colors.concat(activeColor);
    return setColors(newColors);
  };
  const generateGraph = (s, r) => {
    setSlices(s);
    setRows(r);
    setIsGraphGenerated(true);
    console.log(`Slices: ${s} Rows: ${r} `);
  };
  return (
    <div>
      {isGraphGenerated ? (
        <Graph color={activeColor} slices={slices} rows={rows} />
      ) : (
        <GenerateForm generateGraph={generateGraph} />
      )}
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          width: "220px",
          paddingRight: "0px",
          paddingTop: "0px",
        }}
      >
        <ColorSwatch
          color={activeColor}
          setColor={setActiveColor}
          submit={handleNewColor}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ColorPalette setColor={setActiveColor} colors={colors} />
        </div>
        {errorMessageVisible && (
          <span style={{ color: "red", position: "absolute" }}>
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
