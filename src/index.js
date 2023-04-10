import React from "react";
import ReactDOM from "react-dom";

const time = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>Hello! The time as per IST is {time}</h1>
  </>,
  document.getElementById("root")
)

