import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from '../../../utils/findByAttr'
import Header from "./Header";

const setUpComponent = (props={}) => shallow(<Header {...props} />);

describe("Header Component", () => {  
  // # refactor to utils
  let component;
  // this func will run before testing
  beforeEach(() => {
    component = setUpComponent()
  })

  it("Should header have .headerComponent", () => {
    console.log(component.debug()); // log for debug
    const wrapper = findByTestAttr(component, "data-test", 'headerComponent') // component.find(`[id='logoImg']`)
    console.log(wrapper.length); 
    expect(wrapper.length).toBe(1); // shollow .length === 1 becuase classname should have 1
  });

  it("Should img have logoImg", () => {
    const logo = findByTestAttr(component, "id", "logoImg"); // component.find(`[id='logoImg']`)
    expect(logo.length).toBe(1);
  });
})

/* -------------------------
const setUpComponent = (props = {}) => shallow(<Header />);
 #2 refactor
describe("Header Component", () => {
  it("Should header have .headerComponent", () => {
    const component = setUpComponent() // shollow will print all JSX tag in component
    console.log(component.debug()); // log for debug
    const wrapper = component.find(".headerComponent");
    console.log(wrapper.length);
    expect(wrapper.length).toBe(1); // shollow .length === 1 becuase classname should have 1
  });

  it("Should img have logoImg", () => {
    const component =  setUpComponent();
    const logo = component.find(".logoImg");
    expect(logo.length).toBe(1);
  });
})
*/

/*----------------------
#1
describe("Header Component", () => {
  it("Should header have .headerComponent", () => {
    const component = shallow(<Header />); // shollow will print all JSX tag in component
    console.log(component.debug());
    const wrapper = component.find(".headerComponent");
    console.log(wrapper.length);
    expect(wrapper.length).toBe(1); // shollow .length === 1 becuase classname should have 1
  });

  it("Should img have logoImg", () => {
    const component = shallow(<Header />);
    const logo = component.find(".logoImg");
    expect(logo.length).toBe(1);
  });
});

*/