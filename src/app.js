import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter from './routers/AppRouters'
import configureStore from '../src/store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase'
import { startSetExpenses } from './actions/expenses';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})