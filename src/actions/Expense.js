import {v4 as uuid } from "uuid";
import database from "../firebase/firebase";
import moment from "moment";
//ADD_EXPENSE
export const addExpense=(expense)=>({
    type:"ADD_EXPENSE",
    expense
})

// start Add Expenses
export const startAddExpenses=(expenses={})=>{
   return (dispatch)=>{
       const {
            description="",
              note="",
              amount=0,
              createdAt=0  
       }=expenses;
       const expense={
                        description,
                        note,
                        amount,
                        createdAt:moment(createdAt).valueOf()
                      }  
       return database.ref("expenses").push(expense).then((ref)=>{
         dispatch(addExpense({
           id:ref.key,
           ...expense,
           createdAt
         }));
       })

   }
}
 
//REMOVE_EXPENSE
export const removeExpense=({id })=>({
    type:"REMOVE_EXPENSE",
    id
})
//EDIT_EXPENSE
export const editExpense=(id,updates)=>({
    type:"EDIT_EXPENSE",
    id,
    updates
})