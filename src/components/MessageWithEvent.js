import React from "react";

class MessageWithEvent extends React.Component{

    constructor(props){
        super(props);
        //passes extra information to the eventhandler
        this.logEventToConsole = this.logEventToConsole.bind(this, Math.floor(Math.random() * 10));
    }

    logEventToConsole(msgid,e){
        alert(msgid + " " + e.target.innerHTML);
    }

    render(){

        return(
            <div onClick={this.logEventToConsole}>
                <p>Hello {this.props.name}!</p>
            </div>
         );
    }
}

export default MessageWithEvent;