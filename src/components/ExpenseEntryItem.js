import React from "react";
import "./ExpenseEntryItem.css";
import styles from "./ExpenseEntryItem.module.css";
import FormattedMoney from "./FormattedMoney";
import FormattedDate from "./FormattedDate";

class ExpenseEntryItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        debugger;
        return(
        <div className="ee_items">
            <div><p className={styles.hidden}>1</p></div>
            <div><b>Item:</b> <em>{this.props.items.item}</em></div>
            <div><b>Amount:</b> <em>$<FormattedMoney value={this.props.items.amount}/></em></div>
            <div><b>Spend Date:</b><em><FormattedDate value={this.props.items.spend_date}/></em></div>
            <div><b>Category:</b> <em>{this.props.items.category}</em></div>
         </div>
        );
    }
}

export default ExpenseEntryItem;