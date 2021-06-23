import React from 'react'
import Button from '../Button'

function SignUpBtn({ onClick, disabledBtn }) {



    return (
        <div className="signUpDiv d-inline p-2 ms-1">
            <Button
                css={"btn btn-danger btn-block signUpBtn"}
                text={"Sign Up"}
                onClick={onClick}
                disabledBtn={disabledBtn}
            />


        </div>
    )
}

export default SignUpBtn
