import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter, { history } from './routers/AppRouters'
import configureStore from '../src/store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { login, logout } from './actions/auth'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    };
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

onAuthStateChanged(getAuth(), (user) => {
    if (user) {
        store.dispatch(login(user.uid));
        console.log('log in', user.uid);
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            };
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/'); //redirect to root-Page
        console.log('log out');
    };
});