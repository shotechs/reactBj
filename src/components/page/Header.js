import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import Button from './Button'
import { ReactComponent as Logo } from '../logo.svg';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'


const Header = ({ setUser, loggedInStatus, user, setLoggedInStatus, title }) => {

  const history = useHistory();
  const [userImage, setUserImage] = useState("https://github.com/mdo.png");
  const LogOut = () => {
    //console.log("LogOut");
    setUser("")
    history.push('/')
  }

  const Profile = () => {
    console.log("Profile");
    // setUser("")
    history.push('/profile')
  }


  useEffect(() => {
    // alert(user);
    if (user.user_image !== "") {
      //console.log("user_image: ", user.user_image);
      setUserImage(user.user_image)
    }
    else {
      setUserImage("https://github.com/mdo.png")
    }

  }, [user])

  return (
    <header className='header'>
      {/* <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}

 */}


      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">{title}</h4>
              <p className="text-muted">
                Email me and tell me what you think.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><Link to={{ pathname: "http://www.sholab.com" }} target="_blank" className="text-white">Follow on Twitter</Link></li>
                <li><Link to={{ pathname: "http://www.sholab.com" }} target="_blank" className="text-white">Like on Facebook</Link></li>
                <li>
                  <a href="mailto:shotechs@gmail.com" className="text-white"
                  >Email me</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">

          <Link to="/" className="navbar-brand d-flex align-items-center">
            <Logo />
            <strong>{title}</strong>
          </Link>

          {user !== "" ?
            (<div className="dropdown">
              <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">


                {user.user_image !== "" ? <img src={userImage} alt="" width="32" height="32" className="rounded-circle me-2" /> : <FaUserCircle size={32}  ></FaUserCircle>}


                &nbsp;
                <strong>{user.username}</strong></Link>

              <ul className="dropdown-menu  text-small shadow" aria-labelledby="dropdownUser1" >

                <li>
                  <Link to="#" onClick={Profile} className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link to="#" onClick={LogOut} className="dropdown-item">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>)
            : ""}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>


    </header>
  )
}

Header.defaultProps = {
  title: 'BlackJack Game',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
