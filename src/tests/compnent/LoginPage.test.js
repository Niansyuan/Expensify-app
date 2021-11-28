import React from "react";
import { LoginPage } from "../../component/LoginPage";
import { shallow } from "enzyme";
import "../setupTests";

test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot()
});

test('should call startLogin button on click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenCalled();
});