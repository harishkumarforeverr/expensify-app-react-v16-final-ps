import {shallow} from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';
import {ExpenseList} from "../../components/ExpenseList";

test('import {ExpenseList} from "../../components/ExpenseList"',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot();
})

test('import {ExpenseList} from "../../components/ExpenseList with no expenses"',()=>{
     const wrapper=shallow(<ExpenseList expenses={[]} />)
     expect(wrapper).toMatchSnapshot();
})