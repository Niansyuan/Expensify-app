import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter from './routers/AppRouters'
import configureStore from '../src/store/configureStore'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css';

const store=configureStore();

console.log('test')

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));