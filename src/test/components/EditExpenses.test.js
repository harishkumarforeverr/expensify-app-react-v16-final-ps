import React from "react";
import{shallow} from "enzyme";
import {EditExpenses} from "../../components/EditExpenses";
import expenses  from "../fixtures/expenses";

let editExpense,removeExpense,history,wrapper;
beforeEach(()=>{
    editExpense=jest.fn();
    removeExpense=jest.fn();
    history={
        push:jest.fn()
    }
    wrapper=shallow(
        <EditExpenses 
            editingExpense={expenses[2]}
            editExpense={editExpense}
            history={history}
            removeExpense={removeExpense}
     />);
})

test('import EditExpenses from "../../components/EditExpenses"',()=>{
    expect(wrapper).toMatchSnapshot(); 
})

test('import EditExpenses from "../../components/EditExpenses"',()=>{
    wrapper.find("ExpensesForm").prop("onSubmit")(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith("/");
})

test('import EditExpenses from "../../components/EditExpenses"',()=>{
    wrapper.find("button").simulate("click");
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[2].id});
    expect(history.push).toHaveBeenLastCalledWith("/");
})