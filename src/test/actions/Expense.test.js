import {startAddExpenses,editExpense,addExpense,removeExpense} from "../../actions/Expense";
import expenses from "../fixtures/expenses";

test("../../actions/Expense ::: should handle removeExpense default",()=>{ 
    const action=removeExpense({id:"123"});
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"123"
    }); 
})
 

test("../../actions/Expense ::: should handle editExpense user values",()=>{
    const updates={
        description:"harish car", 
        createdAt:2030
    }
    const action=editExpense("123",updates);
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id:"123",
        updates
    });
})


test("../../actions/Expense ::: should handle addExpense default",()=>{ 
    const action=addExpense(expenses[2]);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:expenses[2] 
       })
})