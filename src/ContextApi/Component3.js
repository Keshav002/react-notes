import React from 'react'
import { Fname, Lname } from './TestContext'

function Component3() {
    return (
        <div>
            <Fname.Consumer>
                {(fname) => {
                    return( <Lname.Consumer>
                        {(lname) => {
                            return <h1>This is {fname} {lname}</h1>
                        }}
                    </Lname.Consumer>)
                }}
            </Fname.Consumer>

        </div>
    )
}

export default Component3
