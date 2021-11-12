//react-test-renderer
import React from "react";
import NotFoundPage from "../../component/NotFoundPage";
import { shallow } from "enzyme";
import "../setupTests";


test('should render NotFoundpage correctly',()=>{
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})