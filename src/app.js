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
 