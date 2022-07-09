import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props); 
        this.num = 0;      
        this.state={
            "tick": this.num,
        }
        setInterval(()=> this.setTick(),1000);
    }

    setTick(){
        let num = this.num++;
        this.setState((state,props) => ({
            "tick":num++,
        }));
    }

    render(){
        return(
            <div className="counter">
                <h3>Custom Counter</h3>
                <p>Counter: {this.state.tick}</p>
            </div>
        )
    }
}

export default Counter;