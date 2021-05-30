import React from 'react'
import ExpensesForm from "./ExpensesForm";
import {connect} from "react-redux";
import {startAddExpenses} from "../actions/Expense"
export const CreateExpenses=(props)=>{ 
    return (
        <div>
         <h1> Add Expense </h1>
         <ExpensesForm onSubmit={(expense)=>{
            props.startAddExpenses(expense)
            props.history.push("/");
         }}/>
        </div>
    )
}

const mapDispatchToState=(dispatch)=>{
 return {
     startAddExpenses:(expense)=>dispatch(startAddExpenses(expense))
 }
}

export default connect(undefined,mapDispatchToState)(CreateExpenses);