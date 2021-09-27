import React, { useEffect } from "react";
import { FaUsersCog, FaWallet, FaLock, FaTools } from "react-icons/fa";
import { useState } from "react";
import UserProfile from "./UserProfile";
import Pay from "./Pay";
import Change from "./Change";
import Setting from "./Setting";
import { useHistory } from "react-router-dom";

function Profile({
  setUserImage,
  userImage,
  setUser,
  loggedInStatus,
  user,
  setLoggedInStatus,
}) {
  const menuAct = "list-group-item active main-color-bg ";
  const menuNo = "list-group-item";
  //const [disabledBtn, setDisabledBtn] = useState(false);
  let disabledBtn = false;
  const [menuSelect, setMenuSelect] = useState("profile");
  const MenuSwitcher = (select) => {
    //  profile menu
    if (user.cash > 0) {
      if (select === "profile") {
        setMenuSelect("profile");
      } else if (select === "cash") {
        setMenuSelect("cash");
      } else if (select === "settings") {
        setMenuSelect("settings");
      } else if (select === "change") {
        setMenuSelect("change");
      }
    } else {
      setMenuSelect("cash");
    }
  };

  const history = useHistory();
//if no user in LC
useEffect(() => {
  if (!user) {
    //console.log("no user #44")
    history.push("/");
  }

  if (user.cash <= 0) {
    setMenuSelect("cash");
  }

});



  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                <span className="glyphicon glyphicon-cog" aria-hidden="true">
                  <FaTools />
                </span>{" "}
                Dashboard <small>Manage Your Settings</small>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section id="breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="active">
              Dashboard /{" "}
              {menuSelect.slice(0, 1).toUpperCase() +
                menuSelect.slice(1, menuSelect.length)}{" "}
              {menuSelect === "cash" ? user.cash : ""}
            </li>
          </ol>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="list-group">
                <button
                  onClick={() => MenuSwitcher("profile")}
                  className={menuSelect === "profile" ? menuAct : menuNo}
                  disabled={disabledBtn}
                >
                  <FaUsersCog className="icon" /> Edit Profile
                </button>

                <button
                  onClick={() => MenuSwitcher("cash")}
                  className={menuSelect === "cash" ? menuAct : menuNo}
                  disabled={disabledBtn}
                >
                  <FaWallet className="icon" /> Buy Tokens
                </button>

                <button
                  onClick={() => MenuSwitcher("settings")}
                  className={menuSelect === "settings" ? menuAct : menuNo}
                  disabled={disabledBtn}
                >
                  <FaUsersCog className="icon" /> Settings
                </button>

                <button
                  onClick={() => MenuSwitcher("change")}
                  className={menuSelect === "change" ? menuAct : menuNo}
                  disabled={disabledBtn}
                >
                  <FaLock className="icon" /> Change Password
                </button>
              </div>
            </div>
            <div className="col-md-9 cBody">
              {menuSelect === "profile" ? (
                <UserProfile
                  setUserImage={setUserImage}
                  userImage={userImage}
                  setLoggedInStatus={setLoggedInStatus}
                  setUser={setUser}
                  user={user}
                  loggedInStatus={loggedInStatus}
                ></UserProfile>
              ) : (
                ""
              )}
              {menuSelect === "cash" ? (
                <Pay
                  setLoggedInStatus={setLoggedInStatus}
                  user={user}
                  setUser={setUser}
                ></Pay>
              ) : (
                ""
              )}
              {menuSelect === "settings" ? <Setting></Setting> : ""}
              {menuSelect === "change" ? <Change></Change> : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
