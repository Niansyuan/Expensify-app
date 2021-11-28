import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ExpenseDashBoardPage from '../component/ExpenseDashBoardPage'
import AddExpensePage from '../component/AddExpensePage'
import EditExpensePage from '../component/EditExpensePage'
import NotFoundPage from '../component/NotFoundPage'
import LoginPage from '../component/LoginPage'
import { createBrowserHistory } from 'history'
import PrivateRoute from './PrivateRoute'

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashBoardPage} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter