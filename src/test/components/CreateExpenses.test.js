import React from 'react';
import {shallow} from "enzyme";
import {CreateExpenses} from  "../../components/CreateExpenses"; 
import expenses from "../fixtures/expenses";

let addExpense,history;
beforeEach(()=>{
    addExpense=jest.fn();
    history={
        push:jest.fn()
    }
})

test('import CreateExpenses from  "../../components/CreateExpenses";',()=>{
    const wrapper=shallow(
                <CreateExpenses 
                    addExpense={addExpense}
                    history={history} 
                />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("ExpensesForm").prop("onSubmit")(expenses);
    expect(addExpense).toHaveBeenLastCalledWith(expenses);
    expect(history.push).toHaveBeenLastCalledWith("/")
})
