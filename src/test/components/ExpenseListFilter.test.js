import React from "react";
import {shallow} from "enzyme";
import moment from "moment"
import { filters, altFilters } from "../fixtures/filters";
import {ExpenseListFilter} from "../../components/ExpenseListFilter";

let setStartDate,setEndDate,sortByDate,sortByAmount,setTextFilter,wrapper
beforeEach(()=>{
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setTextFilter=jest.fn(); 
    wrapper=shallow(<ExpenseListFilter 
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setTextFilter={setTextFilter}
        filters={filters}
    />)
})

test(' ExpenseListFilter from "../../components/ExpenseListFilter" with default values;',()=>{
    expect(wrapper).toMatchSnapshot();
})

test(' ExpenseListFilter from "../../components/ExpenseListFilter" with default values;',()=>{
    wrapper.setProps({
        filters:{altFilters}
    })
    expect(wrapper).toMatchSnapshot();
})


test(' ExpenseListFilter from "../../components/ExpenseListFilter" with default values;',()=>{
    const value="rent";
    const obj={
        target:{
            value
        } 
    } 
    wrapper.find("input").simulate('change',obj);
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test(' ExpenseListFilter from "../../components/ExpenseListFilter" with default values;',()=>{
    const value="amount";
    const obj={
        target:{
            value
        } 
    } 
    wrapper.find("select").simulate('change',obj);
    expect(wrapper).toMatchSnapshot();
    expect(sortByAmount).toHaveBeenCalled();
})


test(' ExpenseListFilter from "../../components/ExpenseListFilter" with default values;',()=>{
    const value="date";
    wrapper.setProps({
        filters:{altFilters}
    })
    const obj={
        target:{
            value
        } 
    } 
    wrapper.find("select").simulate('change',obj);
    expect(wrapper).toMatchSnapshot();
    expect(sortByDate).toHaveBeenCalled();
})



test(' ExpenseListFilter from "../../components/ExpenseListFilter" withStyles(DateRangePicker);',()=>{
    const startDate=moment(0).add(4,"years");
    const endDate=moment(0).add(8,"years");
    wrapper.find("withStyles(DateRangePicker)").prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test(' ExpenseListFilter from "../../components/ExpenseListFilter" withStyles(DateRangePicker);',()=>{
    wrapper.find("withStyles(DateRangePicker)").prop('onFocusChange')("startDate");
    expect(wrapper.state("focusedInput")).toBe("startDate");
})

