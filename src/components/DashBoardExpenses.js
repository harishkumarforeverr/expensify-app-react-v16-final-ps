import React from "react"
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
const DashBoardExpenses=()=>{
    return (
        <div> 
         <ExpenseListFilter />
         <ExpenseList />
        </div>
    )
}
export default DashBoardExpenses;