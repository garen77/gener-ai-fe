import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Password from '../input/password'


const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [userNameError, setUserNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
  
    const navigate = useNavigate()

    const back = () => {
        navigate('/')
    }

    const register = () => {
        setUserNameError('')
        setPasswordError('')

        if ('' === userName) {
            setUserNameError('Please enter your username')
            return
        }
      
        if ('' === password) {
          setPasswordError('Please enter a password')
          return
        }
    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Registration</div>
            </div>
            <br />
            <div className={'inputContainer'}>
                <label htmlFor='username'>Username</label>
                <input
                id={"username"}
                value={userName}
                placeholder="Enter your username here"
                onChange={(ev) => setUserName(ev.target.value)}
                className={'inputBox'}
                />
                <label className="errorLabel">{userNameError}</label>
            </div>
            <Password 
                password={password} 
                setPassword={setPassword}
                passwordError={passwordError} />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={back} value={'Back'} />
                <input className={'inputButton'} type="button" onClick={register} value={'Register'} />
            </div>
        </div>
    )
}

export default Register