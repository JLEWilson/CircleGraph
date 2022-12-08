import React from "react";
import "../styles/Graph.css";
const colors = ["Snow", "MintCream"];

const CenterSlice = (props) => {
  const [colorIndex] = React.useState(props.index % 2 === 0 ? 0 : 1);
  const [btnColor, setBtnColor] = React.useState(colors[colorIndex]);
  //Sizing

  const baseSize = props.row * props.allowance;
  /*
    CHANGE BASE SIZE TO BE BASED ON WINDOW HEIGHT/WIDTH, CONTAINER SIZE, OR OTHER 
    while leaving room for the color palette
  */
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
  const startPos = 470;
  const offsetNum = startPos - halfBase;
  const offset = f(offsetNum);
  const startClickOffset = 50;
  const clickOffset = startClickOffset - props.row;
  const cOffset = clickOffset.toString() + "%";
  return (
    <div
      style={{
        position: "absolute",
        width: primary,
        height: primary,
        clip: `rect(0px, ${primary}, ${primary}, ${secondary})`,
        left: offset,
        top: offset,
        transform: rotString,
        zIndex: props.index,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: btnColor,
          position: "absolute",
          width: primary,
          height: primary,
          clip: `rect(0px,  ${secondary}, ${primary}, 0px)`,
          boxShadow: "0px 1px inset",
          borderRadius: "50%",
          transform: initialRotationString,
          pointerEvents: "none",
        }}
      >
        <div
          onClick={() => {
            setBtnColor(props.color);
          }}
          style={{
            position: "absolute",
            top: "5px",
            right: cOffset,
            height: "25%",
            width: "25%",
            pointerEvents: "auto",
          }}
        ></div>
      </div>
    </div>
  );
};
export default CenterSlice;
