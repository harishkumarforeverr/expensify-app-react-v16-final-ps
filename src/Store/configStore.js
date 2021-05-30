import {createStore,combineReducers,applyMiddleware} from "redux";
import expensesReducer from "../Reducers/ExpenseReducer";
import filterReducer from "../Reducers/FilterReducer";
import thunk from "redux-thunk";

export default ()=>{
    const store=createStore(combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    }), 
        applyMiddleware(thunk)
    );
    return store;
}

