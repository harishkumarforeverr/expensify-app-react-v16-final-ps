import React from 'react'
import ExpensesForm from "./ExpensesForm";
import {connect} from "react-redux";
import {addExpense} from "../actions/Expense"
export const CreateExpenses=(props)=>{ 
    return (
        <div>
         <h1> Add Expense </h1>
         <ExpensesForm onSubmit={(expense)=>{
            props.addExpense(expense)
            props.history.push("/");
         }}/>
        </div>
    )
}

const mapDispatchToState=(dispatch)=>{
 return {
     addExpense:(expense)=>dispatch(addExpense(expense))
 }
}

export default connect(undefined,mapDispatchToState)(CreateExpenses);