import React, { Component } from "react";
import ReactDOM from "react-dom";

import { getBoxStyle } from "./PythagorasTree.js";

// Don't set `totalLevels` above 8 -- your browser will
// freeze due to the amount of work required.
let totalLevels = 5;
let heightFactor = 0.37;
let lean = -0.1;
let size = 100;

const TreeBox = props => {
  const style = getBoxStyle({
    level: props.level,
    right: props.right,
    heightFactor,
    lean,
    size,
    totalLevels
  });

  const rightChild =
    props.level < totalLevels &&
    React.createElement(TreeBox, {
      right: true
    });

  return React.createElement("div", { style }, rightChild);
};

ReactDOM.render(
  React.createElement(TreeBox, { level: 0 }),
  document.getElementById("app")
);
