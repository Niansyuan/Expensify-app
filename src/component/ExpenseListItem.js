import React from "react";
import { connect } from "react-redux";
import {removeExpenses} from "../actions/expenses"
import {Link} from 'react-router-dom'

const ExpenseListItem=({dispatch,id,description,amount,createAt})=>{
    return (
        <div>
            <Link to={`/edit/:${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>${amount}--{createAt} ms</p> 
            <button onClick={()=>{
                dispatch(removeExpenses({id}))
            }}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem);