import expenseReducer from "../../Reducers/ExpenseReducer"; 
import expenses from "../fixtures/expenses";
//@@INIT
test("../../Reducers/ExpenseReducer ::: shoul setupt @@INIT",()=>{
     const state=expenseReducer(undefined, {type:"@@INIT"});
     expect(state).toEqual([]);
})

// remove the expense with index of 1
test("../../Reducers/ExpenseReducer ::: remove the expense with index of 1",()=>{
    const action={
     type:"REMOVE_EXPENSE",
     id:expenses[1].id
    }
    const state=expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})
// should not remove the expense with index of -1
test("../../Reducers/ExpenseReducer :::should not remove the expense with index of -1",()=>{
    const action={
     type:"REMOVE_EXPENSE",
     id:"-1"
    }
    const state=expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]]);
})
//shoould add a expense
test("../../Reducers/ExpenseReducer :::shoould add a expense",()=>{
    const action={
     type:"ADD_EXPENSE",
        expense:{
            id:3,
            description:"bike",
            note:"",
            amount:9087,
            createdAt:2030
        }
    }
    const state=expenseReducer(expenses, action);
    expect(state).toEqual([...expenses,action.expense]);
})
// should edit a expenses
test("../../Reducers/ExpenseReducer :::shoould edit a valid expense",()=>{
    const action={
        type:"EDIT_EXPENSE",
        id:2,
        updates:{ 
            description:"car", 
            createdAt:2040
        }
    }
    const state=expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[1], {...expenses[2],...action.updates}]);
})
// should  not edit a expenses if expense not found 
test("../../Reducers/ExpenseReducer :::shoouldnot edit a not valid id a expense",()=>{
    const action={
        type:"EDIT_EXPENSE",
        id:"-3",
        updates:{ 
            description:"car", 
            createdAt:2040
        }
    }
    const state=expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})