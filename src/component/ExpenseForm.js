import "react-dates/initialize";
import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state={
        description:'',
        note:'',
        amount:'',
        createAt:moment(),
        calendarFocused: false
    };
    handleDiscriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}));
    }
    handleNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}));
    }
    handleAmountChange=(e)=>{
        const amount=e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){ //regular expression,詳看notion筆記
            this.setState(()=>({amount}))
        }
    }
    handleDateChange=(createAt)=>{
        this.setState(()=>({createAt}))
    }
    handleFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused:focused}))
    }
    render(){
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.handleDiscriptionChange}
                    />
                    <input
                    type="number"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.handleAmountChange}
                    />
                    <SingleDatePicker
                    date={this.state.createAt}
                    onDateChange={this.handleDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.handleFocusChange}
                    numberOfMonths={1} //一次顯示幾個月
                    isOutsideRange={()=>false} 
                    />
                    <textarea
                    placeholder="Add a note for your expense...(optional)"
                    value={this.state.note}
                    onChange={this.handleNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}