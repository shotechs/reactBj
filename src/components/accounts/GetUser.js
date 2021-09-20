import { HandleErrors } from "../helpers/errors";

function GetUser(setLoggedInStatus, setUser, setErrMes) {
  const getUpdateUserUrl = "http://localhost:5000/api/user/userUpdate/";

  const getEmail = JSON.parse(localStorage.getItem("user")).email;
  const data = {
    email: getEmail,
  };
  fetch(getUpdateUserUrl, {
    method: "POST",
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
    .then(HandleErrors)
    .then((response) => response.json())
    .then((data) => {
      if (data !== undefined) {
        setLoggedInStatus(data.auth);
        setUser(data.user);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        //console.log("getUser");
      }
    })
    .catch((error) => {
      //console.error("Error:", error);
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

  //console.log("getUser Done");
}

export default GetUser;
