import React from "react";
import FormattedMoney from "./FormattedMoney";
import FormattedDate from "./FormattedDate";

class ExpenseEntryItemList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        debugger;
        const lists = this.props.items.map( (k) =>
            <tr key={k.id}>
                <td>{k.item}</td>
                <td><FormattedMoney value={k.amount}/></td>
                <td><FormattedDate value={new Date(k.spend_date).toDateString()}/></td>
                <td>{k.category}</td>
            </tr>
        );

        return(
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {lists}
                </tbody>
            </table>
        );
    }
}

export default ExpenseEntryItemList;