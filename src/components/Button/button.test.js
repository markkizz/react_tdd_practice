import React from "react";
import ReactDOM from "react-dom";
import Button from "../components/Button/Button";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
});

it('renders button correctly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button>click me</Button>, div)
})
