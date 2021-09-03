import React, {useState} from "react";

const GettingTime = () => {
    var time = new Date().toLocaleTimeString();
    // const [cTime, GetCtime] = useState("Click Button to get time");
    const [cTime, GetCtime] = useState(time);

    function UpdateTime(){
        time = new Date().toLocaleTimeString();
        GetCtime(time);
    }
    // setInterval(UpdateTime, 1000);
    return(
        <>
          <h1>{cTime}</h1>
          {/* <button onClick = {UpdateTime}>Get Time</button> */}

        </>
    )
}

export default GettingTime;