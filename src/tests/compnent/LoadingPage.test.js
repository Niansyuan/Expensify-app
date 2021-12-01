import React from "react";
import { shallow } from "enzyme";
import LoadingPage from "../../component/LoadingPage";

test('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});