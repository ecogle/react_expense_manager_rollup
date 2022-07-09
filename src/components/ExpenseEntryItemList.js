import React from "react";
import FormattedMoney from "./FormattedMoney";
import FormattedDate from "./FormattedDate";


class ExpenseEntryItemList extends React.Component{
    constructor(props){
        super(props);
        this.handleMouseEnter = this.handleMouseEnter.bind();
        this.handleMouseLeave = this.handleMouseLeave.bind();
        this.handleMouseOver = this.handleMouseOver.bind();
    }
    handleMouseEnter(e){
        e.target.parentNode.classList.add("highlight");
    }

    handleMouseLeave(e){
        e.target.parentNode.classList.remove("highlight");
    }

    handleMouseOver(e){
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }
    render(){
        const lists = this.props.items.map( (k) =>
            <tr key={k.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onMouseOver={this.handleMouseOver}>
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