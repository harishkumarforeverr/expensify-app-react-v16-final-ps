import {createStore,combineReducers} from "redux";
import expensesReducer from "../Reducers/ExpenseReducer";
import filterReducer from "../Reducers/FilterReducer";
export default ()=>{
    const store=createStore(combineReducers({
        expenses:expensesReducer,
        filters:filterReducer
    }));
    return store;
}

