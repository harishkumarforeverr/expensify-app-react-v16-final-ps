import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import AppRouter from "./Routes/AppRouter"; 
import configStore from "./Store/configStore"; 
import 'react-dates/lib/css/_datepicker.css'; 
import "./styles/styles.scss";
const store=configStore();

console.log("im testing my wode")

const jsx=(
    <Provider store={store}>
        <AppRouter   />
    </Provider>
)

ReactDOM.render(jsx ,document.getElementById("app"));
 