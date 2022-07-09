import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props); 
        this.num = 0;      
        this.state={
            "tick": this.num,
        }
        setInterval(()=> this.setTick(),100);
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
                <p>{this.state.tick}</p>
            </div>
        )
    }
}

export default Counter;