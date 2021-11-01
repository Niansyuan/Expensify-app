import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter from './routers/AppRouters'
import configureStore from '../src/store/configureStore'
import getVisibleExpenses from '../src/selectors/expenses'
import { addExpenses } from './actions/expenses'
import { Provider } from 'react-redux'

const store=configureStore();

const expenseOne=store.dispatch(addExpenses({description:'Rent',amount:8000,createAt:2000}))
const expenseTwo=store.dispatch(addExpenses({description:'Coffee',amount:200,createAt:800}))
const expenseThree=store.dispatch(addExpenses({description:'ipad',amount:17000,createAt:100}))

const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)

const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));