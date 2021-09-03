import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [num, incNum] = useState(0);
    const [num1, decNum] = useState(0);
    useEffect(() => {
        alert('You have clicked')    //UseEffect hook executes when our page changes or refreshes
    },[num]) //By lefting sq brackets empty useEffect executes onlu one time
    return (   //If I write num in sq brackets then it will execute only when num value is updated
        <div className="useEffect">
        <button onClick={(() => {incNum(num+1);})} > Inc Count {num} </button>
        <button onClick={(() => {decNum(num1-1);})} > Dec Count {num1} </button>
            
        </div>
    )
}

export default UseEffect
