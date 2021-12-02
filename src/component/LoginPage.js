import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p className="box-layout__subtitle">It's time to get your expenses under control.</p>
            <button
                onClick={startLoginWithGoogle}
                className="button"
            ><i className="fab fa-google"></i>Login with Google</button>
            <button
                onClick={startLoginWithFacebook}
                className="button"
            ><i className="fab fa-facebook-square"></i>Login with Facebook</button>
            <div>
                <Link
                    to='/privacy'
                    className="link"
                >Privacy</Link>
            </div>
        </div>
    </div>
);
const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});
export default connect(undefined, mapDispatchToProps)(LoginPage);