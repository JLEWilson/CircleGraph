import React from "react";
import "../styles/Graph.css";
import CenterSlice from "./slice";
function Graph(props) {
  const width = window.innerWidth - 110;
  const height = window.innerHeight - 110;
  const wWider = width < height;
  const smallestSize = wWider ? width : height;
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
    <div className="GraphContainer" style={{ marginLeft: +"px" }}>
      {centerSlicesArr.map((item) => {
        return item;
      })}
    </div>
  );
}

export default Graph;
