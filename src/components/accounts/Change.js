import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Change({
  user,
  email,
  cash,
  moneyType,
  userId,
  setCash,
  setemail,
  username,
  setUsername,
  setuserId,
  setMoneyType,
}) {
  //todo Update Password

  const PasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const RepeatPasswordChange = (event) => {
    setrepeatPassword(event.target.value);
  };

  const [password, setpassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");
  const [errMes, setErrMes] = useState("");

  const Update_userPassword = (event) => {
    event.preventDefault();

    if (password === repeatPassword) {
      UpdateUserPassword();
    } else {
      setErrMes("password error match");
      console.error("password error match");
    }
  };

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

  const getUpdateUserPasswordUrl =
    "http://localhost:5000/api/users/userUpdatePassword/";
  const UpdateUserPassword = async () => {
    const data = {
      email: user.email,
      password: password,
    };
    const res = await fetch(getUpdateUserPasswordUrl, {
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
        localStorage.setItem("token", data.token);
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
      {/* <!-- Website Overview --> */}
      <div className="card card-default">
        <div className="card-heading main-color-bg">
          <h3 className="card-title">Change</h3>
        </div>
        <div className="card-body">
          <div className="row ">
            <div className="alert-danger">{errMes}</div>
            <Form className="" onSubmit={() => Update_userPassword}>
              <Form.Row>
                <Form.Group controlId="password" className="col ">
                  <Form.Control
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    name="password"
                    minLength="6"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8-30 characters"
                    required
                    onChange={() => PasswordChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group controlId="RepeatPassword" className="col">
                  <Form.Control
                    className="form-control"
                    type="password"
                    placeholder="Repeat Password"
                    aria-label="Repeat Password"
                    aria-describedby="basic-addon1"
                    name="repeatPassword"
                    required
                    onChange={() => RepeatPasswordChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group
                controlId="submit"
                className="text-center mb-0 d-grid gap-2 "
              >
                <Button variant="primary" type="submit">
                  Update Password
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Change;
