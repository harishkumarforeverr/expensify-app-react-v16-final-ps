import React from "react";
import {connect} from "react-redux";
import {DateRangePicker} from "react-dates";
import moment from "moment";
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from "../actions/Filter";

export class ExpenseListFilter extends React.Component{
    constructor(props){  
        super(props);
      this.state={ 
        focusedInput:null
      }
    }
    onDatesChange=({startDate,endDate})=>{ 
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onSearchInputChange=(e)=>{ 
        this.props.setTextFilter(e.target.value);
    }
    onSelectedTagChange=(e)=>{
        const text=e.target.value;
        if(text==='amount'){
         this.props.sortByAmount();
        }else if(text=="date"){
            this.props.sortByDate();
        }
    }
   render(){
       return (
        <div> 
            <input
            type="text"
            placeholder="search" 
            value ={this.props.filters.text} 
            name="textInput"
            onChange={this.onSearchInputChange}
            />
            <select 
            value={this.props.filters.sortBy}
             onChange={this.onSelectedTagChange}  >
                <option value="date">Date</option> 
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
             startDate={this.props.filters.startDate}
             startDateId="startDateId"
             endDate={this.props.filters.endDate}
             endDateId="endDateId"
             onDatesChange={this.onDatesChange}
             focusedInput={this.state.focusedInput}
             onFocusChange={focusedInput=>this.setState({ focusedInput })}
             numberOfMonths={1}
             isOutsideRange={()=>false}
             displayFormat="DD/MM/YYYY"
             showClearDates={true}
            />

        </div>
    )
   }
}
 
const mapStateToProps=(state)=>({
    filters:state.filters 
})
 
const mapPropsToState=(dispatch)=>({
    setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    setEndDate:(endDate)=>dispatch(setEndDate(endDate)), 
    sortByDate:()=>dispatch(sortByDate()),
    sortByAmount:()=>dispatch(sortByAmount()),
    setTextFilter:(text)=>dispatch(setTextFilter(text)) 
})
export default connect(mapStateToProps,mapPropsToState)(ExpenseListFilter);