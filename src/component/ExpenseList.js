import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpense from "../selectors/expenses";

const ExpenseList=(props)=>(
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
)

//HOC -------
const mapStateToProps=(state)=>{
    return {
        expenses:selectExpense(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);
//HOC -------