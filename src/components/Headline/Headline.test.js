import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../utils/findByAttr";
import Headline from "./Headline";

const setupComponent = (props = {}) => shallow(<Headline {...props} />);

describe("Headline Component", () => {
  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Jesting",
        desc: "Click me please"
      };
      component = setupComponent(props);
    });
    it("Should render HeadlineComponent", () => {
      const wrapper = findByTestAttr(
        component,
        "data-test",
        "headlineComponent"
      );
      expect(wrapper.length).toBe(1);
    });

    it("Should render H1", () => {
      const h1 = component.find("h1.header");
      expect(h1.length).toBe(1);
    });

    it("Should render description", () => {
      const desc = component.find("p.desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have No props", () => {
    let component;
    beforeEach(() => {
      component = setupComponent();
    });

    it("Should no h1 and desc", () => {
      const h1 = component.find("h1.header");
      expect(h1.length).toBe(0);
    });
  });
});
