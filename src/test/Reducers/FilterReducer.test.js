import filterReducer from "../../Reducers/FilterReducer";
import moment from "moment";
// '@@INIT'
test("../../Reducers/FilterReducer ::::: @@INIT",()=>{
    const state=filterReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month")
    });
})

// sortBy amount
test("../../Reducers/FilterReducer ::::: amount",()=>{
    const state=filterReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toEqual("amount");
})

// sortBy date
test("../../Reducers/FilterReducer ::::: date",()=>{
    const currentState={
        text:"",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
    const state=filterReducer(currentState,{type:"SORT_BY_DATE"});
    expect(state.sortBy).toEqual("date");
})
// should set text filter
test("../../Reducers/FilterReducer ::::: text",()=>{ 
    const action={
        type:"SET_TEXT_FILTER",
        text:"forever"
    }
    const state=filterReducer(undefined,action);
    expect(state.text).toEqual("forever");
})

// should set startDate
test("../../Reducers/FilterReducer ::::: startDate",()=>{ 
    const action={
        type:"SET_START_DATE",
        startDate:moment(0).add(10,"days")
    }
    const state=filterReducer(undefined,action);
    expect(state.startDate).toEqual(action.startDate);
})
// should set endDate

test("../../Reducers/FilterReducer ::::: startDate",()=>{ 
    const action={
        type:"SET_END_DATE",
        endDate:moment(0).subtract(10,"days")
    }
    const state=filterReducer(undefined,action);
    expect(state.endDate).toEqual(action.endDate);
})