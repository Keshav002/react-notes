import React, { useEffect, useState } from 'react'

function ChangeTitle() {
    const [num, setnum] = useState(0);
    useEffect(() => {
       document.title = `Yuo Clicked ${num} Times`;
    },)
    return (
        <div className="changeTitle">
        <button onClick={()=>{setnum(num+1)}}>Click me {num}</button>

            
        </div>
    )
}

export default ChangeTitle
