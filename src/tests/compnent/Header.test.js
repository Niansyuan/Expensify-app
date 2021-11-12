//react-test-renderer
import React from "react";
import Header from "../../component/Header";
import { shallow } from "enzyme";
import "../setupTests";

// import ShallowRenderer from "react-test-renderer/shallow";
//test with react-test-renderer/shallow
// test('should render Header correctly',()=>{
//     const renderer=new ShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

//test with enzyme
test('should render Header correctly',()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})