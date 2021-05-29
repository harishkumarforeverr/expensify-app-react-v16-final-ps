export default (expenses)=>expenses
                                .map((expense)=>parseFloat(expense.amount,10))
                                .reduce((sum,value)=>(sum+value),0);