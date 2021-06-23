import React from 'react'
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Setting({ email, cash, moneyType, userId, setCash, setemail, username, setUsername, setuserId, setMoneyType }) {
    const Register = (event) => {

    }


    const UsernameChange = (event) => {
        //   setusername1(event.target.value)
    }


    const EmailChange = (event) => {
        //   setemail1(event.target.value)
    }


    return (
        <>
            {/* <!-- Website Overview --> */}
            <div className="card card-default">
                <div className="card-heading main-color-bg">
                    <h3 className="card-title">Setting</h3>
                </div>
                <div className="card-body">

                    <div className="row ">

                        <Form className="" onSubmit={() => Register} >
                            <Form.Row>
                                <Form.Group controlId="Username" className="col">
                                    <Form.Label className="sr-only">Display Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="User Name"
                                        name="Username"
                                        required
                                        aria-label="Username"
                                        minLength="3"
                                        maxLength="30"
                                        title="Must contain at least 3-30 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="email" className="col">
                                    <Form.Label
                                        className="sr-only">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        required
                                        minLength="5"
                                        maxLength="50"
                                        title="Must contain at least 5 characters"
                                        name="email" onChange={() => EmailChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="bio"
                                        name="bio"
                                        aria-label="bio"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="address_line_1"
                                        name="address_line_1"
                                        aria-label="address_line_1"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">

                                    <Form.Control
                                        type="text"
                                        placeholder="address_line_2"
                                        name="address_line_2"
                                        aria-label="address_line_2"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="city"
                                        name="city"
                                        aria-label="city"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="firstName"
                                        name="firstName"
                                        aria-label="firstName"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="lastName"
                                        name="lastName"
                                        aria-label="lastName"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="moneyType"
                                        name="moneyType"
                                        aria-label="moneyType"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="state"
                                        name="state"
                                        aria-label="state"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="user_image"
                                        name="user_image"
                                        aria-label="user_image"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="zip_code"
                                        name="zip_code"
                                        aria-label="zip_code"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => UsernameChange} />


                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="submit" className="text-center mb-0 d-grid gap-2 ">
                                <Button variant="primary" type="submit">
                                    Update User
                            </Button>
                            </Form.Group>
                        </Form>






                    </div>
                </div>
            </div>

        </>
    )
}

export default Setting