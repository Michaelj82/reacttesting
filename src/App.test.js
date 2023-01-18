import React from "react";
import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from "./App";
import '@testing-library/jest-dom'
// import TestComponent from "path-to-test-component"


describe("App component", () => {
  it("renders magnificent monkeys", () =>{

    const {container} = render(<App></App>)
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button clicks", () => {
    render(<App></App>);
    const button = screen.getByRole("button", {name: "Click Me"});

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);

  });
});