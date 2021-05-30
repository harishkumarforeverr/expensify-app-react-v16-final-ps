import React from 'react';
import {shallow} from "enzyme";
import {CreateExpenses} from  "../../components/CreateExpenses"; 
import expenses from "../fixtures/expenses";

let startAddExpenses,history;
beforeEach(()=>{
    startAddExpenses=jest.fn();
    history={
        push:jest.fn()
    }
})

test('import CreateExpenses from  "../../components/CreateExpenses";',()=>{
    const wrapper=shallow(
                <CreateExpenses 
                    startAddExpenses={startAddExpenses}
                    history={history} 
                />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("ExpensesForm").prop("onSubmit")(expenses);
    expect(startAddExpenses).toHaveBeenLastCalledWith(expenses);
    expect(history.push).toHaveBeenLastCalledWith("/")
})
