import React, { useState } from 'react';
import { login } from '../../Services';
import { BounceLoader } from 'react-spinners';
import './login.scss';
import Password from '../input/password';

const Login = (props) => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userNameError, setUserNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [responseLogin, setResponseLogin] = useState('')

  const manageLoggedUser = (data) => {
    if(data && data.username) {
        setResponseLogin("Welcome " + data.username + "!!!")
        props.setLoggedIn(true)
        if(data.email) {
          props.setEmail(data.email)
        } else {
          props.setEmail('')
        }  
    } else {
        setResponseLogin(data + "!!!")
        props.setLoggedIn(false)
    }
    props.setLoading(false)
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
        setUserNameError('Please enter your username')
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
    props.setLoading(true)
    console.log(login(payload, manageLoggedUser))

  }

  if(props.loading) {
    return (
        <div className='spinner-center'>
            <BounceLoader loading={props.loading} size={50} color="#123abc" speedMultiplier={1.5} />
        </div>
    )
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
            <Password 
                    password={password} 
                    setPassword={setPassword}
                    passwordError={passwordError}
                    placeholder={"Enter password"} />
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