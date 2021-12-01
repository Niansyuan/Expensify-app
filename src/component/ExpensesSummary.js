import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expense-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';


export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const expenseTotalFormat = numeral(expenseTotal).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="contain-container">
                <h1 className="page-header__title">viewing <span>{expenseCount}</span> {expenseWord} totalling <span>NT{expenseTotalFormat}</span></h1>
                <div className="page-header__action">
                    <Link
                        to="/create"
                        className="button"
                    >Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)