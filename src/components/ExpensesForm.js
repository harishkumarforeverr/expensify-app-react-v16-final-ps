import React from 'react';
import "react-dates/initialize";
import {SingleDatePicker} from "react-dates";
import moment from "moment";
 
export default class ExpensesForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description:props.description?props.description:"",
            note:props.note?props.note:"",
            amount:props.amount?parseFloat(props.amount,10):"",
            createdAt:props.createdAt?moment(props.createdAt):moment(),
            error:undefined,
            focused:false
        }
    }
  onDescriptionChange=(e)=>{
    const description=e.target.value;
     this.setState(()=>({ 
         description
       }))
  }      
  onNoteChange=(e)=>{
    const note=e.target.value;
     this.setState(()=>({ 
         note
       }))
  }
  onAmountChange=(e)=>{
    const amount=e.target.value;
    if(amount.match(/^\d{1,}(\.\d{0,2})?$/) || !amount){
        this.setState(()=>({ 
            amount
          }))
    }
  }
  onSubmit=(e)=>{
        e.preventDefault(); 
        let error;
        if(!this.state.description.trim() || !this.state.amount){ 
            error="please enter amount and description";
            this.setState(()=>({ error }));
        }else{
          this.props.onSubmit({
              description:this.state.description,
              amount:this.state.amount,
              note:this.state.note,
              createdAt:this.state.createdAt
          })   
          this.setState(()=>({ error }));
        }
  }
  onDateChange=(createdAt)=>{
    if(createdAt){
        this.setState({createdAt})
    }
  }
  render(){
      return (
          <div> 
              {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.onSubmit}>
              <input 
                value={this.state.description}
                placeholder="Add a new Expense"
                type="text"
                name="add_input"
                autoFocus
                onChange={this.onDescriptionChange}
                /> 
                <input 
                value={this.state.amount}
                placeholder="amount"
                type="number"
                name="amount_input"
                onChange={this.onAmountChange}
                /> 
                <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.focused}
                onFocusChange={({focused})=> this.setState({focused}) }
                numberOfMonths={1}
                isOutsideRange={()=>false}
                displayFormat="DD/MM/YYYY"
                id="singleDatePicker_id"
                />
                <textarea
                value={this.state.note}
                placeholder="Add notes to your expenses(Optional !)"
                name="amount_input"
                onChange={this.onNoteChange}
                > 
                </textarea>
                <button> Add Expense </button>                 
              </form>
          </div>
      )
  }
}