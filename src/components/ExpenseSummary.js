import React from "react";
import {connect} from "react-redux";
import formatAmount from 'indian-currency-formatter';
import ExpensesTotal from "./Expense-Total"; 
import visibleExpense from "../VisibleExpenseSelector/Expense";

export const ExpenseSummary=(props)=>{
    const expensesWord= props.noOfExpenses==1?"expense":"expenses";
    return (
        <div>
          {
              (props.noOfExpenses!==0) &&
              <h1>Viewing {props.noOfExpenses} {expensesWord} of totaling &#x20B9;{formatAmount(props.TotalExpenses)}  </h1>
          }            
        </div>
    )
}
 
const mapStateToProps=(state)=>{
    const expenses=visibleExpense(state.expenses,state.filters); 
    return {
        noOfExpenses:expenses.length,
        TotalExpenses:ExpensesTotal(expenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);
