import React from 'react'; 
import moment from "moment";
import {Link} from "react-router-dom";
import formatAmount from 'indian-currency-formatter';

const ExpenseListItem=({description,amount,createdAt,id })=>{
    return (
        <div> 
           <Link to={`edit/${id}`}>
           <h3>{description} </h3> 
           <p>  
              {amount && <span>&#x20B9;{formatAmount(parseFloat(amount,10)) }  </span>}
              - 
              {createdAt.format("Do MMM, YYYY") }  
           </p> 
           </Link> 
        </div>
    )
} 

export default ExpenseListItem;