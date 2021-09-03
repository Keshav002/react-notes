import React, { useState } from 'react';

const EventHandeling = () => {
    let color = "green";
    let tag = "Click Me";
     const[bg, SetBg] = useState(color);
     const[newtag, SetName] = useState(tag);
    const ChangeBg = () => {
        // console.log('clicked');
        SetBg(color="red");
        SetName(tag = "Clicked😎");
    }
    return (
        <>
        <div style={{background : bg}}>
        <button onClick={ChangeBg}><h1>{newtag}</h1></button>
        </div>
        </>
    );
}

export default EventHandeling;