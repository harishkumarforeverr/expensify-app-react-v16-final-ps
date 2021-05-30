import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import AppRouter from "./Routes/AppRouter"; 
import configStore from "./Store/configStore"; 
import 'react-dates/lib/css/_datepicker.css'; 
import "./styles/styles.scss";
import moment from "moment";
// firebase realted inmports

import "./firebase/firebase"; 
// import "./firebase/promise"; 


const store=configStore();


const jsx=(
    <Provider store={store}>
        <AppRouter   />
    </Provider>
)

ReactDOM.render(jsx ,document.getElementById("app")); 