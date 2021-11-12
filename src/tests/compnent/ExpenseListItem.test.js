import React from "react";
import ExpenseListItem from "../../component/ExpenseListItem";
import { shallow } from "enzyme";
import expenses from "../fixture/expenses";
import "../setupTests";

test('should render expenseListItem with fixture data',()=>{
    const wrapper=shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})