import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { login } from './Services'

const Login = (props) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userNameError, setUserNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [responseLogin, setResponseLogin] = useState('')

  const navigate = useNavigate()

  const manageLoggedUser = (data) => {
    if(data && data.username) {
        setResponseLogin("Welcome " + data.username + "!!!")
    } else {
        setResponseLogin(data + "!!!")
    }
  }

  const onButtonClick = () => {
    // Set initial error values to empty
    //setEmailError('')
    setUserNameError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    /*if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }*/

    if ('' === userName) {
        setUserNameError('Please enter your email')
        return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  
    /*if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }*/
    var payload = "username=" + userName + "&password=" + password;
    console.log(login(payload, manageLoggedUser))

  }

  return (
    !responseLogin ? (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                value={userName}
                placeholder="Enter your username here"
                onChange={(ev) => setUserName(ev.target.value)}
                className={'inputBox'}
                />
                <label className="errorLabel">{userNameError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                value={password}
                placeholder="Enter your password here"
                onChange={(ev) => setPassword(ev.target.value)}
                className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
            </div>
            </div>
    ) : (<div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>{responseLogin}</div>
            </div>
        </div>)
    
  )
}

export default Login