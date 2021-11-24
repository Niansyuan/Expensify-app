import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../component/EditExpensePage";
import expenses from '../fixture/expenses';
import '../setupTests';

let editExpenses, startRemoveExpenses, history, wrapper;

beforeEach(() => {
    editExpenses = jest.fn();
    startRemoveExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage
        editExpenses={editExpenses}
        startRemoveExpenses={startRemoveExpenses}
        history={history}
        expense={expenses[1]}
    />)
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(editExpenses).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
});

test('should render removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(startRemoveExpenses).toHaveBeenLastCalledWith({ id: expenses[1].id })
    expect(history.push).toHaveBeenLastCalledWith('/')
});