import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Forgot() {


    const logo = 'assets/icons/512x512.png';
    const appst = 'assets/icons/appStore.png';
    const playst = 'assets/icons/gPlay.png';


    return (
        <>
            <div className="container">

                <div className="row ">
                    <div className="col-6 border bg-light  d-none d-lg-block">
                        <img src={logo} alt="Logo" class="img-thumbnail loginLogo" />
                    </div>

                    <div className="col border align-self-center bg-light mt-8p mb-8p ml1p">
                        <form>
                            <h1 class="input-group mb-3 justify-content-center">BlackJack XXX</h1>
                            <p class="input-group mb-3 justify-content-center">Forgot Here</p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group  mb-3">

                                <input type="password" class="form-control" placeholder="Password" id="inputPassword3" />

                            </div>

                            <div class="input-group mb-3 justify-content-center">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>

                        </form>
                        <hr></hr>
                        <div class="input-group mb-3 justify-content-center">
                            <p>Forgot password?

                            <FaQuestionCircle

                                    className={"FaQuestionCircle"}
                                />
                            </p>

                        </div>
                    </div>


                </div>
                <div className="row  ">
                    <div className="col offset-lg-6 tc">
                        <p className="d-inline  ">Don't have an account? </p>
                        <Link to="/reg" className="btn btn-secondary bg-dark ">Sign Up</Link>
                    </div>
                </div>



                <div className="row  offset-lg-6">   <div className="row tc">   <h4> Get the app.</h4>  </div>
                    <div className="row ">
                        <div className="col  ">
                            <img src={appst} alt="Logo" class="img-thumbnail" />
                        </div>
                        <div className="col  ">
                            <img src={playst} alt="Logo" class="img-thumbnail" />
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}

export default Forgot