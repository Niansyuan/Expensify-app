import moment from "moment";
import selectExpenseTotal from "../../selectors/expense-total";

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 100,
    createAt: 1000
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 8500,
    createAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Phone',
    note: '',
    amount: 1200,
    createAt: moment(0).add(4, 'days').valueOf()
}]

test('should return 0 if no expenses', () => {
    const expenses = [];
    const totalAmount = selectExpenseTotal(expenses)
    expect(totalAmount).toBe(0)
});

test('should correctly add up a single expense', () => {
    const expense = expenses[1]
    const totalAmount = selectExpenseTotal([expense])
    expect(totalAmount).toBe(expense.amount)
});

test('should correctly add up multiple espenses', () => {
    const totalAmount = selectExpenseTotal(expenses)
    expect(totalAmount).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount)
});