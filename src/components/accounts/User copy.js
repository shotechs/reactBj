import React from 'react'
import Container from "react-bootstrap/Container";
import { useState, useEffect } from 'react'

function User({ email, cash, moneyType, userId, setCash, setemail, username, setUsername, setuserId, setMoneyType }) {
    return (
        <>
            {/* <!-- Website Overview --> */}
            <div className="card card-default">
                <div className="card-heading main-color-bg">
                    <h3 className="card-title">Website Overview</h3>
                </div>
                <div className="card-body">

                    <div className="row row-cols-1 row-cols-md-2 g-4">

                        <div className="col-md-3">
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">888</h5>
                                    <p className="card-text">Games</p>
                                    <button href="#" className="btn btn-primary">Go to Game</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card  border-dark" >
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-header">
                                    Games
  </div>
                                <div className="card-body">
                                    <h5 className="card-title">888</h5>
                                    <p className="card-text"></p>
                                    <button href="#" className="btn btn-primary">Go to Game</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> 33</h2>
                                <h4>Posts</h4>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="well dash-box">
                                <h2><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> 12,334</h2>
                                <h4>Visitors</h4>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default User