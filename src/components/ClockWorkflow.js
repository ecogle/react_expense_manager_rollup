import React from "react";

class ClockWorkflow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
        
    }

    componentDidMount(){
        alert("Component Mounted");
        this.setTimeRef = setInterval(()=> this.setTime(),1000);
    }

    componentWillUnmount(){
        alert("Component Unmounted");
        clearInterval(this.setTimeRef);
    }
    setTime(){
        console.log(this.state.date);
        this.setState(() => (
            {
                date: new Date(),
            }
            )
        );
    }

    render(){
        return (
            <div className="normal-clock">
                <p>The current time is {this.state.date.toString()}</p>
            </div>
        )
    }
}

export default ClockWorkflow;