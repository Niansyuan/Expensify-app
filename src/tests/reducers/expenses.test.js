import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../../tests/fixture/expenses";

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSES',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSES',
        id: 4
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: 4,
        description: 'clothes',
        note: '',
        amount: 1000,
        createAt: moment(0)
    }

    const action = {
        type: 'ADD_EXPENSES',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        ...expenses,
        expense
    ])
})

test('should edit an expense', () => {
    const amount = 9000
    const action = {
        type: 'EDIT_EXPENSES',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toEqual(amount)
})

test('should not edit an expense if id not found', () => {
    const amount = 9000
    const action = {
        type: 'EDIT_EXPENSES',
        id: 5,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const aciton = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, aciton)
    expect(state).toEqual([expenses[1]]);
});