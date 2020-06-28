import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<App />);
    const wrapper = component.find("[test-class='App']");
    expect(wrapper.length).toBe(1);
  });
});
