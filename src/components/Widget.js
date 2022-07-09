import React from "react";
import mine from "./ExpenseEntryItem.module.css";


function WidgetElement(props) {
    let string = "My name is";

    const name = props.name;
    const list = props.list;

    return(
        <div className={mine.itemStyle}>
            <p>Hello {name}, here is my list: {list}</p>
        </div>
    )    
}

export default WidgetElement;