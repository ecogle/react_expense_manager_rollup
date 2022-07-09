import React from "react";
import { ReactDOM } from "react";



function WidgetElement(props) {
    let string = "My name is";

    const name = props.name;
    const list = props.list;

    return(
        <div className="ee_name">
            <p>Hello {name}, here is my list: {list}</p>
        </div>
    )
    
}

export default WidgetElement;