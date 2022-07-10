import React from "react";
import FormattedMoney from "./FormattedMoney";
import FormattedDate from "./FormattedDate";
import Logger from "./Logger";

const logger = new Logger();

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
        logger.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
    }

    componentDidMount(){
        logger.log("ExpenseEntryItemList :: Initialize :: componentDidMount :: Component mounted");
    }

    shouldComponentUpdate(nextProps, nextState) {
        logger.log("ExpenseEntryItemList :: Update :: shouldComponentUpdate invoked :: Before update");
        return true;
     }
     static getDerivedStateFromProps(props, state) {
        logger.log("ExpenseEntryItemList :: Initialize / Update :: getDerivedStateFromProps :: Before update");
        return null;
     }
     getSnapshotBeforeUpdate(prevProps, prevState) {
        logger.log("ExpenseEntryItemList :: Update :: getSnapshotBeforeUpdate :: Before update");
        return null;
     }
     componentDidUpdate(prevProps, prevState, snapshot) {
        logger.log("ExpenseEntryItemList :: Update :: componentDidUpdate :: Component updated");
     }
     componentWillUnmount() {
        logger.log("ExpenseEntryItemList :: Remove :: componentWillUnmount :: Component unmounted");
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