import React from "react";
import "../styles/Graph.css";
import CenterSlice from "./slice";
function Graph(props) {
  const smallestSize =
    window.innerWidth - 220 < window.innerHeight
      ? window.innerWidth - 220
      : window.innerHeight;
  const allowance = Math.floor(smallestSize / props.rows);
  const centerSlicesArr = [];
  let count = 0;
  for (let i = 1; i <= props.rows; i++) {
    const x = props.slices * i;
    for (let j = 0; j < x; j++) {
      centerSlicesArr.push(
        <CenterSlice
          color={props.color}
          index={count}
          key={`Row${i}:Slice${j}`}
          slices={props.slices}
          row={i}
          allowance={allowance}
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
