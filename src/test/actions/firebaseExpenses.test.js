import {startAddExpenses} from "../../actions/Expense";
import expenses from "../fixtures/expenses";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";
import moment from "moment";

const mockStore=configureStore([thunk]);

// base code
test("ok",()=>{
    expect(1).toBe(1)
});

test('import {startAddExpenses} from "../../actions/Expense"; should handle the user data in startExpense ',(done)=>{
    const store=mockStore({});
 
   
    // 3d case 
    store.dispatch(startAddExpenses(expenses[2])).then(()=>{
        const action=store.getActions(); 
        expect(action[0]).toEqual({
            type:"ADD_EXPENSE",
            expense :{
                ...expenses[2],
                id:expect.any(String)
            }
        })  
    // 4th case
    database.ref(`expenses/${action[0].expense.id}`).once("value",(dataSnapshot)=>{
       expect(dataSnapshot.val()).toEqual({
        description:"credit Card",
        note:"",
        amount:4500,
        createdAt:moment(action[0].expense.createdAt).valueOf()
       })
       done();  // done add cheesi above lo remove cheyyu
    }) 

    })
   

})


