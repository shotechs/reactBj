import React from 'react'
import { useState } from 'react'
import Button from '../custom/Button'
import { useHistory } from 'react-router-dom';

function Pay({ user, email, cash, moneyType, userId, setCash, setemail, username, setUsername, setuserId, setMoneyType,setUser,setLoggedInStatus }) {

    const [errMes, setErrMes] = useState("");
    const history = useHistory();
 
//button 10
   const add10 = () => {
        addCashUser(10);
      }
//button 20
const add20 = () => {
    addCashUser(20);
  }

//button 50
const add50 = () => {
    addCashUser(50);
  }
function handleErrors(response) {
    if (!response.ok) {
        if (response.status === 400) {
            const msg1 = response.json().then(msg => {
                setErrMes(msg.msg)
                alert(errMes);
            })
            //return response.statusText
            return msg1
        }
        throw Error(response.statusText);
    }
    return response;
}

const cashAddUrl = "http://localhost:5000/api/users/cashAdd";
const addCashUser = async (cash) => {
    const data = {
        email: user.email,
        cash: cash
    }


    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append("Access-Control-Allow-Origin", "*");
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    headers.append("Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


    const res = await fetch(cashAddUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    }).then(handleErrors).then(response => response.json())
        .then(data => {
            setLoggedInStatus(data.auth)
            setUser(data.user)
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))

            if (data.user.cash <= 0) {
                history.push('/profile')
            } else {
                //go to game
                history.push('/game')
            }
        })
        .catch((error) => {
            //alert(error);


            // if (error.message === "Unauthorized") {
            //     alert(error);
            //     history.push('/login')
            // }

            console.error('Error:', error.message);
            if (typeof error.json === "function") {
                error.json().then(jsonError => {
                    console.log("Json error from API");
                    console.log(jsonError);
                }).catch(genericError => {
                    console.log("Generic error from API");
                    console.log(error.statusText);
                });
            }
        });
    return res;
}



    return (
        <>
            {/* <!-- Website Overview --> */}
            <div className="card card-default">
                <div className="card-heading main-color-bg">
                    <h3 className="card-title">Buy Tokens</h3>
                </div>
                <div className="card-body">

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col-md-3">
                            <div className="card  border-dark" >
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-header">
                                    $10 Coins
</div>
                                <div className="card-body">
                                    <h5 className="card-title"> $10 Coins</h5>
                                    <p className="card-text"></p>
                                    <Button
        css={"btn btn-primary bet"}
        text={"Buy Now"}
        onClick={add10}
      />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card  border-dark" >
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-header">
                                    $20 Coins
</div>
                                <div className="card-body">
                                    <h5 className="card-title"> $20 Coins</h5>
                                    <p className="card-text"></p>
                                    <Button
        css={"btn btn-primary bet"}
        text={"Buy Now"}
        onClick={add20}
      />
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card  border-dark" >
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-header">
                                    $50 Coins
</div>
                                <div className="card-body">
                                    <h5 className="card-title"> $50 Coins</h5>
                                    <p className="card-text"></p>
                                    <Button
        css={"btn btn-primary bet"}
        text={"Buy Now"}
        onClick={add50}
      />
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default Pay