import React from 'react';
import{NavLink} from "react-router-dom";

const Header=()=>{
    return (
        <header> 
         <h1>Expensify-App</h1> 
         <NavLink exact={true} activeClassName="is-active" to="/">DashBoard</NavLink>
         <NavLink activeClassName="is-active" to="/create">Create</NavLink>
        </header>
    )
}

export default Header;