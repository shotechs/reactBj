import React from 'react'
import { Link } from 'react-router-dom'
//import { FaQuestionCircle } from 'react-icons/fa'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ReactComponent as Logo } from '../logo.svg';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';



function Reg({ userId, username, email, cash, setCash, setemail, setusername, setuserId, setMoneyType }) {
    const appst = 'assets/icons/appStore.png';
    const playst = 'assets/icons/gPlay.png';
    const history = useHistory();
    const [username1, setusername1] = useState("");
    const [password, setpassword] = useState("");
    const [repeatPassword, setrepeatPassword] = useState("");
    const [email1, setemail1] = useState("");
    const [errMes, setErrMes] = useState("");

    const Register = () => {
        if (password === repeatPassword) {
            setErrMes('')
            getUser()
            if (userId !== "") {
                alert('userId: ' + userId + 'username: ' + username + 'email: ' + email + 'cash: ' + cash);
                history.push('/profile')
            }
        } else {
            setErrMes('Error: Password does not match repeat Password')
            alert(errMes);
        }
    }

    const UsernameChange = (event) => {
        setusername1(event.target.value)
    }

    const PasswordChange = (event) => {
        setpassword(event.target.value)
    }

    const RepeatPasswordChange = (event) => {
        setrepeatPassword(event.target.value)
    }

    const EmailChange = (event) => {
        setemail1(event.target.value)
    }

    function handleErrors(response) {
        if (!response.ok) {
            if (response.status === 400) {
                const msg1 = response.json().then(msg => {
                    setErrMes(msg.msg)
                })
                //return response.statusText
                return msg1
            }
            throw Error(response.statusText);
        }
        return response;
    }

    const getRegisterUrl = "http://localhost:5000/api/user/register/";
    const getUser = async () => {
        const data = {
            username: username1,
            email: email1,
            password: password,

        }
        const res = await fetch(getRegisterUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        ).then(handleErrors).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setusername(data.username)
                setCash(data.cash)
                setMoneyType(data.moneyType)
                setemail(data.email)
                setuserId(data._id)
            },
            )
            .catch((error) => {
                // console.error('Error:', error);

                if (typeof error.json === "function") {
                    error.json().then(jsonError => {
                        console.log("Json error from API");
                        console.log(jsonError);
                    }).catch(genericError => {
                        console.log("Generic error from API");
                        console.log(error.statusText);
                    });
                } else {
                    //  console.log("Fetch error");
                    //  console.log(error);
                }
            });
        return res;
    }




    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-6 d-none d-lg-block p1p ">
                        <Logo className="img-thumbnail w95p" alt="Logo" ></Logo>
                    </div>
                    <div className="col border align-self-center bg-light mt-8p mb-8p ml1p">
                        <div className="alert-danger">{errMes}</div>
                        <Form className="mb-2" onSubmit={() => Register} >
                            <h1 className="input-group mb-3 justify-content-center">BlackJack XXX</h1>
                            <h3 className="input-group mb-3 justify-content-center font-weight-light ">Register</h3>
                            <Form.Row>
                                <Form.Group controlId="Username" className="col-sm-12">
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
                                        aria-describedby="basic-addon1" onChange={UsernameChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="email">
                                <Form.Label
                                    className="sr-only">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    minLength="5"
                                    maxLength="50"
                                    title="Must contain at least 5 characters"
                                    name="email" onChange={EmailChange} />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group controlId="password" className="col-sm-6 ">
                                    <Form.Control
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        aria-label="Password" aria-describedby="basic-addon1"
                                        name="password"
                                        minLength="6"
                                        pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$"
                                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8-30 characters"
                                        required onChange={PasswordChange} />
                                </Form.Group>
                                <Form.Group controlId="RepeatPassword" className="col-sm-6 ">
                                    <Form.Control
                                        className="form-control"
                                        type="password"
                                        placeholder="Repeat Password"
                                        aria-label="Repeat Password" aria-describedby="basic-addon1"
                                        name="repeatPassword"
                                        required onChange={RepeatPasswordChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="submit" className="text-center mb-0 d-grid gap-2 ">
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form.Group>
                        </Form>
                        <p>By signing up, you agree to our&nbsp;
                            <Link to={{ pathname: "http://www.sholab.com" }} target="_blank" className="text-black">Terms</Link>
                            ,&nbsp; <Link to={{ pathname: "http://www.sholab.com" }} target="_blank" className="text-black">Data Policy</Link>
                            &nbsp;and&nbsp; <Link to={{ pathname: "http://www.sholab.com" }} target="_blank" className="text-black">Cookies Policy</Link> .</p>
                    </div>
                </div>

                <div className="row  offset-lg-6">   <div className="row tc">   <h4> Get the app.</h4>  </div>
                    <div className="row ">
                        <div className="col  ">
                            <img src={appst} alt="Logo" className="img-thumbnail" />
                        </div>
                        <div className="col  ">
                            <img src={playst} alt="Logo" className="img-thumbnail" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Reg
