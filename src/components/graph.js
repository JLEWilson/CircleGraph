import React from "react";
import "../styles/Graph.css";
import CenterSlice from "./center-slice";
function Graph(props) {
  const centerSlicesArr = [];
  for (let i = 0; i < props.slices; i++) {
    centerSlicesArr.push(
      <CenterSlice index={i} key={i} slices={props.slices} />
    );
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

// <div class="PizzaContainer">
//   <div class="PizzaBackground"></div>
//   <div id="PizzaSliceYellow" class="hold">
//     <div class="Pizza"></div>
//   </div>
//   <div id="PizzaSliceBlue" class="hold">
//     <div class="Pizza"></div>
//   </div>
//   <div id="PizzaSliceRed" class="hold">
//     <div class="Pizza"></div>
//   </div>
//   <div id="PizzaSliceOlive" class="hold">
//     <div class="Pizza"></div>
//   </div>
//   <div id="PizzaSliceOrange" class="hold">
//     <div class="Pizza"></div>
//   </div>
//   <div id="PizzaSliceLime" class="hold">
//     <div class="Pizza"></div>
//   </div>
// </div>
