import React from "react";
import { connect } from "react-redux";
import {removeExpenses} from "../actions/expenses"

const ExpenseListItem=({dispatch,id,description,amount,createAt})=>{
    return (
        <div>
            <h3>{description}</h3>
            <p>${amount}--{createAt} ms</p> 
            <button onClick={()=>{
                dispatch(removeExpenses({id}))
            }}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem);