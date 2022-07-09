import React from "react";
import "./ExpenseEntryItem.css";

class ExpenseEntryItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        debugger;
        return(
        <div className="ee_items">
            <div><b>Item:</b> <em>{this.props.items.item}</em></div>
            <div><b>Amount:</b> <em>{this.props.items.amount}</em></div>
            <div><b>Spend Date:</b> <em>{this.props.items.spend_date}</em></div>
            <div><b>Category:</b> <em>{this.props.items.category}</em></div>
         </div>
        );
    }
}

export default ExpenseEntryItem;