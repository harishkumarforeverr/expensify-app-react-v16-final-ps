 


store.subscribe(()=>{  
    const state=store.getState()
    const visibleExpense=getVisibleExpense(state.expenses,state.filters);
    console.log(visibleExpense);
})

const expenseRent=store.dispatch(addExpense({description:"rent", amount:100,createdAt:-21000}));
const expenseCoffee=store.dispatch(addExpense({description:"coffee", amount:300,createdAt:-1000})); 
// store.dispatch(addExpense({description:"bike", amount:90,createdAt:9000}));
 
//  store.dispatch(removeExpense({id:expenseRent.expense.id}));

//  store.dispatch(editExpense(expenseCoffee.expense.id, {amount:500} ));
//  store.dispatch(editExpense(expenseCoffee.expense.id, {note:"learning react.js and enjoying it"} ));

//  store.dispatch(setTextFilter("ffee"));
//  store.dispatch(setTextFilter());
 store.dispatch(sortByAmount())
//  store.dispatch(sortByDate());
//  store.dispatch(setStartDate(0));
//  store.dispatch(setStartDate());
//  store.dispatch(setEndDate(999));
//  store.dispatch(setEndDate());


// [
//   {
//     amount:9,
//     name:"nine"
//   },
//     name:"nine"
//   },
//   {
//     amount:0,
//   },
//   {
//     amount:6,
//     name:"nine"
//   {
//     amount:3,
//     name:"nine"
//   }
// ]