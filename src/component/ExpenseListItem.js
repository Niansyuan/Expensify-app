import React from "react";
import { Link } from 'react-router-dom';
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createAt }) => {
    return (
        <Link
            to={`/edit/${id}`}
            className="list-item"
        >
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{moment(createAt).format('MMM Do, YYYY')}</span>
            </div>
            <h3 className="list-item__data"> NT{numeral(amount).format('$0,0.00')}</h3>
        </Link>
    )
}

export default ExpenseListItem;