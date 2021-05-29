import React from "react";
import {shallow} from "enzyme";
import {ExpenseSummary} from "../../components/ExpenseSummary";

test('should match snapshot import {ExpenseSummary} from "../../components/ExpenseSummary";',()=>{
    const wrapper=shallow(<ExpenseSummary noOfExpenses={0} TotalExpenses={0} />);
    expect(wrapper).toMatchSnapshot();
})

test('should match snapshot import {ExpenseSummary} from "../../components/ExpenseSummary";',()=>{
    const wrapper=shallow(<ExpenseSummary noOfExpenses={1} TotalExpenses={909} />);
    expect(wrapper).toMatchSnapshot();
})

test('should match snapshot import {ExpenseSummary} from "../../components/ExpenseSummary";',()=>{
    const wrapper=shallow(<ExpenseSummary noOfExpenses={10} TotalExpenses={90900} />);
    expect(wrapper).toMatchSnapshot();
})