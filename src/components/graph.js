import React from "react";
import "../styles/Graph.css";
import CenterSlice from "./center-slice";
function Graph(props) {
  const centerSlicesArr = [];
  let count = 0;
  for (let i = 1; i <= props.rows; i++) {
    const x = props.slices * i;
    for (let j = 0; j < x; j++) {
      centerSlicesArr.push(
        <CenterSlice
          index={count}
          key={`Row${i}:Slice${j}`}
          slices={props.slices}
          row={i}
        />
      );
      count--;
    }
  }
  return (
    <div className="PizzaContainer">
      {centerSlicesArr.map((item) => {
        return item;
      })}
    </div>
  );
}

export default Graph;
