import React from "react";

const date = new Date().toTimeString();


class HelloWorld extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <p>The time is {date}</p>
            </div>
        );
    }
}

export default HelloWorld;