
import React from 'react'
import { useState, } from 'react'

function Test({ setUser, loggedInStatus, user, setLoggedInStatus, token,
    setToken }) {
    const [errMes, setErrMes] = useState("");
    const Start = (event) => {
        getTest()

        //alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

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



    const getloginUrl = " http://localhost:5000/api/user/test/";
    const getTest = async () => {
        // const data = {
        //     username: username1,
        //     password: password
        // }
        const res = await fetch(getloginUrl, {
            method: 'GET',
            headers: {
                "auth-token": localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            //  body: JSON.stringify(data),
        }
        ).then(handleErrors).then(response => response.json())
            .then(data => {
                console.log('Success: TEST', data);
                // setUser(data)
            },
            )
            .catch((error) => {
                console.error('Error:', error);
                if (typeof error.json === "function") {
                    error.json().then(jsonError => {
                        console.log("Json error from API");
                        console.log(jsonError);
                    }).catch(genericError => {
                        console.log("Generic error from API");
                        console.log(error.statusText);
                    });
                } else {
                    console.log("Fetch error");
                    //  console.log(error);
                }
            });
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={Start}>Test</button>
        </div>
    )
}

export default Test
