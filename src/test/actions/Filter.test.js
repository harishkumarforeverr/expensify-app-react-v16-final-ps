import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from "../../actions/Filter";
import moment from "moment";
 

test("src/action/filters :::::::: setEnddate ",()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        endDate:moment(0)
    });
 })

 



test("src/action/filters :::::::: setStartDate ",()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:"SET_START_DATE",
        startDate:moment(0)
    });
 })

 

test("src/action/filters :::::::: sortByAmount ",()=>{
    const action=sortByAmount();
    expect(action).toEqual({
     type:"SORT_BY_AMOUNT"
   });
 })


 test("src/action/filters :::::::: sortByDate ",()=>{
    const action=sortByDate();
    expect(action).toEqual({
     type:"SORT_BY_DATE"
   });
 })
  
 test("src/action/filters :::::::: setTextFilter default ",()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text:""
     });
})

test("src/action/filters :::::::: setTextFilter user provided ",()=>{
    const text="harish";
    const action=setTextFilter(text);
    expect(action).toEqual({
        type:"SET_TEXT_FILTER",
        text
     });
})