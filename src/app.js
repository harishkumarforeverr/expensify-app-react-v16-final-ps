import React from 'react';
import ReactDOM from 'react-dom';
import moment from "moment";
import {Provider} from "react-redux";
import AppRouter from "./Routes/AppRouter"; 
import configStore from "./Store/configStore";
import  {addExpense} from "./actions/Expense";
import {setTextFilter} from "./actions/Filter";
import getVisibleExpense from "./VisibleExpenseSelector/Expense";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/lib/css/_datepicker.css';
import "./styles/styles.scss";
const store=configStore();

const jsx=(
    <Provider store={store}>
        <AppRouter   />
    </Provider>
)

ReactDOM.render(jsx ,document.getElementById("app"));
 
// store.dispatch(addExpense({
//                     description:"water bill", 
//                     amount:4500, 
//                     createdAt:moment()
//               }))

// store.dispatch(addExpense({
//                 description:"Gas bill", 
//                 createdAt:moment()
//           }))


// store.dispatch(addExpense({
//                 description:"rent", 
//                 amount:109500,
//                 createdAt:moment()
//           }))

// store.subscribe(()=>{ 
//     console.log(store.getState().filters.startDate,moment(store.getState().filters.startDate).format("MMM Do"))
//     console.log(store.getState().filters.endDate,moment(store.getState().filters.endDate).format("MMM Do"))
//     console.log(store.getState().expenses[0].createdAt, moment(store.getState().expenses[0].createdAt).format("MMM Do"))
//     setTimeout(()=>{ 
//         console.log(store.getState().expenses[0].createdAt, moment(store.getState().expenses[1].createdAt).format("MMM Do"))
//     },8000)
// })

// const state=store.getState();
// const visibleExpense=getVisibleExpense(state.expenses, state.filters);
// console.log(visibleExpense);  

