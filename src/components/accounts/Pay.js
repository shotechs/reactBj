import React from 'react'
import Container from "react-bootstrap/Container";

function Pay({ email, cash, moneyType, userId, setCash, setemail, username, setUsername, setuserId, setMoneyType }) {

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
                                    <button href="#" className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card  border-dark" >
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-header">
                                    $10 Coins
</div>
                                <div className="card-body">
                                    <h5 className="card-title"> $20 Coins</h5>
                                    <p className="card-text"></p>
                                    <button href="#" className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="card  border-dark" >
                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                <div className="card-header">
                                    $10 Coins
</div>
                                <div className="card-body">
                                    <h5 className="card-title"> $50 Coins</h5>
                                    <p className="card-text"></p>
                                    <button href="#" className="btn btn-primary">Buy Now</button>
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