import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../component/AddExpensePage';
import "../setupTests";
import expense from '../fixture/expenses'

let startAddExpenses, history, wrapper;

beforeEach(() => {
    startAddExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpenses={startAddExpenses} history={history} />)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenses).toHaveBeenLastCalledWith(expense[1]);
})