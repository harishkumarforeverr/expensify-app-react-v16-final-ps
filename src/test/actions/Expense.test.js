import {editExpense,addExpense,removeExpense} from "../../actions/Expense";

test("../../actions/Expense ::: should handle removeExpense default",()=>{ 
    const action=removeExpense({id:"123"});
    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id:"123"
    }); 
})
test("../../actions/Expense ::: should handle addExpense default",()=>{ 
    const action=addExpense();
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{ 
            id:expect.any(String),      
            description:"",
            note:"",
            amount:0,
            createdAt:0
        }
    })
})
test("../../actions/Expense ::: should handle addExpense user values",()=>{
    const expense={
        description:"harish car",
        note:"my car",
        amount:10980,
        createdAt:2030
    }
    const action=addExpense(expense);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{ 
            id:expect.any(String),
            ...expense
        }
    })
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
    })
})