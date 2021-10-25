import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import ExpenseDashBoardPage from '../component/ExpenseDashBoardPage'
import AddExpensePage from '../component/AddExpensePage'
import EditExpensePage from '../component/EditExpensePage'
import HelpPage from '../component/HelpPage'
import NotFoundPage from '../component/NotFoundPage'
import Header from '../component/Header'

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>  
                <Route path='/' component={ExpenseDashBoardPage} exact={true}/>
                <Route path='/create' component={AddExpensePage} />
                <Route path='/edit' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter