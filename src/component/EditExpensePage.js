import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { startEditExpenses, startRemoveExpenses } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpenses(this.props.expense.id, expense)
        this.props.history.push('/')
        console.log('update', expense)
    }
    onClick = () => {
        this.props.startRemoveExpenses({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="contain-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="contain-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <div>
                        <button
                            className="button--remove"
                            expense={this.props.expense}
                            onClick={this.onClick}
                        >Remove Expense</button>
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
    startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);