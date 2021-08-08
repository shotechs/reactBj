import React from 'react'
import Login from '../accounts/Login'
import Container from "react-bootstrap/Container";

function Home({ setUser, loggedInStatus, user, setLoggedInStatus }) {
    return (
        <>
            <Container className="home">
                <h1>Home Page {user.userId}</h1>
                <Login
                    setLoggedInStatus={setLoggedInStatus} setUser={setUser} user={user}></Login>
            </Container>
        </>
    )
}

export default Home