import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expense-total';
import numeral from 'numeral';


export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const expenseTotalFormat = numeral(expenseTotal).format('$0,0.00');
    return (
        <div>
            <h1>viewing {expenseCount} {expenseWord} totalling NT{expenseTotalFormat}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: state.expenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)