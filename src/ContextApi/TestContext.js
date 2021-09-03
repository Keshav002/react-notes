import React, { createContext } from 'react'
import Component1 from './Component1'

const Fname = createContext()
const Lname = createContext()

function TestContext() {
    return (
        <>
            <Fname.Provider value={'Keshav'}>
            <Lname.Provider value={'Tayal2'}>
                <Component1 />
            </Lname.Provider>
            </Fname.Provider>
        </>
    );
};

export default TestContext;
export { Fname, Lname };
