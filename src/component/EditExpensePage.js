import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import { editExpenses, removeExpenses } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpenses(this.props.expense.id, expense)
        this.props.history.push('/')
        console.log('update', expense)
    }
    onClick = () => {
        this.props.removeExpenses({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    expense={this.props.expense}
                    onClick={this.onClick}>Remove</button>
            </div>
        )

    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
    editExpenses:(id,expense)=>dispatch(editExpenses(id,expense)),
    removeExpenses:(data)=>dispatch(removeExpenses(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);