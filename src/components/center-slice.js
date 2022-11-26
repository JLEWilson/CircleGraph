import React from "react";
import "../styles/Graph.css";

function CenterSlice(props) {
  const centerSliceDegrees = 360 / props.slices;
  const rotation = props.index * centerSliceDegrees;
  return (
    <div
      style={{ backgroundColor: "blue", transform: [{ rotate: rotation }] }}
      className="hold"
    >
      <div className="Pizza"></div>
    </div>
  );
}
/*
 #PizzaSliceBlue {
  transform:rotate(60deg);
  }
  #PizzaSliceBlue .Pizza {
  background-color: #002095;
  transform:rotate(60deg);
}
*/
export default CenterSlice;
