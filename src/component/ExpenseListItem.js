import React from "react";
import {Link} from 'react-router-dom';
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem=({id,description,amount,createAt})=>{
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                NT{numeral(amount).format('$0,0.00')}
                __
                {moment(createAt).format('MMM Do, YYYY')}
            </p> 
        </div>
    )
}

export default ExpenseListItem;