import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import {addExpenses} from '../actions/expenses'

const AddExpensePage=(props)=>(
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense)=>{
                props.dispatch(addExpenses(expense))
                props.history.push('/')
            }}
        />
    </div>
)

export default connect()(AddExpensePage);