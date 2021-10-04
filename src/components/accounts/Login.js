//import React, { createContext, useReducer, useEffect } from 'react';
import React, { createContext, useEffect } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../logo.svg";
import { useHistory } from "react-router-dom";
import { HandleErrors } from "../helpers/errors";
//import Toasty from '../Toasty';

// import { usersReducer } from '../../reducers/userReducer';
// import { usersReducer } from '../../reducers/userReducer';

export const GameContext = createContext();

function Login({
  setUser,
  loggedInStatus,
  user,
  setLoggedInStatus,
  token,
  setToken,
}) {
  // const [users, dispatch] = useReducer(usersReducer, [], () => {
  //     const localData = localStorage.getItem('username');
  //     return localData ? JSON.parse(localData) : [];
  // });
  // useEffect(() => {
  //     localStorage.setItem('users', JSON.stringify(user));
  // }, [user]);

  const appst = "assets/icons/appStore.png";
  const playst = "assets/icons/gPlay.png";
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errMes, setErrMes] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (user) {
      if (user.cash <= 0) {
        //go to pay
        //   console.log("cash")
        history.push("/profile");
      } else {
        //go to game
        // console.log("game")
        history.push("/game");
      }
    }
  });

  const SignIn = (event) => {
    getUser();
    //  dispatch('ADD_USER')
    event.preventDefault();
  };

  const EmailChange = (event) => {
    setEmail(event.target.value);
  };

  const Password = (event) => {
    setpassword(event.target.value);
  };

  const getloginUrl = " http://localhost:5000/api/user/login/";
  const getUser = async () => {
    const data = {
      email: email,
      password: password,
    };

    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Credentials", "true");
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    headers.append(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    );

    const res = await fetch(getloginUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(HandleErrors)
      .then((response) => response.json())
      .then((data) => {
        setLoggedInStatus(data.auth);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrMes(error.toString());
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
      <div className="container">
        <div className="row ">
          <div className="col-6 d-none d-lg-block p1p">
            <Logo className="img-thumbnail w95p" alt="Logo"></Logo>
          </div>
          <div className="col border align-self-center bg-light mt-8p mb-8p ml1p">
            <div className="alert-danger">{errMes}</div>
            <form onSubmit={SignIn}>
              <h1 className="input-group mb-3 justify-content-center">
                BlackJack
              </h1>
              <p className="input-group mb-3 justify-content-center">
                Login Here
              </p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  required
                  minLength="3"
                  maxLength="30"
                  aria-label="User email"
                  aria-describedby="basic-addon1"
                  onChange={EmailChange}
                />
              </div>
              <div className="input-group  mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="inputPassword"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  minLength="6"
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8-30 characters"
                  onChange={Password}
                />
              </div>
              <div className="input-group mb-3 text-center d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
            <hr></hr>
            <div className="input-group mb-3 justify-content-center">
              <Link to="/forgot">
                <p>
                  Forgot password?
                  <FaQuestionCircle className={"FaQuestionCircle"} />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row  ">
          <div className="col offset-lg-6 tc">
            <p className="d-inline  ">Don't have an account? </p>
            <Link to="/reg" className="btn btn-secondary bg-dark ">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="row  offset-lg-6">
          {" "}
          <div className="row tc">
            {" "}
            <h4> Get the app.</h4>{" "}
          </div>
          <div className="row ">
            <div className="col  ">
              <img src={appst} alt="Logo" className="img-thumbnail" />
            </div>
            <div className="col  ">
              <img src={playst} alt="Logo" className="img-thumbnail" />
            </div>
          </div>
        </div>

        {/* <Toasty>We now have Toasts <span role="img" aria-label="tada">🎉</span></Toasty> */}
      </div>
    </>
  );
}

export default Login;
