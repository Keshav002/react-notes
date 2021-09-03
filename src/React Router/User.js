import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {fname, lname} = useParams();
    return (
        <div>
            <h1>This is User page</h1>
            <h1>The name of user is {fname} {lname}</h1>
        </div>
    )
}

export default User
