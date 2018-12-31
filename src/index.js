import React, { Component } from "react";
import ReactDOM from "react-dom";

import { AnimatedPythagorasTree } from "./PythagorasTree.js";
const createElement = React.createElement;

function PythagorasTree({ sway, animating, onChangeSway, onToggle }) {
  // Replace this with your solution
  let toggleText = animating ? "Stop" : "START";

  const increase = () => {
    sway = parseFloat(sway) + 0.02;
    onChangeSway(sway);
  };

  const decrease = () => {
    sway = parseFloat(sway) - 0.02;
    onChangeSway(sway);
  };

  const handleChange = e => {
    sway = e.target.value;
    onChangeSway(sway);
  };

  return createElement(
    AnimatedPythagorasTree,
    { animating, sway: !sway ? 0 : parseFloat(sway) },
    createElement("button", { onClick: onToggle }, toggleText),
    createElement("button", { onClick: decrease }, "<"),
    createElement("input", { value: sway, onChange: e => handleChange(e) }),
    createElement("button", { onClick: increase }, ">")
  );
}

let animating = false;
let sway = 0.1;
function renderApp() {
  ReactDOM.render(
    createElement(PythagorasTree, {
      animating,
      sway,
      onToggle: () => {
        animating = !animating;
        renderApp();
      },
      onChangeSway: value => {
        sway = value;
        renderApp();
      }
    }),
    document.getElementById("app")
  );
}
renderApp();
