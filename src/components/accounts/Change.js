import React from 'react'
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Change({ email, cash, moneyType, userId, setCash, setemail, username, setUsername, setuserId, setMoneyType }) {

    const Register = (event) => {

    }


    const UsernameChange = (event) => {
        //     setusername1(event.target.value)
    }


    const EmailChange = (event) => {
        //      setemail1(event.target.value)
    }

    const PasswordChange = (event) => {
        setpassword(event.target.value)
    }

    const RepeatPasswordChange = (event) => {
        setrepeatPassword(event.target.value)
    }

    const [username1, setusername1] = useState("");
    const [password, setpassword] = useState("");
    const [repeatPassword, setrepeatPassword] = useState("");

    return (
        <>
            {/* <!-- Website Overview --> */}
            <div className="card card-default">
                <div className="card-heading main-color-bg">
                    <h3 className="card-title">Change</h3>
                </div>
                <div className="card-body">

                    <div className="row ">

                        <Form className="" onSubmit={() => Register} >
                            <Form.Row>
                                <Form.Group controlId="password" className="col ">
                                    <Form.Control
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        aria-label="Password" aria-describedby="basic-addon1"
                                        name="password"
                                        minLength="6"
                                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$"
                                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8-30 characters"
                                        required onChange={() => PasswordChange} />
                                </Form.Group></Form.Row>
                            <Form.Row>
                                <Form.Group controlId="RepeatPassword" className="col">
                                    <Form.Control
                                        className="form-control"
                                        type="password"
                                        placeholder="Repeat Password"
                                        aria-label="Repeat Password" aria-describedby="basic-addon1"
                                        name="repeatPassword"
                                        required onChange={() => RepeatPasswordChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="submit" className="text-center mb-0 d-grid gap-2 ">
                                <Button variant="primary" type="submit">
                                    Update Password
                            </Button>
                            </Form.Group>
                        </Form>






                    </div>
                </div>
            </div>

        </>
    )
}

export default Change