import React from "react";
import moment from "moment";
import {shallow} from "enzyme";
import ExpensesForm from "../../components/ExpensesForm";
import expenses from "../fixtures/expenses";

test('import ExpensesForm from "../../components/ExpensesForm"',()=>{
    const wrapper=shallow(<ExpensesForm />);
    expect(wrapper).toMatchSnapshot();
})


test('import ExpensesForm from "../../components/ExpensesForm with user passes data"',()=>{
    const wrapper=shallow(<ExpensesForm {...expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
})

test('import ExpensesForm from "../../components/ExpensesForm with no data and error messgae undali"',()=>{
    const wrapper=shallow(<ExpensesForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate('submit',{preventDefault:()=>{}}) ;
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state("error").length).toBeGreaterThan(1);
})


test('import ExpensesForm from "../../components/ExpensesForm with no data and error messgae undali"',()=>{
    const wrapper=shallow(<ExpensesForm onSubmit={()=>{}} {...expenses[2]} />);
    wrapper.find("form").simulate('submit',{preventDefault:()=>{}}) ;
    expect(wrapper.state("error")).toBe(undefined);
})



test('import ExpensesForm from "../../components/ExpensesForm targeting the input tag description"',()=>{
    const value="harish";
    const wrapper=shallow(<ExpensesForm />);
    wrapper.find("input").at(0).simulate('change',{
        target:{
            value
        }
    }) ;
    expect(wrapper.state("description")).toBe(value);
})

test('import ExpensesForm from "../../components/ExpensesForm targeting the textarea"',()=>{
    const value="im bying the 60,000 laptop";
    const wrapper=shallow(<ExpensesForm />);
    wrapper.find("textarea").simulate('change',{
        target:{
            value
        }
    }) ;
    expect(wrapper.state("note")).toBe(value);
})



test('import ExpensesForm from "../../components/ExpensesForm targeting the input tag amount"',()=>{
    const value="123.54";
    const wrapper=shallow(<ExpensesForm />);
    wrapper.find("input").at(1).simulate('change',{
        target:{
            value
        }
    }) ;
    expect(wrapper.state("amount")).toBe(value);
})



test('import ExpensesForm from "../../components/ExpensesForm targeting the input tag amount"',()=>{
    const value="123.543";
    const wrapper=shallow(<ExpensesForm />);
    wrapper.find("input").at(1).simulate('change',{
        target:{
            value
        }
    });
    expect(wrapper.state("amount")).toBe("");//toBeFalsy();
})
 


test('import ExpensesForm from "../../components/ExpensesForm shuld call its props "',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpensesForm onSubmit={onSubmitSpy} {...expenses[2]} />);
    wrapper.find("form").simulate('submit',{preventDefault:()=>{}}) ;
    expect(wrapper.state("error")).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[2].description,
        amount: expenses[2].amount,
        note: expenses[2].note,
        createdAt: expenses[2].createdAt
    });

})



test('import ExpensesForm from "../../components/SingleDatePicker shuld call its props "',()=>{
    const now=moment(0);
    const wrapper=shallow(<ExpensesForm/>);
    wrapper.find("withStyles(SingleDatePicker)").prop('onDateChange')(now);
    expect(wrapper.state("createdAt")).toBe(now); 
})


test('import ExpensesForm from "../../components/SingleDatePicker onFocusChange "',()=>{
    const focused=true;
    const wrapper=shallow(<ExpensesForm/>);
    wrapper.find("withStyles(SingleDatePicker)").prop('onFocusChange')({focused});
    expect(wrapper.state("focused")).toBe(focused); 
})