import React from "react";
import { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function UserProfile({ setUser, user, setLoggedInStatus }) {
  const [errMes, setErrMes] = useState("");
  const [fallback, setFallback] = useState(false);
  const imageSrc = useRef(localStorage.getItem("userImage"));

  useEffect(() => {}, []);

  const reloadSrc = (e) => {
    if (fallback) {
      e.target.src = "/img/blank_profile.png";
    } else {
      e.target.src = imageSrc;
      setFallback(true);
    }
  };

  const user_image_Change = (event) => {
    //load reader
    const reader = new FileReader();

    // on load add file to lS
    reader.addEventListener("load", () => {
      localStorage.setItem("userImage", reader.result);
    });
    //read Url file
    if (reader.readAsDataURL(event.target.files[0])) {
      imageSrc.current = localStorage.getItem("userImage");
    }
  };

  const Update_user = (event) => {
    event.preventDefault();
    UpdateUser();
  };

  const UsernameChange = (event) => {
    //TOdo check if user exist
    if (user) {
      setUser((user) => ({ ...user, username: event.target.value }));
    }
  };

  const EmailChange = (event) => {
    //check if user exist

    if (user) {
      setUser((user) => ({ ...user, email: event.target.value }));
    }
  };

  const zip_code_Change = (event) => {
    if (user) {
      setUser((user) => ({ ...user, zip_code: event.target.value }));
    }
  };

  const state_Change = (event) => {
    if (user) {
      setUser((user) => ({ ...user, state: event.target.value }));
    }
  };

  //   const moneyType_Change = (event) => {
  //     if (user) {
  //       setUser((user) => ({ ...user, moneyType: event.target.value }));
  //     }
  //   };

  const lastName_Change = (event) => {
    if (user) {
      setUser((user) => ({ ...user, lastName: event.target.value }));
    }
  };

  const firstName_Change = (event) => {
    if (user) {
      setUser((user) => ({ ...user, firstName: event.target.value }));
    }
  };

  const city_Change = (event) => {
    if (user) {
      setUser((user) => ({ ...user, city: event.target.value }));
    }
  };

  const address_line_2_Change = (event) => {
    if (user) {
      setUser((user) => ({ ...user, address_line_2: event.target.value }));
    }
  };

  const address_line_1_Change = (event) => {
    if (user) {
      setUser((user) => ({ ...user, address_line_1: event.target.value }));
    }
  };

  const BioChange = (event) => {
    if (user) {
      setUser((user) => ({ ...user, bio: event.target.value }));
    }
  };

  //api

  function handleErrors(response) {
    if (!response.ok) {
      if (response.status === 400) {
        const msg1 = response.json().then((msg) => {
          setErrMes(msg.msg);
        });
        return msg1;
      }
      throw Error(response.statusText);
    }
    return response;
  }
  const getUpdateUserUrl = "http://localhost:5000/api/users/userUpdate/";
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
      user_image: user.user_image,
    };
    const res = await fetch(getUpdateUserUrl, {
      method: "PATCH",
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers":
          "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
      },
      body: JSON.stringify(data),
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setLoggedInStatus(data.auth);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      })
      .catch((error) => {
        if (typeof error.json === "function") {
          error
            .json()
            .then((jsonError) => {
              console.log("Json error from API");
              console.log(jsonError);
            })
            .catch((genericError) => {
              console.log("Generic error from API");
              console.log(error.statusText);
            });
        }
      });
    return res;
  };

  return (
    <>
      <div className="card card-default">
        <div className="card-heading main-color-bg">
          <h3 className="card-title">Website Overview {user.username || ""}</h3>
        </div>
        <div className="card-body">
          <div className="row ">
            <div className="alert-danger">{errMes}</div>
            <Form className="" onSubmit={Update_user}>
              <Form.Row>
                <Form.Group controlId="Username" className="col">
                  <Form.Label className="sr-only">Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="Username"
                    required
                    disabled
                    aria-label="Username"
                    minLength="3"
                    maxLength="30"
                    value={user.username || ""}
                    pattern="^[a-zA-Z0-9]*$"
                    title="Alphabet (from A to Z) and the numbers 0 to 9 && Min 3 Max 30 characters"
                    aria-describedby="basic-addon1"
                    onChange={UsernameChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="email" className="col">
                  <Form.Label className="sr-only">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    required
                    disabled
                    minLength="5"
                    maxLength="50"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={user.email || ""}
                    title="Must contain at least 5 characters && email"
                    name="email"
                    onChange={EmailChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="bio" className="col">
                  <Form.Label>Enter something about you</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    maxLength="200"
                    title="Max 200 characters"
                    value={user.bio || ""}
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
                    aria-label="Address Line 1"
                    maxLength="200"
                    pattern="^\d+\s[A-z]+\s[A-z]+"
                    title="Alphabet (from A to Z) and the numbers 0 to 9 && Max 200 characters"
                    value={user.address_line_1 || ""}
                    aria-describedby="basic-addon1"
                    onChange={address_line_1_Change}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="address_line_2" className="col">
                  <Form.Control
                    type="text"
                    placeholder="Enter Address Line 2"
                    name="address_line_2"
                    aria-label="Address Line 2"
                    maxLength="200"
                    value={user.address_line_2 || ""}
                    pattern="[A-z0-9]+\s[A-z0-9\s]*"
                    title="Alphabet (from A to Z) and the numbers 0 to 9 && Max 200 characters"
                    aria-describedby="basic-addon1"
                    onChange={address_line_2_Change}
                  />
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
                    value={user.city || ""}
                    pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
                    title="Alphabet (from A to Z) and the numbers 0 to 9 && Max 200 characters & no space"
                    aria-describedby="basic-addon1"
                    onChange={city_Change}
                  />
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
                    value={user.firstName || ""}
                    pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
                    title="Alphabet (from A to Z) and the numbers 0 to 9 && Max 200 characters & no space"
                    aria-describedby="basic-addon1"
                    onChange={firstName_Change}
                  />
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
                    value={user.lastName || ""}
                    pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
                    title="Alphabet (from A to Z) and the numbers 0 to 9 & Max 200 characters & no space"
                    aria-describedby="basic-addon1"
                    onChange={lastName_Change}
                  />
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
                  <Form.Label>State</Form.Label>

                  <Form.Control
                    name="bill-state"
                    className="form-select"
                    aria-label="Select State"
                    as="select"
                    custom
                    onChange={state_Change}
                    defaultValue={user.state || "Select State"}
                  >
                    <option value="">Select State</option>
                    <option value="AK">AK</option>
                    <option value="AL">AL</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VA">VA</option>
                    <option value="VT">VT</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                    <option value="AA">AA</option>
                    <option value="AE">AE</option>
                    <option value="AP">AP</option>
                    <option value="AS">AS</option>
                    <option value="FM">FM</option>
                    <option value="GU">GU</option>
                    <option value="MH">MH</option>
                    <option value="MP">MP</option>
                    <option value="PR">PR</option>
                    <option value="PW">PW</option>
                    <option value="VI">VI</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group className="col">
                  <Image
                    src={imageSrc.current}
                    id="imgPreview"
                    className="img-thumbnail"
                    alt="Preview"
                    name="user_image"
                    aria-label="user image"
                    aria-describedby="basic-addon1"
                    onError={reloadSrc}
                    thumbnail
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/png, image/jpeg, image/apng, image/bmp, image/gif, image/pjpeg, image/svg+xml, image/tiff, image/webp, image/x-icon"
                    className="form-control"
                    onChange={user_image_Change}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group controlId="zip_code" className="col">
                  <Form.Control
                    type="text"
                    pattern="^[0-9]{5}(?:-[0-9]{4})?$"
                    placeholder="Enter Zip Code"
                    name="zip code"
                    aria-label="zip code"
                    maxLength="15"
                    value={user.zip_code || ""}
                    title="Zip Code && Max 15 numbers"
                    aria-describedby="basic-addon1"
                    onChange={zip_code_Change}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Group
                controlId="submit"
                className="text-center mb-0 d-grid gap-2 "
              >
                <Button variant="primary" type="submit">
                  Update User
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
