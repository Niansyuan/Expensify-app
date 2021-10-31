import { createStore,combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";


export default ()=>{
    //create store
    const store=createStore(
        combineReducers({
            expenses:expensesReducer,
            filters:filterReducer
        })
    );
    return store
};