import React,{useState,useEffect} from "react";


function ClockUsingHooks(){
    const [currentDateTime, setCurrentDateTime]= useState(new Date());

    setInterval(() => setCurrentDateTime(new Date()), 1000);

    useEffect(
        () => {
           let setTime = () => {
              console.log("setTime is called");
              setCurrentDateTime(new Date());
           }
           let interval = setInterval(setTime, 1000);
           return () => {
              clearInterval(interval);
           }
        },
        []
     );

    return(
        <div className="clock-using-hooks">
            <p>This is the date from a functional stateful component</p>
            <p>Current Time is: {currentDateTime.toTimeString()}</p>
        </div>
    );
}

export default ClockUsingHooks;