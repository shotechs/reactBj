"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _errors = require("../helpers/errors");

function GetUser(setLoggedInStatus, setUser, setErrMes) {
  var getUpdateUserUrl = "http://localhost:5000/api/user/userUpdate/";
  var getEmail = JSON.parse(localStorage.getItem("user")).email;
  var data = {
    email: getEmail
  };
  fetch(getUpdateUserUrl, {
    method: "POST",
    headers: {
      "auth-token": localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    },
    body: JSON.stringify(data)
  }).then(_errors.HandleErrors).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data !== undefined) {
      setLoggedInStatus(data.auth);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); //console.log("getUser");
    }
  })["catch"](function (error) {
    //console.error("Error:", error);
    setErrMes(error.toString());

    if (typeof error.json === "function") {
      error.json().then(function (jsonError) {
        console.log("Json error from API");
        console.log(jsonError);
      })["catch"](function (genericError) {
        console.log("Generic error from API");
        console.log(error.statusText);
      });
    }
  }); //console.log("getUser Done");
}

var _default = GetUser;
exports["default"] = _default;