import React from 'react';
import {connect} from "react-redux";
import ExpensesForm from "./ExpensesForm";
import {editExpense,removeExpense} from "../actions/Expense";

export const EditExpenses=(props)=>{    
    return (
        <div> 
            <h1>Edit Expense </h1>
             <ExpensesForm 
             {...props.editingExpense}
             onSubmit={(expense)=>{ 
                 props.editExpense(props.editingExpense.id,expense)
                 props.history.push("/");
             }}
              />   
           <button onClick={()=>{
               props.removeExpense({id:props.editingExpense.id})
               props.history.push("/");
               }} >Remove</button>
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    return {
        editingExpense:state.expenses.find((expense)=>expense.id===props.match.params.id)
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        editExpense:(id,expense)=>dispatch(editExpense(id,expense)),
        removeExpense:({id})=>dispatch(removeExpense({id}))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpenses);