import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import ExpenseListItem from "../../components/ExpenseListItem";

test('import ExpenseListItem from "../../components/ExpenseListItem"',()=>{
    const wrapper= shallow(<ExpenseListItem {...expenses[2]}  />);
    expect(wrapper).toMatchSnapshot();
})