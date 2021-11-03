import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpenses,removeExpenses} from '../actions/expenses'

const EditExpensePage=(props)=>{
    console.log(props)
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(editExpenses(props.expense.id,expense))
                    props.history.push('/')
                    console.log('update',expense)
                }}
            />
            <button 
                expense={props.expense}
                onClick={()=>{
                props.dispatch(removeExpenses({id:props.expense.id}))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return {
        expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);