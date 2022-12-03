import React from "react";
import "../styles/Graph.css";
const colors = ["Snow", "MintCream", "black", "white", "orange"];

const CenterSlice = (props) => {
  const [colorIndex, setColorIndex] = React.useState(
    props.index % 2 === 0 ? 0 : 1
  );
  const [btnColor, setBtnColor] = React.useState(colors[colorIndex]);
  //Sizing
  const baseSize = props.row * 100; // Will need to pass this into each slice
  const halfBase = baseSize / 2;
  const f = (number) => number + "px";
  const primary = f(baseSize);
  const secondary = f(halfBase);
  //Rotation
  const centerSliceDegrees = 360 / (props.slices * props.row);
  const initialRotationString = "rotate(" + centerSliceDegrees + "deg)";
  const rotation = props.index * centerSliceDegrees;
  const rotString = "rotate(" + rotation + "deg)";
  //Position
  const startPos = 400;
  const offsetNum = startPos - halfBase;
  const offset = f(offsetNum);
  return (
    <div
      onClick={() => {
        setColorIndex(1 + colorIndex);
        setBtnColor(colors[colorIndex]);
      }}
      style={{
        position: "absolute",
        width: primary,
        height: primary,
        clip: `rect(0px, ${primary}, ${primary}, ${secondary})`,
        left: offset,
        top: offset,
        transform: rotString,
        zIndex: props.index,
      }}
    >
      <div
        onClick={() => {
          setColorIndex(1 + colorIndex);
          setBtnColor(colors[colorIndex]);
        }}
        style={{
          backgroundColor: btnColor,
          position: "absolute",
          width: primary,
          height: primary,
          clip: `rect(0px,  ${secondary}, ${primary}, 0px)`,
          boxShadow: "0px 1px inset",
          borderRadius: "50%",
          transform: initialRotationString,
        }}
      ></div>
    </div>
  );
};

export default CenterSlice;

/*
CURRENT PROBLEMS

invisible parts of the divs are clickable
maybe pointer events can fix
*/
