import visibleExpenses from "../../VisibleExpenseSelector/Expense";
import expenses from "../fixtures/expenses";
import moment from 'moment'; 
 
test("../../VisibleExpenseSelector/Expense  ::::: should filter by teext",()=>{
    const filters={
        text:"e",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }
    const action=visibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[1]]);
})

test("../../VisibleExpenseSelector/Expense  ::::: should filter by startDate",()=>{
    const filters={
        text:"",
        sortBy:"date",
        startDate:moment(0),
        endDate:undefined
    }
    const action=visibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0]]);
})

// should filter by endDate

test("../../VisibleExpenseSelector/Expense  ::::: should filter by enddate",()=>{
    const filters={
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:moment(0)
    }
    const action=visibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[0],expenses[1]]);
})

// should filter by date

test("../../VisibleExpenseSelector/Expense  ::::: should filter by date",()=>{
    const filters={
        text:"",
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    }
    const action=visibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0],expenses[1]]);
})

// should filter by amount

test("../../VisibleExpenseSelector/Expense  ::::: should filter by amount",()=>{
    const filters={
        text:"",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
    const action=visibleExpenses(expenses,filters);
    expect(action).toEqual([expenses[1],expenses[2],expenses[0]]);
})
