//react-test-renderer
import React from "react";
import ExpenseDashBoardPage from "../../component/ExpenseDashBoardPage";
import { shallow } from "enzyme";
import "../setupTests";


test('should render ExpenseDashBoardPage correctly',()=>{
    const wrapper = shallow(<ExpenseDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
})