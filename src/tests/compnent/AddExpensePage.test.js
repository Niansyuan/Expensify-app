import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../component/AddExpensePage';
import "../setupTests";
import expense from '../fixture/expenses'

let addExpenses,history,wrapper;

beforeEach(()=>{
    addExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpenses={addExpenses} history={history} />)
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpenses).toHaveBeenLastCalledWith(expense[1]);
})