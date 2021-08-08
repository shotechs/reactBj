import React from 'react'
import { useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function User({ setUser, loggedInStatus, user, setLoggedInStatus }) {

    const [errMes, setErrMes] = useState("");


    useEffect(() => {




    }, [])

    const Update_user = () => {
        // alert('Error: ' + password + repeatPassword);

        // if (password === repeatPassword) {
        //     setErrMes('')
        //     getUser()
        //     if (userId !== "") {
        //         alert('userId: ' + userId + 'username: ' + username + 'email: ' + email + 'cash: ' + cash);

        //         //   history.push('/profile')
        //     }
        // } else {
        //     setErrMes('Error: Password does not match repeat Password')
        //     alert(errMes);
        // }
    }




    const UsernameChange = (event) => {

        //setUser(user.username + event.target.value)
        setUser(event.target.value)
        console.log(user.username)
    }


    const EmailChange = (event) => {
        user.email = event.target.value
        console.log(user.email)
    }


    const zip_code_Change = (event) => {
        user.zip_code = event.target.value
        console.log(user.zip_code)
    }



    const user_image_Change = (event) => {
        user.user_image = event.target.value
        console.log(user.user_image)
    }


    const state_Change = (event) => {
        user.state = event.target.value
        console.log(user.state)
    }



    const moneyType_Change = (event) => {
        user.moneyType = event.target.value
        console.log(user.moneyType)
    }



    const lastName_Change = (event) => {
        user.lastName = event.target.value
        console.log(user.lastName)
    }



    const firstName_Change = (event) => {
        user.firstName = event.target.value
        console.log(user.firstName)
    }



    const city_Change = (event) => {
        user.city = event.target.value
        console.log(user.city)
    }



    const address_line_2_Change = (event) => {
        user.address_line_2 = event.target.value
        console.log(user.address_line_2)
    }



    const address_line_1_Change = (event) => {
        user.address_line_1 = event.target.value
        console.log(user.address_line_1)
    }


    const BioChange = (event) => {
        user.bio = event.target.value
        console.log(user.bio)
    }


    //api

    function handleErrors(response) {
        if (!response.ok) {
            // setErrMes(response.text())
            if (response.status === 400) {

                const msg1 = response.json().then(msg => {
                    // console.log(msg.msg);
                    setErrMes(msg.msg)
                })

                //  console.log("Fetch error 400 ", msg1);
                return response.statusText
            }
            throw Error(response.statusText);
        }
        return response;
    }
    const getUpdateUserUrl = "http://localhost:5000/api/user/updateuser/";
    const UpdateUser = async () => {
        const data = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            moneyType: user.moneyType,
            address_line_1: user.address_line_1,
            address_line_2: user.address_line_2,
            city: user.city,
            state: user.state,
            zip_code: user.zip_code,
            bio: user.bio,
            user_image: user.user_image
        }
        const res = await fetch(getUpdateUserUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        ).then(handleErrors).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                user = data

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

    }








    return (
        <>
            {/* <!-- Website Overview --> */}
            <div className="card card-default">
                <div className="card-heading main-color-bg">
                    <h3 className="card-title">Website Overview {user.userId}</h3>
                </div>
                <div className="card-body">

                    <div className="row ">
                        <div className="alert-danger">{errMes}</div>
                        <Form className="" onSubmit={() => Update_user} >
                            <Form.Row>
                                <Form.Group controlId="Username" className="col">
                                    <Form.Label className="sr-only">Display Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Username"
                                        name="Username"
                                        required
                                        aria-label="Username"
                                        minLength="3"
                                        maxLength="30"
                                        value={user.username}
                                        title="Must contain at least 3-30 characters"
                                        aria-describedby="basic-addon1"
                                        onChange={UsernameChange}
                                    // onChange={this.handleInput1Change}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="email" className="col">
                                    <Form.Label
                                        className="sr-only">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        required
                                        minLength="5"
                                        maxLength="50"
                                        value={user.email}
                                        title="Must contain at least 5 characters"
                                        name="email" onChange={EmailChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="bio" className="col">
                                    <Form.Label>Enter something about you</Form.Label>
                                    <Form.Control as="textarea" rows={10}
                                        value={user.bio}
                                        onChange={BioChange}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="address_line_1" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Address Line 1"
                                        name="address_line_1"
                                        aria-label="address_line_1"
                                        maxLength="200"
                                        title="Max 200 characters"
                                        value={user.address_line_1}
                                        aria-describedby="basic-addon1" onChange={() => address_line_1_Change} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="address_line_2" className="col">

                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Address Line 2"
                                        name="address_line_2"
                                        aria-label="address_line_2"
                                        maxLength="200"
                                        value={user.address_line_2}
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => address_line_2_Change} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="city" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter City"
                                        name="city"
                                        aria-label="city"
                                        maxLength="200"
                                        value={user.city}
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => city_Change} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="firstName" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter First Name"
                                        name="firstName"
                                        aria-label="firstName"
                                        maxLength="200"
                                        value={user.firstName}
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => firstName_Change} />

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="lastName" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Last Name"
                                        name="lastName"
                                        aria-label="lastName"
                                        maxLength="200"
                                        value={user.lastName}
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => lastName_Change} />

                                </Form.Group>
                            </Form.Row>
                            {/* <Form.Row>
                                <Form.Group controlId="moneyType" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="moneyType"
                                        name="moneyType"
                                        aria-label="moneyType"
                                        maxLength="200"
                                        value={moneyType}
                                        title="Max 200 characters"
                                        aria-describedby="basic-addon1" onChange={() => moneyType_Change} />
                                </Form.Group>
                            </Form.Row> */}
                            <Form.Row>
                                <Form.Group controlId="state" className="col">


                                    <select name="bill-state" className="form-select" aria-label="select state" onChange={() => state_Change} value={user.state}><option value="">Select State</option><option value="AK">AK</option><option value="AL">AL</option><option value="AR">AR</option><option value="AZ">AZ</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DC">DC</option><option value="DE">DE</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="IA">IA</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="MA">MA</option><option value="MD">MD</option><option value="ME">ME</option><option value="MI">MI</option><option value="MN">MN</option><option value="MO">MO</option><option value="MS">MS</option><option value="MT">MT</option><option value="NC">NC</option><option value="ND">ND</option><option value="NE">NE</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NV">NV</option><option value="NY">NY</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VA">VA</option><option value="VT">VT</option><option value="WA">WA</option><option value="WI">WI</option><option value="WV">WV</option><option value="WY">WY</option><option value="AA">AA</option><option value="AE">AE</option><option value="AP">AP</option><option value="AS">AS</option><option value="FM">FM</option><option value="GU">GU</option><option value="MH">MH</option><option value="MP">MP</option><option value="PR">PR</option><option value="PW">PW</option><option value="VI">VI</option></select>




                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group controlId="password" className="col">
                                    <Form.Control
                                        type="text"
                                        placeholder="User Image"
                                        name="user_image"
                                        aria-label="user image"
                                        value={user.user_image}
                                        aria-describedby="basic-addon1" onChange={() => user_image_Change} />
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Select User Image</label>
                                        <input className="form-control" type="file" id="formFile" onChange={() => user_image_Change} value={user.user_image} />
                                    </div>
                                </Form.Group>
                            </Form.Row>




                            <Form.Row>
                                <Form.Group controlId="zip_code" className="col">

                                    <Form.Control type="text"
                                        pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                                        placeholder="Enter Zip Code"
                                        name="zip code"
                                        aria-label="zip code"
                                        maxLength="15"
                                        value={user.zip_code}
                                        title="Max 15 characters"
                                        aria-describedby="basic-addon1" onChange={() => zip_code_Change}

                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid zip.
                                    </Form.Control.Feedback>

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

export default User