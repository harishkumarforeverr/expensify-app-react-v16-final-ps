import React from 'react';
import {shallow} from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

test('import NotFoundPage from "../../components/NotFoundPage"',()=>{
    const wrapper=shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
})
