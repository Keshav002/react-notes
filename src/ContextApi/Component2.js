import React, { useContext } from 'react';
import Component3 from './Component3'
import {Fname, Lname} from './TestContext'
function Component2() {
    
     const fname = useContext(Fname)
     const lname = useContext(Lname)
    return (
        <div>
        <h1>This is {fname} {lname}</h1>   
        </div>                                          //Short way to use context api
    )
}

export default Component2
