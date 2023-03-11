import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { GoogleLogout } from 'react-google-login'
import { Link } from 'react-router-dom'

import './login.css'

const clientId = "1014785059938-nfjddqca3dqsrrr4b1bi66p8h5e3s5mq.apps.googleusercontent.com"

const Login = () => {
  const [activeUser, setActiveUser] = useState([])

  const [showMessage, setShowMessage] = useState(false)

  const onSuccess = (res) => {
    setShowMessage(!showMessage);
    setActiveUser(res.profileObj.email)
  }

  const onFailure = (res) => {
    console.error("Login Failed! res:", res);
  }

  const onLogOutSuccess = () => {
    setActiveUser('');
    setShowMessage('')
  }

  return (
    <div className='login'>
      <div className='login__wrapper'>
        <div className='login__title'>
          {showMessage ?
            <h1>
              {
                showMessage && `You logged in as ${activeUser}`
              }
              <br />
              <Link to="/main" style={{ textDecoration: "none", textAlign: "center", color: "#f0544f" }}>Go to App</Link>
            </h1>
            : <h1>Please log in</h1>
          }
        </div>
        <div className='login__buttons'>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onLogOutSuccess}
          />
        </div>
      </div>
    </div>
  )
}

export default Login