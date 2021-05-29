import React from "react"
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpenseSummary from "./ExpenseSummary";

const DashBoardExpenses=()=>{
    return (
        <div> 
         <ExpenseSummary />
         <ExpenseListFilter />
         <ExpenseList />
        </div>
    )
}
export default DashBoardExpenses;