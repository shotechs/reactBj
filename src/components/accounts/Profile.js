import React from 'react'
import { FaUsersCog, FaWallet, FaLock, FaTools } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UserProfile from './UserProfile';
import Pay from './Pay';
import Change from './Change';
import Setting from './Setting';
import { useHistory } from 'react-router-dom';



function Profile({ setUser, loggedInStatus, user, setLoggedInStatus }) {

    const history = useHistory();
    const [profilePlace, setProfilePlace] = useState("profile");
    const [menuAct, setMenuAct] = useState("list-group-item active main-color-bg ");
    const [menuNo, setMenuNo] = useState("list-group-item");
    const [menuSelect, setMenuSelect] = useState("profile");
    //const menuSelect= "profile"

    const checkCash = () => {

        return true

    }

    const MenuSwitcher = (select) => {
        //  profile menu
        // console.log(select)
        if (user.cash > 0) {
            if (select === "profile") {
                setMenuSelect("profile")
            } else if (select === "cash") {
                setMenuSelect("cash")
            }
            else if (select === "settings") {
                setMenuSelect("settings")
            }
            else if (select === "change") {
                setMenuSelect("change")
            }
        }
        else {
            setMenuSelect("cash")
        }

    }


    // const ProfileSwitcher = (select) => {
    //     //  profile menu
    //     if (select === "profile") {
    //         setMenuSelect("profile")
    //     } else if (select === "cash") {
    //         setMenuSelect("cash")
    //     }
    //     else if (select === "settings") {
    //         setMenuSelect("settings")
    //     }
    //     else if (select === "change") {
    //         setMenuSelect("change")
    //     }


    // }


    useEffect(() => {

        if (user === "") {
            //console.log("no user1") 
            history.push('/')
        }

        if (user.cash > 0) {
            //  profile menu
            if (profilePlace === "profile") {
                setMenuSelect("profile")
            } else if (profilePlace === "cash") {
                setMenuSelect("cash")
            }
            else if (profilePlace === "settings") {
                setMenuSelect("settings")
            }
            else if (profilePlace === "change") {
                setMenuSelect("change")
            }
            //   ProfileSwitcher()


            console.log(profilePlace);

            //  checkCash()

            setMenuSelect("profile")
        } else {
            setMenuSelect("cash")
        }
        // console.log(profilePlace);
    }, [])



    return (
        <>

            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>
                                <span className="glyphicon glyphicon-cog" aria-hidden="true">
                                    <FaTools />
                                </span> Dashboard <small>Manage Your Settings</small></h1>
                        </div>
                    </div>
                </div>
            </header>

            <section id="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="active">Dashboard / {menuSelect.slice(0, 1).toUpperCase() + menuSelect.slice(1, menuSelect.length)} {menuSelect === "cash" ? user.cash : ""}</li>
                    </ol>
                </div>
            </section>

            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="list-group">

                                <Link onClick={() => MenuSwitcher("profile")} to="/profile" className={menuSelect === "profile" ? menuAct : menuNo} >  <FaUsersCog className="icon" /> Edit Profile</Link>
                                <Link onClick={() => MenuSwitcher("cash")} to="/profile" className={menuSelect === "cash" ? menuAct : menuNo} >  <FaWallet className="icon" /> Buy Tokens</Link>
                                <Link onClick={() => MenuSwitcher("settings")} to="/profile" className={menuSelect === "settings" ? menuAct : menuNo} >  <FaUsersCog className="icon" /> Settings</Link>
                                <Link onClick={() => MenuSwitcher("change")} to="/profile" className={menuSelect === "change" ? menuAct : menuNo} >  <FaLock className="icon" /> Change Password</Link>

                            </div>
                        </div>
                        <div className="col-md-9 cBody">


                            {menuSelect === "profile" ?
                                <UserProfile setLoggedInStatus={setLoggedInStatus}
                                    setUser={setUser}
                                    user={user}
                                    loggedInStatus={loggedInStatus}
                                ></UserProfile> : ""}
                            {menuSelect === "cash" ? <Pay></Pay> : ""}
                            {menuSelect === "settings" ? <Setting></Setting> : ""}
                            {menuSelect === "change" ? <Change></Change> : ""}



                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Profile
