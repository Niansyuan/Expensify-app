import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter from './routers/AppRouters'
import configureStore from '../src/store/configureStore'
import getVisibleExpenses from '../src/selectors/expenses'
import { addExpenses } from './actions/expenses'
import {setTextFilter} from '../src/actions/filters'
const store=configureStore();

const expenseOne=store.dispatch(addExpenses({description:'Rent',amount:8000,createAt:800}))
const expenseTwo=store.dispatch(addExpenses({description:'Coffee',amount:200,createAt:1000}))
const expenseThree=store.dispatch(addExpenses({description:'ipad',amount:17000,createAt:2000}))

store.dispatch(setTextFilter())

const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters)
console.log(visibleExpenses)

ReactDOM.render(<AppRouter />, document.getElementById('app'));