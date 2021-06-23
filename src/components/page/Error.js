import React from 'react'
import { Link } from 'react-router-dom'


function Error() {


    return (

        <div className="row">
            <div className="col">
                <h1>Error Page 404</h1>
                <Link to="/">Go to Login</Link>
            </div>
        </div>
    )
}

export default Error