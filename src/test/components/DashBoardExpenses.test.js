import React from 'react';
import {shallow} from "enzyme";
import DashBoardExpenses from "../../components/DashBoardExpenses";

test('import DashBoardExpenses from "../../components/DashBoardExpenses"',()=>{
    const wrapper=shallow(<DashBoardExpenses />);
    expect(wrapper).toMatchSnapshot();
})
