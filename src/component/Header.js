import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="contain-container">
            <div className="header__contain">
                <Link
                    to='/dashboard'
                    className="header__title"
                >
                    <h1>Expensify</h1>
                </Link>
                <button
                    className="button--link"
                    onClick={startLogout}
                ><i className="fas fa-sign-out-alt"></i>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);